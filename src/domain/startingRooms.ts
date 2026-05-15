import type { DungeonDefinition } from "../types/dungeon";
import type { TrackerRunSettings } from "../types/runSettings";

export function getStartingRoomIds(
    dungeon: DungeonDefinition,
    settings: TrackerRunSettings,
): string[] {
    if (settings.entranceMode !== "vanilla") {
        return [];
    }

    const lobbyRoom =
        dungeon.rooms.find((room) => room.id.endsWith("-lobby")) ??
        dungeon.rooms.find((room) =>
            room.name.toLowerCase().includes("lobby"),
        );

    return lobbyRoom ? [lobbyRoom.id] : [];
}