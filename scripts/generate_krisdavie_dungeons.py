from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path
from typing import Any


EXCLUDED_LAYOUT_KEYS = {
    "Lobbyable_Tiles",
}

DUNGEON_KEY_TO_ID = {
    "Hyrule_Castle": "hyrule-castle",
    "Eastern_Palace": "eastern-palace",
    "Desert_Palace": "desert-palace",
    "Tower_of_Hera": "tower-of-hera",
    "Castle_Tower": "castle-tower",
    "Palace_of_Darkness": "palace-of-darkness",
    "Swamp_Palace": "swamp-palace",
    "Skull_Woods": "skull-woods",
    "Thieves_Town": "thieves-town",
    "Ice_Palace": "ice-palace",
    "Misery_Mire": "misery-mire",
    "Turtle_Rock": "turtle-rock",
    "Ganons_Tower": "ganons-tower",
}

DIRECTION_SUFFIXES = {
    "N",
    "S",
    "E",
    "W",
    "NE",
    "NW",
    "SE",
    "SW",
    "EN",
    "ES",
    "WN",
    "WS",
}


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Generate ALTTPR Door Tracker dungeon data from KrisDavie DoorTracker data.",
    )
    parser.add_argument(
        "--source",
        default="../KrisDavie-DoorTracker",
        help="Path to the KrisDavie/DoorTracker repository.",
    )
    parser.add_argument(
        "--out",
        default="src/data/dungeons/generated/krisdavie-dungeons.generated.ts",
        help="Output TypeScript file.",
    )

    args = parser.parse_args()

    source_root = Path(args.source).resolve()
    output_path = Path(args.out).resolve()

    if not source_root.exists():
        raise SystemExit(f"Source repository not found: {source_root}")

    data_path = source_root / "data"
    if not data_path.exists():
        raise SystemExit(f"KrisDavie data directory not found: {data_path}")

    sys.path.insert(0, str(source_root))

    from data.doors_data import door_coordinates  # type: ignore
    from data.vanilla_data import vanilla_layout_optimized  # type: ignore

    dungeons = build_dungeons(
        vanilla_layout_optimized=vanilla_layout_optimized,
        door_coordinates=door_coordinates,
    )

    write_typescript_file(output_path, dungeons)

    room_count = sum(len(dungeon["rooms"]) for dungeon in dungeons)
    door_count = sum(
        len(room["doors"])
        for dungeon in dungeons
        for room in dungeon["rooms"]
    )

    print(f"Generated {len(dungeons)} dungeons")
    print(f"Generated {room_count} rooms")
    print(f"Generated {door_count} doors")
    print(f"Wrote {output_path}")


def build_dungeons(
        vanilla_layout_optimized: dict[str, Any],
        door_coordinates: dict[tuple[int, int], list[dict[str, Any]]],
) -> list[dict[str, Any]]:
    used_door_ids: set[str] = set()
    dungeons: list[dict[str, Any]] = []

    for dungeon_key, layout in vanilla_layout_optimized.items():
        if dungeon_key in EXCLUDED_LAYOUT_KEYS:
            continue

        dungeon_id = get_dungeon_id(dungeon_key)
        dungeon_name = get_dungeon_name(dungeon_key)

        rooms: list[dict[str, Any]] = []

        tile_entries = layout.get("tiles", {})
        sorted_tile_coords = sorted(
            tile_entries.keys(),
            key=lambda tile_coord: (tile_coord[1], tile_coord[0]),
        )

        for tile_x, tile_y in sorted_tile_coords:
            tile_coord = (tile_x, tile_y)
            raw_doors = door_coordinates.get(tile_coord, [])

            if not raw_doors:
                continue

            room_id = f"{dungeon_id}-tile-{tile_x}-{tile_y}"
            room_name = derive_room_name(raw_doors, tile_coord)

            doors = [
                build_door(
                    raw_door=raw_door,
                    room_id=room_id,
                    used_door_ids=used_door_ids,
                )
                for raw_door in raw_doors
            ]

            rooms.append(
                {
                    "id": room_id,
                    "name": room_name,
                    "dungeonId": dungeon_id,
                    "originalDungeonId": dungeon_id,
                    "doors": doors,
                }
            )

        dungeons.append(
            {
                "id": dungeon_id,
                "name": dungeon_name,
                "rooms": rooms,
            }
        )

    return dungeons


def build_door(
        raw_door: dict[str, Any],
        room_id: str,
        used_door_ids: set[str],
) -> dict[str, Any]:
    name = str(raw_door["name"])
    door_type = infer_door_type(name)
    door_id = make_unique_id(slugify(name), used_door_ids)

    return {
        "id": door_id,
        "roomId": room_id,
        "label": derive_door_label(name),
        "direction": infer_door_direction(raw_door, door_type),
        "type": door_type,
    }


def derive_room_name(raw_doors: list[dict[str, Any]], tile_coord: tuple[int, int]) -> str:
    first_door_name = str(raw_doors[0]["name"])
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


def infer_door_type(name: str) -> str:
    lower_name = name.lower()

    if "big key" in lower_name:
        return "bigkey"

    if "key door" in lower_name or "key stairs" in lower_name:
        return "key"

    if "stairs" in lower_name or "ladder" in lower_name:
        return "stair"

    if "drop" in lower_name or "hole" in lower_name or "pit" in lower_name:
        return "drop"

    if "trap door" in lower_name or "shutter" in lower_name:
        return "shutter"

    return "normal"


def infer_door_direction(raw_door: dict[str, Any], door_type: str) -> str:
    if door_type == "stair":
        return "stairs"

    if door_type == "drop":
        return "drop"

    x = int(raw_door.get("x", 256))
    y = int(raw_door.get("y", 256))

    distance_to_left = x
    distance_to_right = 512 - x
    distance_to_top = y
    distance_to_bottom = 512 - y

    nearest_edge = min(
        [
            ("west", distance_to_left),
            ("east", distance_to_right),
            ("north", distance_to_top),
            ("south", distance_to_bottom),
        ],
        key=lambda item: item[1],
    )

    return nearest_edge[0]


def get_dungeon_id(dungeon_key: str) -> str:
    return DUNGEON_KEY_TO_ID.get(dungeon_key, slugify(dungeon_key))


def get_dungeon_name(dungeon_key: str) -> str:
    return dungeon_key.replace("_", " ")


def slugify(value: str) -> str:
    value = value.lower()
    value = value.replace("'", "")
    value = re.sub(r"[^a-z0-9]+", "-", value)
    value = value.strip("-")
    return value or "unknown"


def make_unique_id(base_id: str, used_ids: set[str]) -> str:
    candidate = base_id
    index = 2

    while candidate in used_ids:
        candidate = f"{base_id}-{index}"
        index += 1

    used_ids.add(candidate)
    return candidate


def write_typescript_file(output_path: Path, dungeons: list[dict[str, Any]]) -> None:
    output_path.parent.mkdir(parents=True, exist_ok=True)

    serialized_dungeons = json.dumps(
        dungeons,
        ensure_ascii=False,
        indent=2,
    )

    content = f"""import type {{ DungeonDefinition }} from "../../../types/dungeon";

export const krisdavieDungeons = {serialized_dungeons} satisfies DungeonDefinition[];
"""

    output_path.write_text(content, encoding="utf-8")


if __name__ == "__main__":
    main()