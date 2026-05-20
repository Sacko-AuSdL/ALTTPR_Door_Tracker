from __future__ import annotations
import re
import argparse
import json
from pathlib import Path
from typing import Any


DUNGEON_PREFIX_TO_ID = {
    "Eastern": "eastern-palace",
    "Desert": "desert-palace",
    "Hera": "tower-of-hera",
    "Tower": "castle-tower",
    "Hyrule Castle": "hyrule-castle",
    "Hyrule Dungeon": "hyrule-castle",
    "Sewers": "hyrule-castle",
    "PoD": "palace-of-darkness",
    "Swamp": "swamp-palace",
    "Skull": "skull-woods",
    "Thieves": "thieves-town",
    "Ice": "ice-palace",
    "Mire": "misery-mire",
    "TR": "turtle-rock",
    "GT": "ganons-tower",
}


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Group missing egmap tiles by suggested dungeon for manual review.",
    )
    parser.add_argument(
        "--audit",
        default="diagnostics/egmap-audit/missing-egmap-tiles.json",
        help="Path to missing-egmap-tiles.json.",
    )
    parser.add_argument(
        "--review",
        default="scripts/manual_missing_tiles_review.json",
        help="Path to manual review file.",
    )
    parser.add_argument(
        "--out-json",
        default="diagnostics/egmap-audit/missing-egmap-tiles.grouped.json",
        help="Output grouped JSON file.",
    )
    parser.add_argument(
        "--out-md",
        default="diagnostics/egmap-audit/missing-egmap-tiles.review.md",
        help="Output markdown review file.",
    )
    parser.add_argument(
        "--out-include-candidates",
        default="diagnostics/egmap-audit/missing-egmap-tiles.include-candidates.json",
        help="Output JSON file with copyable include candidates.",
    )

    args = parser.parse_args()

    audit_path = Path(args.audit)
    review_path = Path(args.review)
    out_json_path = Path(args.out_json)
    out_md_path = Path(args.out_md)
    out_include_candidates_path = Path(args.out_include_candidates)

    audit_data = read_json(audit_path)
    review_data = read_json(review_path)

    included_tiles = collect_reviewed_tiles(review_data.get("include", []))
    ignored_tiles = collect_reviewed_tiles(review_data.get("ignore", []))

    grouped_tiles = group_missing_tiles(
        missing_tiles=audit_data.get("missingTiles", []),
        included_tiles=included_tiles,
        ignored_tiles=ignored_tiles,
    )

    include_candidates = build_include_candidates(grouped_tiles)

    out_json_path.parent.mkdir(parents=True, exist_ok=True)
    out_md_path.parent.mkdir(parents=True, exist_ok=True)

    out_json_path.write_text(
        json.dumps(grouped_tiles, indent=2, ensure_ascii=False),
        encoding="utf-8",
    )

    out_md_path.write_text(
        build_markdown_review(grouped_tiles),
        encoding="utf-8",
    )
    out_include_candidates_path.parent.mkdir(parents=True, exist_ok=True)

    out_include_candidates_path.write_text(
        json.dumps(include_candidates, indent=2, ensure_ascii=False),
        encoding="utf-8",
    )

    open_count = sum(
        1
        for group in grouped_tiles["groups"]
        for tile in group["tiles"]
        if tile["reviewStatus"] == "open"
    )

    print(f"Read {audit_path}")
    print(f"Read {review_path}")
    print(f"Grouped {grouped_tiles['totalCount']} missing tiles")
    print(f"Open review tiles: {open_count}")
    print(f"Wrote {out_json_path}")
    print(f"Wrote {out_md_path}")
    print(f"Wrote {out_include_candidates_path}")


def read_json(path: Path) -> dict[str, Any]:
    if not path.exists():
        raise SystemExit(f"File not found: {path}")

    return json.loads(path.read_text(encoding="utf-8"))


def collect_reviewed_tiles(entries: list[dict[str, Any]]) -> set[str]:
    reviewed_tiles: set[str] = set()

    for entry in entries:
        tile = entry.get("tile")

        if not isinstance(tile, list) or len(tile) != 2:
            continue

        reviewed_tiles.add(get_tile_key(int(tile[0]), int(tile[1])))

    return reviewed_tiles


def group_missing_tiles(
        missing_tiles: list[dict[str, Any]],
        included_tiles: set[str],
        ignored_tiles: set[str],
) -> dict[str, Any]:
    groups_by_dungeon_id: dict[str, dict[str, Any]] = {}

    for tile in missing_tiles:
        tile_x = int(tile["x"])
        tile_y = int(tile["y"])
        tile_key = get_tile_key(tile_x, tile_y)
        suggested_dungeon_id = suggest_dungeon_id(str(tile.get("roomName", "")))

        review_status = "open"

        if tile_key in included_tiles:
            review_status = "included"
        elif tile_key in ignored_tiles:
            review_status = "ignored"

        group = groups_by_dungeon_id.setdefault(
            suggested_dungeon_id,
            {
                "dungeonId": suggested_dungeon_id,
                "tiles": [],
            },
        )

        group["tiles"].append(
            {
                "tile": [tile_x, tile_y],
                "id": tile.get("id"),
                "roomName": tile.get("roomName"),
                "suggestedDungeonId": suggested_dungeon_id,
                "reviewStatus": review_status,
                "doorCount": len(tile.get("doors", [])),
                "doors": tile.get("doors", []),
            },
        )

    groups = sorted(
        groups_by_dungeon_id.values(),
        key=lambda group: group["dungeonId"],
    )

    for group in groups:
        group["tiles"] = sorted(
            group["tiles"],
            key=lambda tile: (tile["tile"][1], tile["tile"][0]),
        )
        group["tileCount"] = len(group["tiles"])

    return {
        "totalCount": len(missing_tiles),
        "groups": groups,
    }


def suggest_dungeon_id(room_name: str) -> str:
    for prefix, dungeon_id in DUNGEON_PREFIX_TO_ID.items():
        if room_name.startswith(prefix):
            return dungeon_id

    return "unknown"


def build_markdown_review(grouped_tiles: dict[str, Any]) -> str:
    lines: list[str] = [
        "# Missing EG Map Tiles Review",
        "",
        "Use this file as a review helper.",
        "",
        "Copy accepted tiles into `scripts/manual_missing_tiles_review.json`.",
        "",
    ]

    for group in grouped_tiles["groups"]:
        lines.append(f"## {group['dungeonId']}")
        lines.append("")

        for tile in group["tiles"]:
            tile_x, tile_y = tile["tile"]
            status = tile["reviewStatus"]
            room_name = tile["roomName"]
            door_count = tile["doorCount"]

            lines.append(
                f"- [ ] `{tile_x},{tile_y}` **{room_name}** "
                f"({door_count} doors, status: `{status}`)"
            )

            for door in tile["doors"]:
                label = door.get("label")
                name = door.get("name")
                x = door.get("x")
                y = door.get("y")
                lines.append(f"  - `{label}` at `{x},{y}` — {name}")

            include_entry = {
                "tile": tile["tile"],
                "dungeonId": tile["suggestedDungeonId"],
                "roomName": remove_tile_suffix(str(tile["roomName"])),
            }

            lines.append("")
            lines.append("  Include candidate:")
            lines.append("")
            lines.append("  ```json")
            lines.append(indent_json(include_entry, prefix="  "))
            lines.append("  ```")
            lines.append("")

    return "\n".join(lines)

def indent_json(value: dict[str, Any], prefix: str) -> str:
    serialized = json.dumps(value, indent=2, ensure_ascii=False)

    return "\n".join(f"{prefix}{line}" for line in serialized.splitlines())

def get_tile_key(tile_x: int, tile_y: int) -> str:
    return f"{tile_x},{tile_y}"

def build_include_candidates(grouped_tiles: dict[str, Any]) -> dict[str, Any]:
    include_entries: list[dict[str, Any]] = []

    for group in grouped_tiles["groups"]:
        for tile in group["tiles"]:
            if tile["reviewStatus"] != "open":
                continue

            include_entries.append(
                {
                    "tile": tile["tile"],
                    "dungeonId": tile["suggestedDungeonId"],
                    "roomName": remove_tile_suffix(str(tile["roomName"])),
                },
            )

    return {
        "include": include_entries,
        "ignore": [],
    }


def remove_tile_suffix(room_name: str) -> str:
    return re.sub(r"\s+\(\d+,\d+\)$", "", room_name).strip()

if __name__ == "__main__":
    main()