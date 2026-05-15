export const DoorShuffleModes = {
    Basic: "basic",
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

export type TrackerRunSettings = {
    doorShuffleMode: DoorShuffleMode;
    entranceMode: EntranceMode;
};

export type PersistedRunSettings = {
    version: 1;
    settings: TrackerRunSettings;
};

export function createDefaultRunSettings(): TrackerRunSettings {
    return {
        doorShuffleMode: DoorShuffleModes.OwnDungeon,
        entranceMode: EntranceModes.Vanilla,
    };
}