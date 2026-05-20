const BEGINNER_DUNGEON_GROUPS = [
    [
        "hyrule-castle",
        "eastern-palace",
        "desert-palace",
        "tower-of-hera",
        "castle-tower",
    ],
    [
        "palace-of-darkness",
        "thieves-town",
        "skull-woods",
        "swamp-palace",
    ],
    [
        "ice-palace",
        "misery-mire",
        "turtle-rock",
        "ganons-tower",
    ],
] as const;

export function getBeginnerDungeonGroupIds(activeDungeonId: string): string[] {
    const matchingGroup = BEGINNER_DUNGEON_GROUPS.find((group) =>
        group.some((dungeonId) => dungeonId === activeDungeonId),
    );

    return matchingGroup ? [...matchingGroup] : [activeDungeonId];
}