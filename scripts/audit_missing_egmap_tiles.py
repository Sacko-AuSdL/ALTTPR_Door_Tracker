from __future__ import annotations

import argparse
import json
import re
from pathlib import Path
from typing import Any

from PIL import Image, ImageChops, ImageDraw


TILE_COORD_PATTERN = re.compile(r"-tile-(\d+)-(\d+)$")


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Find egmap supertiles that are not generated as room assets.",
    )
    parser.add_argument(
        "--source-image",
        default="../KrisDavie-DoorTracker/data/maps/egmap.png",
        help="Path to egmap.png.",
    )
    parser.add_argument(
        "--assets-dir",
        default="public/assets/krisdavie/rooms",
        help="Directory containing generated room tile images.",
    )
    parser.add_argument(
        "--out-dir",
        default="diagnostics/egmap-audit",
        help="Output directory for audit files.",
    )
    parser.add_argument(
        "--tile-size",
        type=int,
        default=512,
        help="Supertile size in pixels.",
    )

    parser.add_argument(
        "--mode",
        choices=["door-coordinates", "non-empty"],
        default="door-coordinates",
        help="How to detect candidate tiles.",
    )

    parser.add_argument(
        "--krisdavie-source",
        default="../KrisDavie-DoorTracker",
        help="Path to the KrisDavie/DoorTracker repository.",
    )

    args = parser.parse_args()

    source_image_path = Path(args.source_image).resolve()
    assets_dir = Path(args.assets_dir).resolve()
    out_dir = Path(args.out_dir).resolve()

    if not source_image_path.exists():
        raise SystemExit(f"Source image not found: {source_image_path}")

    if not assets_dir.exists():
        raise SystemExit(f"Assets directory not found: {assets_dir}")

    out_dir.mkdir(parents=True, exist_ok=True)

    source_image = Image.open(source_image_path).convert("RGB")

    columns = source_image.width // args.tile_size
    rows = source_image.height // args.tile_size

    generated_coords = collect_generated_tile_coords(assets_dir)
    door_details_by_coord: dict[tuple[int, int], list[dict[str, Any]]] = {}

    if args.mode == "door-coordinates":
        door_details_by_coord = collect_door_coordinate_tile_data(
            Path(args.krisdavie_source).resolve(),
        )
        candidate_coords = set(door_details_by_coord.keys())
    else:
        candidate_coords = collect_non_empty_tile_coords(
            source_image=source_image,
            tile_size=args.tile_size,
            columns=columns,
            rows=rows,
        )

    missing_coords = sorted(
        candidate_coords - generated_coords,
        key=lambda coord: (coord[1], coord[0]),
    )

    audit_data: dict[str, Any] = {
        "sourceImage": str(source_image_path),
        "assetsDir": str(assets_dir),
        "tileSize": args.tile_size,
        "grid": {
            "columns": columns,
            "rows": rows,
        },
        "mode": args.mode,
        "candidateCount": len(candidate_coords),
        "generatedCount": len(generated_coords),
        "missingCount": len(missing_coords),
        "missingTiles": [
            build_missing_tile_entry(
                tile_x=x,
                tile_y=y,
                raw_doors=door_details_by_coord.get((x, y), []),
            )
            for x, y in missing_coords
        ],
    }

    (out_dir / "missing-egmap-tiles.json").write_text(
        json.dumps(audit_data, indent=2),
        encoding="utf-8",
    )

    write_contact_sheet(
        source_image=source_image,
        tile_size=args.tile_size,
        coords=missing_coords,
        output_path=out_dir / "missing-egmap-tiles.png",
    )

    print(f"egmap grid: {columns} x {rows}")
    print(f"generated tiles: {len(generated_coords)}")
    print(f"candidate tiles: {len(candidate_coords)}")
    print(f"missing candidate tiles: {len(missing_coords)}")
    print(f"Wrote {out_dir / 'missing-egmap-tiles.json'}")
    print(f"Wrote {out_dir / 'missing-egmap-tiles.png'}")


def collect_generated_tile_coords(assets_dir: Path) -> set[tuple[int, int]]:
    coords: set[tuple[int, int]] = set()

    for image_path in assets_dir.rglob("*.png"):
        match = TILE_COORD_PATTERN.search(image_path.stem)

        if not match:
            continue

        coords.add((int(match.group(1)), int(match.group(2))))

    return coords

def collect_door_coordinate_tile_data(
        krisdavie_source: Path,
) -> dict[tuple[int, int], list[dict[str, Any]]]:
    import sys

    if not krisdavie_source.exists():
        raise SystemExit(f"KrisDavie source not found: {krisdavie_source}")

    sys.path.insert(0, str(krisdavie_source))

    from data.doors_data import door_coordinates  # type: ignore

    return {
        (int(tile_x), int(tile_y)): list(raw_doors)
        for (tile_x, tile_y), raw_doors in door_coordinates.items()
    }

def collect_non_empty_tile_coords(
        source_image: Image.Image,
        tile_size: int,
        columns: int,
        rows: int,
) -> set[tuple[int, int]]:
    coords: set[tuple[int, int]] = set()

    for y in range(rows):
        for x in range(columns):
            tile = crop_tile(source_image, x, y, tile_size)

            if is_non_empty_tile(tile):
                coords.add((x, y))

    return coords

def build_missing_tile_entry(
        tile_x: int,
        tile_y: int,
        raw_doors: list[dict[str, Any]],
) -> dict[str, Any]:
    return {
        "x": tile_x,
        "y": tile_y,
        "id": f"{tile_x}-{tile_y}",
        "roomName": derive_room_name(raw_doors, (tile_x, tile_y)),
        "doors": [
            {
                "name": str(raw_door.get("name", "")),
                "label": derive_door_label(str(raw_door.get("name", ""))),
                "x": raw_door.get("x"),
                "y": raw_door.get("y"),
                "button": raw_door.get("button"),
                "locType": raw_door.get("loc_type"),
            }
            for raw_door in raw_doors
        ],
    }


def derive_room_name(
        raw_doors: list[dict[str, Any]],
        tile_coord: tuple[int, int],
) -> str:
    if not raw_doors:
        return f"Tile {tile_coord[0]},{tile_coord[1]}"

    first_door_name = str(raw_doors[0].get("name", ""))
    stem = strip_door_suffix(first_door_name)

    if not stem:
        stem = f"Tile {tile_coord[0]},{tile_coord[1]}"

    return f"{stem} ({tile_coord[0]},{tile_coord[1]})"


def derive_door_label(name: str) -> str:
    special_patterns = [
        r"(Big Key Door [A-Z]{1,2})$",
        r"(Key Door [A-Z]{1,2})$",
        r"(Up Stairs)$",
        r"(Down Stairs)$",
        r"(North Stairs)$",
        r"(South Stairs)$",
        r"(Up Ladder)$",
        r"(Down Ladder)$",
        r"(Drop Entrance)$",
        r"(Drop)$",
        r"(Hole)$",
        r"([A-Z]{1,2} Edge)$",
        r"([A-Z]{1,2})$",
    ]

    for pattern in special_patterns:
        match = re.search(pattern, name)
        if match:
            return match.group(1)

    return name


def strip_door_suffix(name: str) -> str:
    result = name

    suffix_patterns = [
        r"\s+Big Key Door [A-Z]{1,2}$",
        r"\s+Key Door [A-Z]{1,2}$",
        r"\s+Up Stairs$",
        r"\s+Down Stairs$",
        r"\s+North Stairs$",
        r"\s+South Stairs$",
        r"\s+Up Ladder$",
        r"\s+Down Ladder$",
        r"\s+Drop Entrance$",
        r"\s+Drop$",
        r"\s+Hole$",
        r"\s+[A-Z]{1,2} Edge$",
        r"\s+[A-Z]{1,2}$",
        r"\s+[NSEW]$",
    ]

    changed = True

    while changed:
        changed = False

        for pattern in suffix_patterns:
            next_result = re.sub(pattern, "", result).strip()

            if next_result != result:
                result = next_result
                changed = True

    return result.strip()

def is_non_empty_tile(tile: Image.Image) -> bool:
    background = Image.new("RGB", tile.size, tile.getpixel((0, 0)))
    diff = ImageChops.difference(tile, background)

    return diff.getbbox() is not None


def crop_tile(
        source_image: Image.Image,
        tile_x: int,
        tile_y: int,
        tile_size: int,
) -> Image.Image:
    left = tile_x * tile_size
    top = tile_y * tile_size

    return source_image.crop(
        (
            left,
            top,
            left + tile_size,
            top + tile_size,
        ),
    )


def write_contact_sheet(
        source_image: Image.Image,
        tile_size: int,
        coords: list[tuple[int, int]],
        output_path: Path,
) -> None:
    if not coords:
        placeholder = Image.new("RGB", (420, 80), "#111827")
        draw = ImageDraw.Draw(placeholder)
        draw.text((20, 28), "No missing tiles found.", fill="#f9fafb")
        placeholder.save(output_path)
        return

    thumb_size = 128
    label_height = 24
    cell_width = thumb_size
    cell_height = thumb_size + label_height
    columns = 6
    rows = (len(coords) + columns - 1) // columns

    sheet = Image.new(
        "RGB",
        (columns * cell_width, rows * cell_height),
        "#111827",
    )
    draw = ImageDraw.Draw(sheet)

    for index, (tile_x, tile_y) in enumerate(coords):
        column = index % columns
        row = index // columns

        cell_x = column * cell_width
        cell_y = row * cell_height

        tile = crop_tile(source_image, tile_x, tile_y, tile_size)
        tile = tile.resize((thumb_size, thumb_size), Image.Resampling.NEAREST)

        sheet.paste(tile, (cell_x, cell_y))

        label = f"{tile_x},{tile_y}"
        draw.rectangle(
            (cell_x, cell_y + thumb_size, cell_x + cell_width, cell_y + cell_height),
            fill="#030712",
        )
        draw.text(
            (cell_x + 6, cell_y + thumb_size + 5),
            label,
            fill="#f9fafb",
        )

    sheet.save(output_path)


if __name__ == "__main__":
    main()