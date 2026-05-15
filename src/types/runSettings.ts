export type DoorShuffleMode = "basic" | "own-dungeon" | "cross-dungeon";

export type EntranceMode = "vanilla" | "shuffled";

export type TrackerRunSettings = {
    activeDungeonId: string;
    doorShuffleMode: DoorShuffleMode;
    entranceMode: EntranceMode;
};

export function createDefaultRunSettings(
    activeDungeonId: string,
): TrackerRunSettings {
    return {
        activeDungeonId,
        doorShuffleMode: "own-dungeon",
        entranceMode: "vanilla",
    };
}