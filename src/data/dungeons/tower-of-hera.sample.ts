import type { DungeonDefinition } from "../../types/dungeon";

export const towerOfHeraSample: DungeonDefinition = {
    id: "tower-of-hera",
    name: "Tower of Hera - Sample",
    rooms: [
        {
            id: "hera-lobby",
            name: "Lobby",
            dungeonId: "tower-of-hera",
            originalDungeonId: "tower-of-hera",
            doors: [
                {
                    id: "hera-lobby-north",
                    roomId: "hera-lobby",
                    label: "North",
                    direction: "north",
                    type: "normal",
                },
                {
                    id: "hera-lobby-stairs",
                    roomId: "hera-lobby",
                    label: "Stairs",
                    direction: "stairs",
                    type: "stair",
                },
            ],
        },
        {
            id: "hera-basement",
            name: "Basement",
            dungeonId: "tower-of-hera",
            originalDungeonId: "tower-of-hera",
            doors: [
                {
                    id: "hera-basement-stairs",
                    roomId: "hera-basement",
                    label: "Stairs",
                    direction: "stairs",
                    type: "stair",
                },
                {
                    id: "hera-basement-east",
                    roomId: "hera-basement",
                    label: "East",
                    direction: "east",
                    type: "normal",
                },
            ],
        },
    ],
};