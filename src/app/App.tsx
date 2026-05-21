import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import {
    DungeonGraph,
    type DungeonGraphActions,
} from "../components/graph/DungeonGraph";
import {
    dungeonCatalog,
    getDungeonById,
} from "../data/dungeons/dungeonCatalog";
import {
    createDefaultRunSettings,
    type PersistedRunSettings,
    type TrackerRunSettings,
} from "../types/runSettings";
import { TrackerActionsMenu } from "../components/settings/TrackerActionsMenu";
import { TrackerOptionsMenu } from "../components/settings/TrackerOptionsMenu";
import "./App.css";

const RUN_SETTINGS_STORAGE_KEY = "alttpr-door-tracker:run-settings";

export default function App() {
    const [activeDungeonId, setActiveDungeonId] = useState("eastern-palace");

    const [runSettings, setRunSettings] = useState<TrackerRunSettings>(() => {
        return loadPersistedRunSettings() ?? createDefaultRunSettings();
    });

    const dungeonGraphActionsRef = useRef<DungeonGraphActions | null>(null);

    const handleDungeonGraphActionsReady = useCallback(
        (actions: DungeonGraphActions | null) => {
            dungeonGraphActionsRef.current = actions;
        },
        [],
    );

    useEffect(() => {
        savePersistedRunSettings(runSettings);
    }, [runSettings]);

    const activeDungeon = getDungeonById(activeDungeonId);

    return (
        <main className="app">
            <header className="app__header">
                <h1>ALTTPR Door Tracker</h1>

                <p>
                    Add tiles, click two door hotspots to connect them.
                </p>
            </header>

            <nav className="dungeon-tabs" aria-label="Dungeon selection">
                <div className="dungeon-tabs__list">
                    {dungeonCatalog.map((dungeon) => {
                        const isActive = dungeon.id === activeDungeonId;

                        return (
                            <button
                                key={dungeon.id}
                                type="button"
                                className={[
                                    "dungeon-tabs__tab",
                                    isActive ? "dungeon-tabs__tab--active" : "",
                                ]
                                    .filter(Boolean)
                                    .join(" ")}
                                onClick={() => setActiveDungeonId(dungeon.id)}
                            >
                                {dungeon.name.replace(" - Sample", "")}
                            </button>
                        );
                    })}
                </div>

                <div className="dungeon-tabs__menus">
                    <TrackerOptionsMenu settings={runSettings} onChange={setRunSettings}/>

                    <TrackerActionsMenu
                        onResetLayout={() => dungeonGraphActionsRef.current?.resetLayout()}
                        onResetDungeon={() => dungeonGraphActionsRef.current?.resetDungeon()}
                        onResetRun={() => dungeonGraphActionsRef.current?.resetRun()}
                    />
                </div>
            </nav>

            <Fragment key={activeDungeon.id}>
                <DungeonGraph
                    dungeon={activeDungeon}
                    allDungeons={dungeonCatalog}
                    runSettings={runSettings}
                    onActionsReady={handleDungeonGraphActionsReady}
                />
            </Fragment>
        </main>
    );
}

function loadPersistedRunSettings(): TrackerRunSettings | undefined {
    const rawState = localStorage.getItem(RUN_SETTINGS_STORAGE_KEY);

    if (!rawState) {
        return undefined;
    }

    try {
        const parsedState = JSON.parse(rawState) as PersistedRunSettings;

        if (parsedState.version !== 1) {
            return undefined;
        }

        return {
            ...createDefaultRunSettings(),
            ...parsedState.settings,
        };
    } catch {
        return undefined;
    }
}

function savePersistedRunSettings(settings: TrackerRunSettings) {
    const persistedState: PersistedRunSettings = {
        version: 1,
        settings,
    };

    localStorage.setItem(
        RUN_SETTINGS_STORAGE_KEY,
        JSON.stringify(persistedState),
    );
}