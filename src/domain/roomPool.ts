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
    const rooms =
        settings.doorShuffleMode === DoorShuffleModes.CrossDungeon
            ? allDungeons.flatMap((dungeon) => dungeon.rooms)
            : activeDungeon.rooms;

    return removeVisibleRooms(rooms, visibleRoomIds);
}

function removeVisibleRooms(
    rooms: DungeonRoom[],
    visibleRoomIds: string[],
): DungeonRoom[] {
    const visibleRoomIdSet = new Set(visibleRoomIds);

    return rooms.filter((room) => !visibleRoomIdSet.has(room.id));
}