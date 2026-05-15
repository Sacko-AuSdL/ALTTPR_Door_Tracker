import type { DungeonDefinition, DungeonRoom } from "../types/dungeon";

export type RoomGroup = {
    dungeonId: string;
    dungeonName: string;
    rooms: DungeonRoom[];
};

export function groupRoomsByOriginalDungeon(
    rooms: DungeonRoom[],
    allDungeons: DungeonDefinition[],
): RoomGroup[] {
    const groupsByDungeonId = new Map<string, RoomGroup>();

    for (const room of rooms) {
        const dungeonId = room.originalDungeonId || room.dungeonId;
        const dungeon = allDungeons.find((candidate) => candidate.id === dungeonId);
        const dungeonName = dungeon?.name.replace(" - Sample", "") ?? dungeonId;

        const existingGroup = groupsByDungeonId.get(dungeonId);

        if (existingGroup) {
            existingGroup.rooms.push(room);
        } else {
            groupsByDungeonId.set(dungeonId, {
                dungeonId,
                dungeonName,
                rooms: [room],
            });
        }
    }

    return allDungeons
        .map((dungeon) => groupsByDungeonId.get(dungeon.id))
        .filter((group): group is RoomGroup => group !== undefined);
}