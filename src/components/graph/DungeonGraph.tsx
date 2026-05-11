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

    const initialVisibleRoomIds = useMemo(() => {
        return persistedState?.visibleRoomIds ?? ["ep-lobby"];
    }, [persistedState?.visibleRoomIds]);

    const [visibleRoomIds, setVisibleRoomIds] = useState<string[]>(
        () => initialVisibleRoomIds,
    );

    const [selectedDoor, setSelectedDoor] = useState<DungeonDoor | undefined>();

    const [connections, setConnections] = useState<DoorConnection[]>(
        () => persistedState?.connections ?? [],
    );

    const initialNodes = useMemo<RoomFlowNode[]>(() => {
        return createInitialRoomNodes(
            dungeon,
            visibleRoomIds,
            persistedState?.nodePositions,
        );
    }, [dungeon, persistedState?.nodePositions, visibleRoomIds]);

    const [nodes, setNodes, onNodesChange] =
        useNodesState<RoomFlowNode>(initialNodes);

    const connectedDoorIds = useMemo(() => {
        return connections.flatMap((connection) => [
            connection.fromDoorId,
            connection.toDoorId,
        ]);
    }, [connections]);

    const hiddenRooms = useMemo(() => {
        return dungeon.rooms.filter((room) => !visibleRoomIds.includes(room.id));
    }, [dungeon.rooms, visibleRoomIds]);

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
        setNodes(createInitialRoomNodes(dungeon, visibleRoomIds));
        setSelectedDoor(undefined);
    }

    function resetRun() {
        const startingRoomIds = ["ep-lobby"];

        setVisibleRoomIds(startingRoomIds);
        setConnections([]);
        setNodes(createInitialRoomNodes(dungeon, startingRoomIds));
        setSelectedDoor(undefined);
    }

    function addRoomToGraph(roomId: string) {
        if (!roomId || visibleRoomIds.includes(roomId)) {
            return;
        }

        const room = dungeon.rooms.find((candidate) => candidate.id === roomId);

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
                    onDoorClick: handleDoorClick,
                },
            },
        ]);
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

            <ConnectionPanel
                dungeon={dungeon}
                connections={connections}
                hiddenRooms={hiddenRooms}
                onAddRoom={addRoomToGraph}
                onDeleteConnection={deleteConnection}
                onClearConnections={clearConnections}
                onResetLayout={resetLayout}
                onResetRun={resetRun}
            />

            <TrackerStatusBar
                statusText={statusText}
                isActive={selectedDoor !== undefined}
            />
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
    dungeon: DungeonDefinition,
    visibleRoomIds: string[],
    nodePositions?: Record<string, GraphPosition>,
): RoomFlowNode[] {
    return dungeon.rooms
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
                onDoorClick: () => undefined,
            },
        }));
}