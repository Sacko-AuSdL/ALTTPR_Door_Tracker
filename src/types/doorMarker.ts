export const DoorMarkerTypes = {
    Somaria: "somaria",
    Lamp: "lamp",
    Blocked: "blocked",
    Bow: "bow",
    Bomb: "bomb",
    FireRod: "fire-rod",
} as const;

export type DoorMarkerType =
    (typeof DoorMarkerTypes)[keyof typeof DoorMarkerTypes];

export type DoorMarkerMap = Partial<Record<string, DoorMarkerType>>;

export type DoorMarkerDefinition = {
    type: DoorMarkerType;
    label: string;
    shortLabel: string;
    iconUrl: string;
};