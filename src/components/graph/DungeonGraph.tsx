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
import { ConnectionPanel } from "./ConnectionPanel";
import { TrackerStatusBar } from "./TrackerStatusBar";
import { RoomNode, type RoomFlowNode } from "./RoomNode";
import {getStartingRoomIds} from "../../domain/startingRooms";
import { groupRoomsByOriginalDungeon } from "../../domain/roomGroups";
import {getAvailableRoomsForSettings} from "../../domain/roomPool";
import type { TrackerRunSettings } from "../../types/runSettings";
import {getConnectionColor} from "../../domain/connectionColors";

type DungeonGraphProps = {
    dungeon: DungeonDefinition;
    allDungeons: DungeonDefinition[];
    runSettings: TrackerRunSettings;
    onRunSettingsChange: (settings: TrackerRunSettings) => void;
};

const nodeTypes: NodeTypes = {
    room: RoomNode as ComponentType<NodeProps>,
};

export function DungeonGraph({ dungeon, allDungeons, runSettings,
                                 onRunSettingsChange, }: DungeonGraphProps) {
    const persistedState = useMemo(
        () => loadPersistedTrackerState(dungeon.id),
        [dungeon.id],
    );

    const [visibleRoomIds, setVisibleRoomIds] = useState<string[]>(() => {
        if (persistedState?.visibleRoomIds?.length) {
            return persistedState.visibleRoomIds;
        }

        return getStartingRoomIds(dungeon, runSettings);
    });

    const [selectedDoor, setSelectedDoor] = useState<DungeonDoor | undefined>();

    const [connections, setConnections] = useState<DoorConnection[]>(
        () => persistedState?.connections ?? [],
    );

    const initialNodes = useMemo<RoomFlowNode[]>(() => {
        return createInitialRoomNodes(
            allDungeons,
            visibleRoomIds,
            persistedState?.nodePositions,
        );
    }, [allDungeons, persistedState?.nodePositions, visibleRoomIds]);

    const [nodes, setNodes, onNodesChange] =
        useNodesState<RoomFlowNode>(initialNodes);

    const connectedDoorIds = useMemo(() => {
        return connections.flatMap((connection) => [
            connection.fromDoorId,
            connection.toDoorId,
        ]);
    }, [connections]);

    const doorConnectionMap = useMemo(() => {
        const map: Record<
            string,
            {
                connectionId: string;
                color: string;
                index: number;
            }
        > = {};

        connections.forEach((connection, index) => {
            const color = getConnectionColor(index);

            map[connection.fromDoorId] = {
                connectionId: connection.id,
                color,
                index: index + 1,
            };

            map[connection.toDoorId] = {
                connectionId: connection.id,
                color,
                index: index + 1,
            };
        });

        return map;
    }, [connections]);

    const allRooms = useMemo(() => {
        return allDungeons.flatMap((candidateDungeon) => candidateDungeon.rooms);
    }, [allDungeons]);

    const hiddenRooms = useMemo(() => {
        return getAvailableRoomsForSettings({
            activeDungeon: dungeon,
            allDungeons,
            visibleRoomIds,
            settings: runSettings,
        });
    }, [allDungeons, dungeon, visibleRoomIds, runSettings]);

    const hiddenRoomGroups = useMemo(() => {
        return groupRoomsByOriginalDungeon(hiddenRooms, allDungeons);
    }, [hiddenRooms, allDungeons]);

    useEffect(() => {
        savePersistedTrackerState({
            version: 1,
            dungeonId: dungeon.id,
            visibleRoomIds,
            connections,
            nodePositions: getNodePositions(nodes),
        });
    }, [connections, dungeon.id, nodes, visibleRoomIds]);

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

    const handleRemoveRoom = useCallback((roomId: string) => {
        setSelectedDoor(undefined);

        setVisibleRoomIds((currentVisibleRoomIds) =>
            currentVisibleRoomIds.filter((visibleRoomId) => visibleRoomId !== roomId),
        );

        setNodes((currentNodes) =>
            currentNodes.filter((node) => node.id !== roomId),
        );

        setConnections((currentConnections) =>
            currentConnections.filter((connection) => {
                const fromDoor = findDoorById(allDungeons, connection.fromDoorId);
                const toDoor = findDoorById(allDungeons, connection.toDoorId);

                return fromDoor.roomId !== roomId && toDoor.roomId !== roomId;
            }),
        );
    }, [allDungeons, setNodes]);

    useEffect(() => {
        setNodes((currentNodes) =>
            currentNodes.map((node) => ({
                ...node,
                data: {
                    ...node.data,
                    selectedDoorId: selectedDoor?.id,
                    connectedDoorIds,
                    doorConnectionMap,
                    onDoorClick: handleDoorClick,
                    onRemoveRoom: handleRemoveRoom,
                },
            })),
        );
    }, [
        connectedDoorIds,
        doorConnectionMap,
        handleDoorClick,
        handleRemoveRoom,
        selectedDoor?.id,
        setNodes,
    ]);

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
        setNodes(createInitialRoomNodes(allDungeons, visibleRoomIds));
        setSelectedDoor(undefined);
    }

    function resetDungeon() {
        const startingRoomIds = getStartingRoomIds(dungeon, runSettings);

        clearPersistedTrackerState(dungeon.id);
        setVisibleRoomIds(startingRoomIds);
        setConnections([]);
        setNodes(createInitialRoomNodes(allDungeons, startingRoomIds));
        setSelectedDoor(undefined);
    }

    function resetRun() {
        const startingRoomIds = getStartingRoomIds(dungeon, runSettings);

        clearPersistedTrackerStates(allDungeons);
        setVisibleRoomIds(startingRoomIds);
        setConnections([]);
        setNodes(createInitialRoomNodes(allDungeons, startingRoomIds));
        setSelectedDoor(undefined);
    }

    function addRoomToGraph(roomId: string) {
        if (!roomId || visibleRoomIds.includes(roomId)) {
            return;
        }

        const room = allRooms.find((candidate) => candidate.id === roomId);

        if (!room) {
            return;
        }

        setVisibleRoomIds((currentVisibleRoomIds) => [
            ...currentVisibleRoomIds,
            roomId,
        ]);

        setNodes((currentNodes) => [
            ...currentNodes,
            {
                id: room.id,
                type: "room",
                position: {
                    x: 180 + currentNodes.length * 40,
                    y: 180 + currentNodes.length * 40,
                },
                data: {
                    room,
                    selectedDoorId: selectedDoor?.id,
                    connectedDoorIds,
                    doorConnectionMap,
                    onDoorClick: handleDoorClick,
                    onRemoveRoom: handleRemoveRoom,
                },
            },
        ]);
    }

    const edges: Edge[] = useMemo(() => {
        return connections.map((connection, index) => {
            const fromDoor = findDoorById(allDungeons, connection.fromDoorId);
            const toDoor = findDoorById(allDungeons, connection.toDoorId);
            const color = getConnectionColor(index);

            return {
                id: connection.id,
                source: fromDoor.roomId,
                target: toDoor.roomId,
                sourceHandle: fromDoor.id,
                targetHandle: toDoor.id,
                type: "smoothstep",
                animated: false,
                style: {
                    stroke: color,
                    strokeWidth: 3,
                },
                className: "door-edge",
            };
        });
    }, [connections, allDungeons]);

    const selectedDoorLabel = useMemo(() => {
        if (!selectedDoor) {
            return undefined;
        }

        return getDoorDisplayLabel(allDungeons, selectedDoor.id);
    }, [allDungeons, selectedDoor]);

    const statusText = selectedDoorLabel
        ? `Selected: ${selectedDoorLabel} — click another door to connect`
        : nodes.length === 0
            ? "Add a tile to start tracking"
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

            <ConnectionPanel
                dungeon={dungeon}
                allDungeons={allDungeons}
                connections={connections}
                roomGroups={hiddenRoomGroups}
                runSettings={runSettings}
                onRunSettingsChange={onRunSettingsChange}
                onAddRoom={addRoomToGraph}
                onDeleteConnection={deleteConnection}
                onClearConnections={clearConnections}
                onResetLayout={resetLayout}
                onResetDungeon={resetDungeon}
                onResetRun={resetRun}
            />

            <TrackerStatusBar
                statusText={statusText}
                isActive={selectedDoor !== undefined}
            />
        </div>
    );
}

function findDoorById(
    dungeons: DungeonDefinition[],
    doorId: string,
): DungeonDoor {
    for (const dungeon of dungeons) {
        for (const room of dungeon.rooms) {
            const door = room.doors.find((candidate) => candidate.id === doorId);

            if (door) {
                return door;
            }
        }
    }

    throw new Error(`Unknown door id: ${doorId}`);
}

function getDoorDisplayLabel(
    dungeons: DungeonDefinition[],
    doorId: string,
): string {
    for (const dungeon of dungeons) {
        for (const room of dungeon.rooms) {
            const door = room.doors.find((candidate) => candidate.id === doorId);

            if (door) {
                return `${dungeon.name.replace(" - Sample", "")} / ${room.name} / ${door.label}`;
            }
        }
    }

    return doorId;
}

function getStorageKey(dungeonId: string): string {
    return `alttpr-door-tracker:${dungeonId}`;
}

function clearPersistedTrackerState(dungeonId: string) {
    localStorage.removeItem(getStorageKey(dungeonId));
}

function clearPersistedTrackerStates(dungeons: DungeonDefinition[]) {
    for (const dungeon of dungeons) {
        clearPersistedTrackerState(dungeon.id);
    }
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

function getNodePositions(nodes: RoomFlowNode[]): Record<string, GraphPosition> {
    return nodes.reduce<Record<string, GraphPosition>>((positions, node) => {
        positions[node.id] = {
            x: node.position.x,
            y: node.position.y,
        };

        return positions;
    }, {});
}

function createInitialRoomNodes(
    dungeons: DungeonDefinition[],
    visibleRoomIds: string[],
    nodePositions?: Record<string, GraphPosition>,
): RoomFlowNode[] {
    return dungeons
        .flatMap((candidateDungeon) => candidateDungeon.rooms)
        .filter((room) => visibleRoomIds.includes(room.id))
        .map((room, index) => ({
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
                doorConnectionMap: {},
                onDoorClick: () => undefined,
                onRemoveRoom: () => undefined,
            },
        }));
}