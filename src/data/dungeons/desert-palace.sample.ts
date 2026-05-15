import type { DungeonDefinition } from "../../types/dungeon";

export const desertPalaceSample: DungeonDefinition = {
    id: "desert-palace",
    name: "Desert Palace - Sample",
    rooms: [
        {
            id: "dp-lobby",
            name: "Lobby",
            dungeonId: "desert-palace",
            originalDungeonId: "desert-palace",
            doors: [
                {
                    id: "dp-lobby-north",
                    roomId: "dp-lobby",
                    label: "North",
                    direction: "north",
                    type: "normal",
                },
                {
                    id: "dp-lobby-east",
                    roomId: "dp-lobby",
                    label: "East",
                    direction: "east",
                    type: "normal",
                },
            ],
        },
        {
            id: "dp-torch-room",
            name: "Torch Room",
            dungeonId: "desert-palace",
            originalDungeonId: "desert-palace",
            doors: [
                {
                    id: "dp-torch-room-west",
                    roomId: "dp-torch-room",
                    label: "West",
                    direction: "west",
                    type: "normal",
                },
                {
                    id: "dp-torch-room-north",
                    roomId: "dp-torch-room",
                    label: "North",
                    direction: "north",
                    type: "normal",
                },
            ],
        },
    ],
};