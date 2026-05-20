// src/types/tracker.ts
import type { DoorMarkerMap } from "./doorMarker";

export type DoorConnection = {
    id: string;
    fromDoorId: string;
    toDoorId: string;
};

export type GraphPosition = {
    x: number;
    y: number;
};

export type PersistedTrackerState = {
    version: 1;
    dungeonId: string;
    visibleRoomIds: string[];
    connections: DoorConnection[];
    nodePositions: Record<string, GraphPosition>;
    doorMarkers?: DoorMarkerMap;
};