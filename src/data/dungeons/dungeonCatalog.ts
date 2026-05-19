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