import type { DungeonDefinition } from "../../types/dungeon";
import type { DoorConnection } from "../../types/tracker";
import type { TrackerRunSettings } from "../../types/runSettings";
import { EntranceModes } from "../../types/runSettings";
import type { RoomGroup } from "../../domain/roomGroups";
import { AddTilePicker } from "./AddTilePicker";
import { RunSettingsPanel } from "./RunSettingsPanel";

type ConnectionPanelProps = {
    dungeon: DungeonDefinition;
    allDungeons: DungeonDefinition[];
    connections: DoorConnection[];
    roomGroups: RoomGroup[];
    runSettings: TrackerRunSettings;
    onRunSettingsChange: (settings: TrackerRunSettings) => void;
    onAddRoom: (roomId: string) => void;
    onDeleteConnection: (connectionId: string) => void;
    onClearConnections: () => void;
    onResetLayout: () => void;
    onResetDungeon: () => void;
    onResetRun: () => void;
};

export function ConnectionPanel({
                                    dungeon,
                                    allDungeons,
                                    connections,
                                    roomGroups,
                                    runSettings,
                                    onRunSettingsChange,
                                    onAddRoom,
                                    onDeleteConnection,
                                    onClearConnections,
                                    onResetLayout,
                                    onResetDungeon,
                                    onResetRun,
                                }: ConnectionPanelProps) {
    return (
        <div className="connection-panel">
            <div className="connection-panel__header">
                <strong>Tracker</strong>

                <div className="connection-panel__actions">
                    <button
                        type="button"
                        className="connection-panel__button"
                        onClick={onResetLayout}
                    >
                        Reset Layout
                    </button>

                    <button
                        type="button"
                        className="connection-panel__button"
                        onClick={onResetDungeon}
                    >
                        Reset Dungeon
                    </button>

                    <button
                        type="button"
                        className="connection-panel__button connection-panel__button--danger"
                        onClick={onResetRun}
                    >
                        Reset Run
                    </button>
                </div>
            </div>

            <details className="connection-panel__section">
                <summary>Run Settings</summary>

                <RunSettingsPanel
                    settings={runSettings}
                    onChange={onRunSettingsChange}
                />
            </details>

            <AddTilePicker
                roomGroups={roomGroups}
                allDungeons={allDungeons}
                collapseAfterAdd={runSettings.entranceMode !== EntranceModes.Vanilla}
                onAddRoom={onAddRoom}
            />

            <details className="connection-panel__section">
                <summary>
                    Connections
                    {connections.length > 0 && (
                        <span className="connection-panel__summary-count">
                    {connections.length}
                </span>
                    )}
                </summary>

                {connections.length > 0 && (
                    <button
                        type="button"
                        className="connection-panel__button"
                        onClick={onClearConnections}
                    >
                        Clear Connections
                    </button>
                )}

                {connections.length === 0 ? (
                    <p className="connection-panel__empty">No connections yet.</p>
                ) : (
                    <ul className="connection-panel__list">
                        {connections.map((connection) => (
                            <li key={connection.id} className="connection-panel__item">
                                <span>{getConnectionDisplayLabel(dungeon, connection)}</span>

                                <button
                                    type="button"
                                    className="connection-panel__delete"
                                    onClick={() => onDeleteConnection(connection.id)}
                                    aria-label="Delete connection"
                                >
                                    ×
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </details>
        </div>
    );
}

function getDoorDisplayLabel(
    dungeon: DungeonDefinition,
    doorId: string,
): string {
    for (const room of dungeon.rooms) {
        const door = room.doors.find((candidate) => candidate.id === doorId);

        if (door) {
            return `${room.name} / ${door.label}`;
        }
    }

    return doorId;
}

function getConnectionDisplayLabel(
    dungeon: DungeonDefinition,
    connection: DoorConnection,
): string {
    const fromLabel = getDoorDisplayLabel(dungeon, connection.fromDoorId);
    const toLabel = getDoorDisplayLabel(dungeon, connection.toDoorId);

    return `${fromLabel} ↔ ${toLabel}`;
}