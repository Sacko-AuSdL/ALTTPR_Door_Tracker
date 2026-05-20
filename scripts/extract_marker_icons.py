from __future__ import annotations

import argparse
from pathlib import Path
from typing import NamedTuple

from PIL import Image


class MarkerIcon(NamedTuple):
    source_name: str
    output_name: str
    grid_x: int
    grid_y: int


# Coordinates from KrisDavie item_sprite_data.py:
MARKER_ICONS = [
    MarkerIcon("Bow", "bow.png", 1, 0),
    MarkerIcon("Fire Rod", "fire-rod.png", 0, 1),
    MarkerIcon("Lamp", "lamp.png", 5, 1),
    MarkerIcon("Cane of Somaria", "somaria.png", 2, 2),
    MarkerIcon("Single Bomb", "bomb.png", 6, 2),
]


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Extract door marker icons from KrisDavie Item_Sheet.png.",
    )
    parser.add_argument(
        "--source-image",
        default="../KrisDavie-DoorTracker/data/Item_Sheet.png",
        help="Path to KrisDavie Item_Sheet.png.",
    )
    parser.add_argument(
        "--out-dir",
        default="public/assets/markers",
        help="Output directory for extracted marker icons.",
    )
    parser.add_argument(
        "--sprite-size",
        type=int,
        default=16,
        help="Source sprite cell size in pixels.",
    )
    parser.add_argument(
        "--output-size",
        type=int,
        default=32,
        help="Output icon size in pixels.",
    )

    args = parser.parse_args()

    source_image_path = Path(args.source_image).resolve()
    output_dir = Path(args.out_dir).resolve()

    if not source_image_path.exists():
        raise SystemExit(f"Source image not found: {source_image_path}")

    output_dir.mkdir(parents=True, exist_ok=True)

    source_image = Image.open(source_image_path).convert("RGBA")

    for marker_icon in MARKER_ICONS:
        icon = crop_icon(
            source_image=source_image,
            grid_x=marker_icon.grid_x,
            grid_y=marker_icon.grid_y,
            sprite_size=args.sprite_size,
        )

        if args.output_size != args.sprite_size:
            icon = icon.resize(
                (args.output_size, args.output_size),
                Image.Resampling.NEAREST,
            )

        output_path = output_dir / marker_icon.output_name
        icon.save(output_path)

        print(
            f"Extracted {marker_icon.source_name} "
            f"({marker_icon.grid_x},{marker_icon.grid_y}) -> {output_path}"
        )

    ensure_blocked_svg(output_dir / "blocked.svg")

    print(f"Done. Wrote marker icons to {output_dir}")


def crop_icon(
        source_image: Image.Image,
        grid_x: int,
        grid_y: int,
        sprite_size: int,
) -> Image.Image:
    left = grid_x * sprite_size
    top = grid_y * sprite_size
    right = left + sprite_size
    bottom = top + sprite_size

    if right > source_image.width or bottom > source_image.height:
        raise SystemExit(
            "Crop outside source image: "
            f"grid=({grid_x},{grid_y}), "
            f"crop=({left},{top},{right},{bottom}), "
            f"source={source_image.size}"
        )

    return source_image.crop((left, top, right, bottom))


def ensure_blocked_svg(output_path: Path) -> None:
    if output_path.exists():
        return

    output_path.write_text(
        """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <circle cx="16" cy="16" r="14" fill="#7f1d1d" stroke="#fecaca" stroke-width="3"/>
  <path d="M9 9L23 23M23 9L9 23" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
</svg>
""",
        encoding="utf-8",
    )

    print(f"Created {output_path}")


if __name__ == "__main__":
    main()