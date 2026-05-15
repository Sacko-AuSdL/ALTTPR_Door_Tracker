import type {
    DoorShuffleMode,
    EntranceMode,
    TrackerRunSettings,
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
                    <option value="basic">Basic Doors</option>
                    <option value="own-dungeon">Own Dungeon</option>
                    <option value="cross-dungeon">Cross Dungeon</option>
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
                    <option value="vanilla">Vanilla</option>
                    <option value="shuffled">Shuffled</option>
                </select>
            </label>
        </div>
    );
}