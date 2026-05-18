import type { DungeonDefinition } from "../../types/dungeon";

export const easternPalaceSample: DungeonDefinition = {
    id: "eastern-palace",
    name: "Eastern Palace - Sample",
    rooms: [
        {
            id: "ep-lobby",
            name: "Lobby",
            dungeonId: "eastern-palace",
            originalDungeonId: "eastern-palace",
            doors: [
                {
                    id: "ep-lobby-north",
                    roomId: "ep-lobby",
                    label: "North",
                    direction: "north",
                    type: "normal",
                },
                {
                    id: "ep-lobby-east",
                    roomId: "ep-lobby",
                    label: "East",
                    direction: "east",
                    type: "normal",
                },
            ],
        },
        {
            id: "ep-cannonball",
            name: "Cannonball Room",
            dungeonId: "eastern-palace",
            originalDungeonId: "eastern-palace",
            doors: [
                {
                    id: "ep-cannonball-south",
                    roomId: "ep-cannonball",
                    label: "South",
                    direction: "south",
                    type: "normal",
                },
                {
                    id: "ep-cannonball-north",
                    roomId: "ep-cannonball",
                    label: "North",
                    direction: "north",
                    type: "normal",
                },
            ],
        },
        {
            id: "ep-big-key",
            name: "Big Key Room",
            dungeonId: "eastern-palace",
            originalDungeonId: "eastern-palace",
            doors: [
                {
                    id: "ep-big-key-south",
                    roomId: "ep-big-key",
                    label: "South",
                    direction: "south",
                    type: "normal",
                },
            ],
        },
        {
            id: "ep-map-chest",
            name: "Map Chest Room",
            dungeonId: "eastern-palace",
            originalDungeonId: "eastern-palace",
            doors: [
                {
                    id: "ep-map-chest-west",
                    roomId: "ep-map-chest",
                    label: "West",
                    direction: "west",
                    type: "normal",
                },
                {
                    id: "ep-map-chest-east",
                    roomId: "ep-map-chest",
                    label: "East",
                    direction: "east",
                    type: "normal",
                },
            ],
        },
    ],
};