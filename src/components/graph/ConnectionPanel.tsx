import type { DungeonDefinition } from "../../types/dungeon";
import type { DoorConnection } from "../../types/tracker";

type ConnectionPanelProps = {
    dungeon: DungeonDefinition;
    connections: DoorConnection[];
    hiddenRooms: DungeonDefinition["rooms"];
    onAddRoom: (roomId: string) => void;
    onDeleteConnection: (connectionId: string) => void;
    onClearConnections: () => void;
    onResetLayout: () => void;
    onResetRun: () => void;
};

export function ConnectionPanel({
                                    dungeon,
                                    connections,
                                    hiddenRooms,
                                    onAddRoom,
                                    onDeleteConnection,
                                    onClearConnections,
                                    onResetLayout,
                                    onResetRun,
                                }: ConnectionPanelProps) {
    return (
        <div className="connection-panel">
            <div className="connection-panel__header">
                <strong>Connections</strong>

                <div className="connection-panel__actions">
                    <button
                        type="button"
                        className="connection-panel__button"
                        onClick={onResetLayout}
                    >
                        Reset Layout
                    </button>

                    {connections.length > 0 && (
                        <button
                            type="button"
                            className="connection-panel__button"
                            onClick={onClearConnections}
                        >
                            Clear
                        </button>
                    )}

                    <button
                        type="button"
                        className="connection-panel__button connection-panel__button--danger"
                        onClick={onResetRun}
                    >
                        Reset Run
                    </button>
                </div>
            </div>

            <div className="connection-panel__add-room">
                <label htmlFor="add-room-select">Add Tile</label>

                <select
                    id="add-room-select"
                    value=""
                    onChange={(event) => {
                        onAddRoom(event.target.value);
                    }}
                    disabled={hiddenRooms.length === 0}
                >
                    <option value="">
                        {hiddenRooms.length === 0 ? "All tiles added" : "Select tile..."}
                    </option>

                    {hiddenRooms.map((room) => (
                        <option key={room.id} value={room.id}>
                            {room.name}
                        </option>
                    ))}
                </select>
            </div>

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