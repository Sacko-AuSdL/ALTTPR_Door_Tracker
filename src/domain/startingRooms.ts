import type { DungeonDefinition } from "../types/dungeon";

export function getStartingRoomIds(dungeon: DungeonDefinition): string[] {
    const lobbyRoom =
        dungeon.rooms.find((room) => room.id.endsWith("-lobby")) ??
        dungeon.rooms[0];

    return lobbyRoom ? [lobbyRoom.id] : [];
}