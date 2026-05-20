export const DoorShuffleModes = {
    Beginner: "beginner",
    OwnDungeon: "own-dungeon",
    CrossDungeon: "cross-dungeon",
} as const;

export type DoorShuffleMode =
    (typeof DoorShuffleModes)[keyof typeof DoorShuffleModes];

export const EntranceModes = {
    Vanilla: "vanilla",
    Shuffled: "shuffled",
} as const;

export type EntranceMode = (typeof EntranceModes)[keyof typeof EntranceModes];

export const TileSizes = {
    Small: "small",
    Medium: "medium",
    Large: "large",
} as const;

export type TileSize = (typeof TileSizes)[keyof typeof TileSizes];

export const TILE_SIZE_PIXELS: Record<TileSize, number> = {
    [TileSizes.Small]: 180,
    [TileSizes.Medium]: 240,
    [TileSizes.Large]: 320,
};

export type TrackerRunSettings = {
    doorShuffleMode: DoorShuffleMode;
    entranceMode: EntranceMode;
    tileSize: TileSize;
    doorLabelMode: DoorLabelMode;
};

export const DoorLabelModes = {
    Full: "full",
    Compact: "compact",
    Dots: "dots",
} as const;

export type DoorLabelMode =
    (typeof DoorLabelModes)[keyof typeof DoorLabelModes];

export type PersistedRunSettings = {
    version: 1;
    settings: TrackerRunSettings;
};

export function createDefaultRunSettings(): TrackerRunSettings {
    return {
        doorShuffleMode: DoorShuffleModes.OwnDungeon,
        entranceMode: EntranceModes.Vanilla,
        tileSize: TileSizes.Medium,
        doorLabelMode: DoorLabelModes.Compact,
    };
}

export function getTileSizePx(tileSize: TileSize): number {
    return TILE_SIZE_PIXELS[tileSize];
}