import {
    Background,
    Controls,
    ReactFlow,
    useNodesState,
    type Edge,
    type NodeProps,
    type NodeTypes,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import {
    useCallback,
    useEffect,
    useMemo,
    useState,
    type ComponentType,
} from "react";
import type { DungeonDefinition, DungeonDoor } from "../../types/dungeon";
import type { DoorConnection, GraphPosition, PersistedTrackerState } from "../../types/tracker";
import { RoomNode, type RoomFlowNode } from "./RoomNode";

type DungeonGraphProps = {
    dungeon: DungeonDefinition;
};

const nodeTypes: NodeTypes = {
    room: RoomNode as ComponentType<NodeProps>,
};

export function DungeonGraph({ dungeon }: DungeonGraphProps) {
    const persistedState = useMemo(
        () => loadPersistedTrackerState(dungeon.id),
        [dungeon.id],
    );

    const [selectedDoor, setSelectedDoor] = useState<DungeonDoor | undefined>();

    const [connections, setConnections] = useState<DoorConnection[]>(
        () => persistedState?.connections ?? [],
    );

    const initialNodes = useMemo<RoomFlowNode[]>(() => {
        return createInitialRoomNodes(dungeon, persistedState?.nodePositions);
    }, [dungeon, persistedState?.nodePositions]);

    const [nodes, setNodes, onNodesChange] =
        useNodesState<RoomFlowNode>(initialNodes);

    const connectedDoorIds = useMemo(() => {
        return connections.flatMap((connection) => [
            connection.fromDoorId,
            connection.toDoorId,
        ]);
    }, [connections]);

    useEffect(() => {
        savePersistedTrackerState({
            version: 1,
            dungeonId: dungeon.id,
            connections,
            nodePositions: getNodePositions(nodes),
        });
    }, [connections, dungeon.id, nodes]);

    const handleDoorClick = useCallback(
        (door: DungeonDoor) => {
            if (!selectedDoor) {
                setSelectedDoor(door);
                return;
            }

            if (selectedDoor.id === door.id) {
                setSelectedDoor(undefined);
                return;
            }

            const connectionExists = connections.some((connection) => {
                const sameDirection =
                    connection.fromDoorId === selectedDoor.id &&
                    connection.toDoorId === door.id;

                const reverseDirection =
                    connection.fromDoorId === door.id &&
                    connection.toDoorId === selectedDoor.id;

                return sameDirection || reverseDirection;
            });

            if (!connectionExists) {
                setConnections((currentConnections) => [
                    ...currentConnections,
                    {
                        id: `${selectedDoor.id}--${door.id}`,
                        fromDoorId: selectedDoor.id,
                        toDoorId: door.id,
                    },
                ]);
            }

            setSelectedDoor(undefined);
        },
        [connections, selectedDoor],
    );

    useEffect(() => {
        setNodes((currentNodes) =>
            currentNodes.map((node) => ({
                ...node,
                data: {
                    ...node.data,
                    selectedDoorId: selectedDoor?.id,
                    connectedDoorIds,
                    onDoorClick: handleDoorClick,
                },
            })),
        );
    }, [connectedDoorIds, handleDoorClick, selectedDoor?.id, setNodes]);

    function deleteConnection(connectionId: string) {
        setConnections((currentConnections) =>
            currentConnections.filter((connection) => connection.id !== connectionId),
        );
    }

    function clearConnections() {
        setConnections([]);
        setSelectedDoor(undefined);
    }

    function resetLayout() {
        setNodes(createInitialRoomNodes(dungeon));
        setSelectedDoor(undefined);
    }

    function resetRun() {
        setConnections([]);
        setNodes(createInitialRoomNodes(dungeon));
        setSelectedDoor(undefined);
    }

    const edges: Edge[] = useMemo(() => {
        return connections.map((connection) => {
            const fromDoor = findDoorById(dungeon, connection.fromDoorId);
            const toDoor = findDoorById(dungeon, connection.toDoorId);

            return {
                id: connection.id,
                source: fromDoor.roomId,
                target: toDoor.roomId,
                sourceHandle: fromDoor.id,
                targetHandle: toDoor.id,
                type: "smoothstep",
                animated: false,
                className: "door-edge",
            };
        });
    }, [connections, dungeon]);

    const selectedDoorLabel = useMemo(() => {
        if (!selectedDoor) {
            return undefined;
        }

        return getDoorDisplayLabel(dungeon, selectedDoor.id);
    }, [dungeon, selectedDoor]);

    const statusText = selectedDoorLabel
        ? `Selected: ${selectedDoorLabel} — click another door to connect`
        : connections.length === 0
            ? "Click a door to start a connection"
            : `${connections.length} connection${connections.length === 1 ? "" : "s"} tracked`;

    return (
        <div className="dungeon-graph">
            <ReactFlow
                nodes={nodes}
                edges={edges}
                nodeTypes={nodeTypes}
                onNodesChange={onNodesChange}
                nodesDraggable
                defaultViewport={{ x: 0, y: 0, zoom: 1 }}
                onPaneClick={() => {
                    setSelectedDoor(undefined);
                }}
                onEdgeClick={(event, edge) => {
                    event.stopPropagation();
                    deleteConnection(edge.id);
                }}
            >
                <Background />
                <Controls />
            </ReactFlow>

            <div className="connection-panel">
                <div className="connection-panel__header">
                    <strong>Connections</strong>

                    <div className="connection-panel__actions">
                        <button
                            type="button"
                            className="connection-panel__button"
                            onClick={resetLayout}
                        >
                            Reset Layout
                        </button>

                        {connections.length > 0 && (
                            <button
                                type="button"
                                className="connection-panel__button"
                                onClick={clearConnections}
                            >
                                Clear
                            </button>
                        )}

                        <button
                            type="button"
                            className="connection-panel__button connection-panel__button--danger"
                            onClick={resetRun}
                        >
                            Reset Run
                        </button>
                    </div>
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
                                    onClick={() => deleteConnection(connection.id)}
                                    aria-label="Delete connection"
                                >
                                    ×
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div className="tracker-statusbar">
        <span
            className={[
                "tracker-statusbar__indicator",
                selectedDoor ? "tracker-statusbar__indicator--active" : "",
            ]
                .filter(Boolean)
                .join(" ")}
        />

                <span>{statusText}</span>
            </div>
        </div>
    );
}

function findDoorById(dungeon: DungeonDefinition, doorId: string): DungeonDoor {
    for (const room of dungeon.rooms) {
        const door = room.doors.find((candidate) => candidate.id === doorId);

        if (door) {
            return door;
        }
    }

    throw new Error(`Unknown door id: ${doorId}`);
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

function getStorageKey(dungeonId: string): string {
    return `alttpr-door-tracker:${dungeonId}`;
}

function loadPersistedTrackerState(
    dungeonId: string,
): PersistedTrackerState | undefined {
    const rawState = localStorage.getItem(getStorageKey(dungeonId));

    if (!rawState) {
        return undefined;
    }

    try {
        const parsedState = JSON.parse(rawState) as PersistedTrackerState;

        if (parsedState.version !== 1) {
            return undefined;
        }

        if (parsedState.dungeonId !== dungeonId) {
            return undefined;
        }

        return parsedState;
    } catch {
        return undefined;
    }
}

function savePersistedTrackerState(state: PersistedTrackerState) {
    localStorage.setItem(getStorageKey(state.dungeonId), JSON.stringify(state));
}

function createInitialRoomNodes(
    dungeon: DungeonDefinition,
    nodePositions?: Record<string, GraphPosition>,
): RoomFlowNode[] {
    return dungeon.rooms.map((room, index) => ({
        id: room.id,
        type: "room",
        position: nodePositions?.[room.id] ?? {
            x: 100 + (index % 2) * 320,
            y: 100 + Math.floor(index / 2) * 220,
        },
        data: {
            room,
            selectedDoorId: undefined,
            connectedDoorIds: [],
            onDoorClick: () => undefined,
        },
    }));
}

function getNodePositions(nodes: RoomFlowNode[]): Record<string, GraphPosition> {
    return nodes.reduce<Record<string, GraphPosition>>((positions, node) => {
        positions[node.id] = {
            x: node.position.x,
            y: node.position.y,
        };

        return positions;
    }, {});
}