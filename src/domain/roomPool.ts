import type { DungeonDefinition, DungeonRoom } from "../types/dungeon";
import { getBeginnerDungeonGroupIds } from "./beginnerDungeonGroups";
import {
    DoorShuffleModes,
    type TrackerRunSettings,
} from "../types/runSettings";

type GetAvailableRoomsInput = {
    activeDungeon: DungeonDefinition;
    allDungeons: DungeonDefinition[];
    visibleRoomIds: string[];
    excludedRoomIds?: string[];
    settings: TrackerRunSettings;
};

export function getAvailableRoomsForSettings({
                                                 activeDungeon,
                                                 allDungeons,
                                                 visibleRoomIds,
                                                 excludedRoomIds,
                                                 settings,
                                             }: GetAvailableRoomsInput): DungeonRoom[] {
    const rooms = getRoomsForDoorShuffleMode({
        activeDungeon,
        allDungeons,
        settings,
    });

    return removeExcludedRooms(rooms, excludedRoomIds ?? visibleRoomIds);
}

type GetRoomsForDoorShuffleModeInput = {
    activeDungeon: DungeonDefinition;
    allDungeons: DungeonDefinition[];
    settings: TrackerRunSettings;
};

function getRoomsForDoorShuffleMode({
                                        activeDungeon,
                                        allDungeons,
                                        settings,
                                    }: GetRoomsForDoorShuffleModeInput): DungeonRoom[] {
    switch (settings.doorShuffleMode) {
        case DoorShuffleModes.Beginner: {
            const beginnerDungeonGroupIds = getBeginnerDungeonGroupIds(
                activeDungeon.id,
            );

            return allDungeons
                .filter((dungeon) =>
                    beginnerDungeonGroupIds.includes(dungeon.id),
                )
                .flatMap((dungeon) => dungeon.rooms);
        }

        case DoorShuffleModes.OwnDungeon:
            return activeDungeon.rooms;

        case DoorShuffleModes.CrossDungeon:
            return allDungeons.flatMap((dungeon) => dungeon.rooms);
    }
}

function removeExcludedRooms(
    rooms: DungeonRoom[],
    excludedRoomIds: string[],
): DungeonRoom[] {
    const excludedRoomIdSet = new Set(excludedRoomIds);

    return rooms.filter((room) => !excludedRoomIdSet.has(room.id));
}