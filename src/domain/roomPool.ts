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
    settings: TrackerRunSettings;
};

export function getAvailableRoomsForSettings({
                                                 activeDungeon,
                                                 allDungeons,
                                                 visibleRoomIds,
                                                 settings,
                                             }: GetAvailableRoomsInput): DungeonRoom[] {
    const rooms = getRoomsForDoorShuffleMode({
        activeDungeon,
        allDungeons,
        settings,
    });

    return removeVisibleRooms(rooms, visibleRoomIds);
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


function removeVisibleRooms(
    rooms: DungeonRoom[],
    visibleRoomIds: string[],
): DungeonRoom[] {
    const visibleRoomIdSet = new Set(visibleRoomIds);

    return rooms.filter((room) => !visibleRoomIdSet.has(room.id));
}