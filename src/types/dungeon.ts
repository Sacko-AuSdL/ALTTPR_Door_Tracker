// src/types/dungeon.ts

export type DoorDirection =
    | "north"
    | "south"
    | "east"
    | "west"
    | "stairs"
    | "drop";

export type DoorType =
    | "normal"
    | "key"
    | "bigkey"
    | "shutter"
    | "stair"
    | "drop"
    | "lobby"
    | "unknown";

export type DungeonDoor = {
    id: string;
    roomId: string;
    label: string;
    direction?: DoorDirection;
    type: DoorType;
    x?: number;
    y?: number;
};

export type DungeonRoom = {
    id: string;
    name: string;
    dungeonId: string;
    originalDungeonId: string;
    previewImageUrl?: string;
    doors: DungeonDoor[];
};

export type DungeonDefinition = {
    id: string;
    name: string;
    rooms: DungeonRoom[];
};