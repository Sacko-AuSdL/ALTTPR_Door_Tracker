import type { DungeonDefinition, DungeonRoom } from "../types/dungeon";
import type { TrackerRunSettings } from "../types/runSettings";

type GetAvailableRoomsInput = {
    activeDungeon: DungeonDefinition;
    allDungeons: DungeonDefinition[];
    visibleRoomIds: string[];
    settings: TrackerRunSettings;
};

export function getAvailableRoomsForSettings({
                                                 activeDungeon,
                                                 allDungeons,
                                                 visibleRoomIds,
                                                 settings,
                                             }: GetAvailableRoomsInput): DungeonRoom[] {
    const visibleRoomIdSet = new Set(visibleRoomIds);

    switch (settings.doorShuffleMode) {
        case "basic":
        case "own-dungeon":
            return activeDungeon.rooms.filter(
                (room) => !visibleRoomIdSet.has(room.id),
            );

        case "cross-dungeon":
            return allDungeons
                .flatMap((dungeon) => dungeon.rooms)
                .filter((room) => !visibleRoomIdSet.has(room.id));
    }
}