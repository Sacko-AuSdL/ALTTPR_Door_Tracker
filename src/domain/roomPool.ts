import type { DungeonDefinition, DungeonRoom } from "../types/dungeon";
import {
    DoorShuffleModes,
    type TrackerRunSettings,
} from "../types/runSettings";

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
        case DoorShuffleModes.Basic:
        case DoorShuffleModes.OwnDungeon:
            return activeDungeon.rooms.filter(
                (room) => !visibleRoomIdSet.has(room.id),
            );

        case DoorShuffleModes.CrossDungeon:
            return allDungeons
                .flatMap((dungeon) => dungeon.rooms)
                .filter((room) => !visibleRoomIdSet.has(room.id));
    }
}