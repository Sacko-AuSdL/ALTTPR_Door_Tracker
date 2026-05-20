import { DoorMarkerTypes, type DoorMarkerDefinition } from "../types/doorMarker";

export const DOOR_MARKER_DEFINITIONS: DoorMarkerDefinition[] = [
    {
        type: DoorMarkerTypes.Somaria,
        label: "Somaria",
        shortLabel: "S",
        iconUrl: "/assets/markers/somaria.png",
    },
    {
        type: DoorMarkerTypes.Lamp,
        label: "Lamp",
        shortLabel: "L",
        iconUrl: "/assets/markers/lamp.png",
    },
    {
        type: DoorMarkerTypes.Blocked,
        label: "Blocked",
        shortLabel: "X",
        iconUrl: "/assets/markers/blocked.svg",
    },
    {
        type: DoorMarkerTypes.Bow,
        label: "Bow",
        shortLabel: "B",
        iconUrl: "/assets/markers/bow.png",
    },
    {
        type: DoorMarkerTypes.Bomb,
        label: "Bomb",
        shortLabel: "BO",
        iconUrl: "/assets/markers/bomb.png",
    },
    {
        type: DoorMarkerTypes.FireRod,
        label: "Fire Rod",
        shortLabel: "FR",
        iconUrl: "/assets/markers/fire-rod.png",
    },
];

export function getDoorMarkerDefinition(type: string | undefined) {
    return DOOR_MARKER_DEFINITIONS.find((definition) => definition.type === type);
}