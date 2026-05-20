import type { DungeonDefinition } from "../types/dungeon";
import { EntranceModes, type TrackerRunSettings } from "../types/runSettings";

const VANILLA_START_ROOM_IDS: Record<string, string[]> = {
    "hyrule-castle": [
        "hyrule-castle-tile-1-6",
    ],
    "eastern-palace": [
        "eastern-palace-tile-9-12",
    ],
    "desert-palace": [
        "desert-palace-tile-4-8",
    ],
    "tower-of-hera": [
        "tower-of-hera-tile-7-7",
    ],
    "castle-tower": [
        "castle-tower-tile-0-14",
    ],
    "palace-of-darkness": [
        "palace-of-darkness-tile-10-4",
    ],
    "swamp-palace": [
        "swamp-palace-tile-8-2",
    ],
    "skull-woods": [
        "skull-woods-tile-8-5",
    ],
    "thieves-town": [
        "thieves-town-tile-11-13",
    ],
    "ice-palace": [
        "ice-palace-tile-14-0",
    ],
    "misery-mire": [
        "misery-mire-tile-8-9",
    ],
    "turtle-rock": [
        "turtle-rock-tile-6-13",
    ],
    "ganons-tower": [
        "ganons-tower-tile-12-0",
    ],
};

export function getStartingRoomIds(
    dungeon: DungeonDefinition,
    settings: TrackerRunSettings,
): string[] {
    if (settings.entranceMode !== EntranceModes.Vanilla) {
        return [];
    }

    const configuredStartingRoomIds = VANILLA_START_ROOM_IDS[dungeon.id];

    if (configuredStartingRoomIds) {
        return configuredStartingRoomIds;
    }

    return dungeon.rooms.length > 0 ? [dungeon.rooms[0].id] : [];
}