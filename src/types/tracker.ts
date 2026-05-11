// src/types/tracker.ts

export type DoorConnection = {
    id: string;
    fromDoorId: string;
    toDoorId: string;
};

export type SelectedDoor = {
    roomId: string;
    doorId: string;
};

export type TrackerState = {
    dungeonId: string;
    discoveredRoomIds: string[];
    connections: DoorConnection[];
    selectedDoorId?: string;
};

export type GraphPosition = {
    x: number;
    y: number;
};

export type PersistedTrackerState = {
    version: 1;
    dungeonId: string;
    connections: DoorConnection[];
    nodePositions: Record<string, GraphPosition>;
};