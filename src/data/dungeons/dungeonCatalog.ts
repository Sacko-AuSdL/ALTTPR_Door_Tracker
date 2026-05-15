/*import type { DungeonDefinition } from "../../types/dungeon";
import { easternPalaceSample } from "./eastern-palace.sample";
import { desertPalaceSample } from "./desert-palace.sample";
import { towerOfHeraSample } from "./tower-of-hera.sample";

export const dungeonCatalog: DungeonDefinition[] = [
    easternPalaceSample,
    desertPalaceSample,
    towerOfHeraSample,
];

export function getDungeonById(dungeonId: string): DungeonDefinition {
    const dungeon = dungeonCatalog.find((candidate) => candidate.id === dungeonId);

    if (!dungeon) {
        throw new Error(`Unknown dungeon id: ${dungeonId}`);
    }

    return dungeon;
}*/

import type { DungeonDefinition } from "../../types/dungeon";
import { krisdavieDungeons } from "./generated/krisdavie-dungeons.generated";

export const dungeonCatalog: DungeonDefinition[] = [...krisdavieDungeons];

export function getDungeonById(dungeonId: string): DungeonDefinition {
    const dungeon = dungeonCatalog.find((candidate) => candidate.id === dungeonId);

    if (!dungeon) {
        throw new Error(`Unknown dungeon id: ${dungeonId}`);
    }

    return dungeon;
}