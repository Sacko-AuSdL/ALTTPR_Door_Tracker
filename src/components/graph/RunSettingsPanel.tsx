import {
    DoorShuffleModes,
    EntranceModes,
    TileSizes,
    type DoorShuffleMode,
    type EntranceMode,
    type TileSize,
    type TrackerRunSettings,
} from "../../types/runSettings";

type RunSettingsPanelProps = {
    settings: TrackerRunSettings;
    onChange: (settings: TrackerRunSettings) => void;
};

export function RunSettingsPanel({
                                     settings,
                                     onChange,
                                 }: RunSettingsPanelProps) {
    function updateDoorShuffleMode(doorShuffleMode: DoorShuffleMode) {
        onChange({
            ...settings,
            doorShuffleMode,
        });
    }

    function updateEntranceMode(entranceMode: EntranceMode) {
        onChange({
            ...settings,
            entranceMode,
        });
    }

    function updateTileSize(tileSize: TileSize) {
        onChange({
            ...settings,
            tileSize,
        });
    }

    return (
        <div className="run-settings-panel">
            <label>
                <span>Door Mode</span>

                <select
                    value={settings.doorShuffleMode}
                    onChange={(event) =>
                        updateDoorShuffleMode(event.target.value as DoorShuffleMode)
                    }
                >
                    <option value={DoorShuffleModes.Basic}>Basic Doors</option>
                    <option value={DoorShuffleModes.OwnDungeon}>Own Dungeon</option>
                    <option value={DoorShuffleModes.CrossDungeon}>Cross Dungeon</option>
                </select>
            </label>

            <label>
                <span>Entrances</span>

                <select
                    value={settings.entranceMode}
                    onChange={(event) =>
                        updateEntranceMode(event.target.value as EntranceMode)
                    }
                >
                    <option value={EntranceModes.Vanilla}>Vanilla</option>
                    <option value={EntranceModes.Shuffled}>Shuffled</option>
                </select>
            </label>

            <label>
                <span>Tile Size</span>

                <select
                    value={settings.tileSize}
                    onChange={(event) =>
                        updateTileSize(event.target.value as TileSize)
                    }
                >
                    <option value={TileSizes.Small}>Small</option>
                    <option value={TileSizes.Medium}>Medium</option>
                    <option value={TileSizes.Large}>Large</option>
                </select>
            </label>
        </div>
    );
}