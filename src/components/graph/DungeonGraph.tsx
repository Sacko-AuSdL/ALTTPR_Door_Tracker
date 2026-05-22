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
    type CSSProperties,
} from "react";
import type {DungeonDefinition, DungeonDoor} from "../../types/dungeon";
import type {DoorConnection, GraphPosition, PersistedTrackerState} from "../../types/tracker";
import type {DoorMarkerMap, DoorMarkerType} from "../../types/doorMarker";
import {ConnectionPanel} from "./ConnectionPanel";
import { ConnectionEdge } from "./ConnectionEdge";
import {TrackerStatusBar} from "./TrackerStatusBar";
import {RoomNode, type RoomFlowNode} from "./RoomNode";
import {getStartingRoomIds} from "../../domain/startingRooms";
import {groupRoomsByOriginalDungeon} from "../../domain/roomGroups";
import {getAvailableRoomsForSettings} from "../../domain/roomPool";
import {DoorLabelModes, DoorShuffleModes, getTileSizePx} from "../../types/runSettings";
import type {TrackerRunSettings} from "../../types/runSettings";
import {getConnectionColor} from "../../domain/connectionColors";

type DungeonGraphProps = {
    dungeon: DungeonDefinition;
    allDungeons: DungeonDefinition[];
    runSettings: TrackerRunSettings;
    onActionsReady?: (actions: DungeonGraphActions | null) => void;
};

export type DungeonGraphActions = {
    resetLayout: () => void;
    resetDungeon: () => void;
    resetRun: () => void;
};

const nodeTypes: NodeTypes = {
    room: RoomNode as ComponentType<NodeProps>,
};

const edgeTypes = {
    connection: ConnectionEdge,
};

export function DungeonGraph({
                                 dungeon,
                                 allDungeons,
                                 runSettings,
                                 onActionsReady,
                             }: DungeonGraphProps) {
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

    const graphStyle = {
        "--room-node-size": `${getTileSizePx(runSettings.tileSize)}px`,
    } as CSSProperties;

    const [doorMarkers, setDoorMarkers] = useState<DoorMarkerMap>(
        () => persistedState?.doorMarkers ?? {},
    );

    const clearSelectedDoor = useCallback(() => {
        setSelectedDoor(undefined);
    }, []);

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

    const globallyUsedRoomIds = useMemo(() => {
        return getUsedRoomIdsAcrossRun({
            activeDungeonId: dungeon.id,
            activeVisibleRoomIds: visibleRoomIds,
            allDungeons,
            runSettings,
        });
    }, [allDungeons, dungeon.id, runSettings, visibleRoomIds]);

    const hiddenRooms = useMemo(() => {
        return getAvailableRoomsForSettings({
            activeDungeon: dungeon,
            allDungeons,
            visibleRoomIds,
            excludedRoomIds: globallyUsedRoomIds,
            settings: runSettings,
        });
    }, [allDungeons, dungeon, globallyUsedRoomIds, runSettings, visibleRoomIds]);

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
            doorMarkers,
        });
    }, [connections, doorMarkers, dungeon.id, nodes, visibleRoomIds]);

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

    const handleDoorMarkerChange = useCallback(
        (doorId: string, markerType: DoorMarkerType | undefined) => {
            setDoorMarkers((currentDoorMarkers) => {
                const nextDoorMarkers = {...currentDoorMarkers};

                if (markerType) {
                    nextDoorMarkers[doorId] = markerType;
                } else {
                    delete nextDoorMarkers[doorId];
                }

                return nextDoorMarkers;
            });
        },
        [],
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

        setDoorMarkers((currentDoorMarkers) => {
            const nextDoorMarkers = {...currentDoorMarkers};
            const room = allRooms.find((candidate) => candidate.id === roomId);

            room?.doors.forEach((door) => {
                delete nextDoorMarkers[door.id];
            });

            return nextDoorMarkers;
        });
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
                    doorLabelMode: runSettings.doorLabelMode,
                    doorMarkers,
                    onDoorClick: handleDoorClick,
                    onDoorMarkerChange: handleDoorMarkerChange,
                    onDoorSelectionClear: clearSelectedDoor,
                    onRemoveRoom: handleRemoveRoom,
                },
            })),
        );
    }, [
        connectedDoorIds,
        doorConnectionMap,
        doorMarkers,
        handleDoorClick,
        handleDoorMarkerChange,
        handleRemoveRoom,
        runSettings.doorLabelMode,
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

    const resetLayout = useCallback(() => {
        setNodes(createInitialRoomNodes(allDungeons, visibleRoomIds));
        setSelectedDoor(undefined);
    }, [allDungeons, setNodes, visibleRoomIds]);

    const resetDungeon = useCallback(() => {
        const startingRoomIds = getStartingRoomIds(dungeon, runSettings);

        clearPersistedTrackerState(dungeon.id);
        setVisibleRoomIds(startingRoomIds);
        setConnections([]);
        setDoorMarkers({});
        setNodes(createInitialRoomNodes(allDungeons, startingRoomIds));
        setSelectedDoor(undefined);
    }, [allDungeons, dungeon, runSettings, setNodes]);

    const resetRun = useCallback(() => {
        const startingRoomIds = getStartingRoomIds(dungeon, runSettings);

        clearPersistedTrackerStates(allDungeons);
        setVisibleRoomIds(startingRoomIds);
        setConnections([]);
        setDoorMarkers({});
        setNodes(createInitialRoomNodes(allDungeons, startingRoomIds));
        setSelectedDoor(undefined);
    }, [allDungeons, dungeon, runSettings, setNodes]);

    useEffect(() => {
        onActionsReady?.({
            resetLayout,
            resetDungeon,
            resetRun,
        });

        return () => {
            onActionsReady?.(null);
        };
    }, [onActionsReady, resetLayout, resetDungeon, resetRun]);

    function addRoomToGraph(roomId: string) {
        if (!roomId || globallyUsedRoomIds.includes(roomId)) {
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

        setNodes((currentNodes) => {
            const position = getNewRoomPosition({
                currentNodes,
                selectedDoor,
                tileSizePx: getTileSizePx(runSettings.tileSize),
            });

            return [
                ...currentNodes,
                {
                    id: room.id,
                    type: "room",
                    position: position,
                    data: {
                        room,
                        selectedDoorId: selectedDoor?.id,
                        connectedDoorIds,
                        doorConnectionMap,
                        doorLabelMode: runSettings.doorLabelMode,
                        doorMarkers,
                        onDoorClick: handleDoorClick,
                        onDoorMarkerChange: handleDoorMarkerChange,
                        onDoorSelectionClear: clearSelectedDoor,
                        onRemoveRoom: handleRemoveRoom,
                    },
                },
            ];
        });
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
                type: "connection",
                animated: false,
                data: {
                    color,
                    laneOffset: getConnectionLaneOffset(index),
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
        <div className="dungeon-graph" style={graphStyle}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                nodeTypes={nodeTypes}
                edgeTypes={edgeTypes}
                onNodesChange={onNodesChange}
                nodesDraggable
                defaultViewport={{x: 0, y: 0, zoom: 1}}
                onPaneClick={() => {
                    setSelectedDoor(undefined);
                }}
                onEdgeClick={(event, edge) => {
                    event.stopPropagation();
                    deleteConnection(edge.id);
                }}
            >
                <Background/>
                <Controls/>
            </ReactFlow>

            <ConnectionPanel
                dungeon={dungeon}
                allDungeons={allDungeons}
                connections={connections}
                roomGroups={hiddenRoomGroups}
                collapseAfterAdd={runSettings.doorShuffleMode !== DoorShuffleModes.OwnDungeon}
                onAddRoom={addRoomToGraph}
                onDeleteConnection={deleteConnection}
                onClearConnections={clearConnections}
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
                doorLabelMode: DoorLabelModes.Compact,
                doorMarkers: {},
                onDoorClick: () => undefined,
                onDoorMarkerChange: () => undefined,
                onDoorSelectionClear: () => undefined,
                onRemoveRoom: () => undefined,
            },
        }));
}

type GetNewRoomPositionInput = {
    currentNodes: RoomFlowNode[];
    selectedDoor: DungeonDoor | undefined;
    tileSizePx: number;
};

function getNewRoomPosition({
                                currentNodes,
                                selectedDoor,
                                tileSizePx,
                            }: GetNewRoomPositionInput): GraphPosition {
    const gap = 96;
    const step = tileSizePx + gap;

    const selectedDoorNode = selectedDoor
        ? currentNodes.find((node) => node.id === selectedDoor.roomId)
        : undefined;

    let preferredPosition: GraphPosition;

    if (selectedDoor && selectedDoorNode) {
        const offset = getPlacementOffset(selectedDoor.direction, step);

        preferredPosition = {
            x: selectedDoorNode.position.x + offset.x,
            y: selectedDoorNode.position.y + offset.y,
        };
    } else {
        preferredPosition = getDefaultNewRoomPosition(currentNodes, step);
    }

    return findFreePosition({
        preferredPosition,
        currentNodes,
        tileSizePx,
        gap,
    });
}

function getPlacementOffset(
    direction: DungeonDoor["direction"],
    step: number,
): GraphPosition {
    switch (direction) {
        case "north":
            return {x: 0, y: -step};
        case "south":
            return {x: 0, y: step};
        case "west":
            return {x: -step, y: 0};
        case "east":
            return {x: step, y: 0};
        case "stairs":
        case "drop":
        default:
            return {x: step, y: 0};
    }
}

function getDefaultNewRoomPosition(
    currentNodes: RoomFlowNode[],
    step: number,
): GraphPosition {
    if (currentNodes.length === 0) {
        return {x: 100, y: 100};
    }

    const rightMostX = Math.max(
        ...currentNodes.map((node) => node.position.x),
    );

    const topMostY = Math.min(
        ...currentNodes.map((node) => node.position.y),
    );

    return {
        x: rightMostX + step,
        y: topMostY,
    };
}

type FindFreePositionInput = {
    preferredPosition: GraphPosition;
    currentNodes: RoomFlowNode[];
    tileSizePx: number;
    gap: number;
};

function findFreePosition({
                              preferredPosition,
                              currentNodes,
                              tileSizePx,
                              gap,
                          }: FindFreePositionInput): GraphPosition {
    const maxAttempts = 20;
    const step = tileSizePx + gap;

    for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
        const candidate = {
            x: preferredPosition.x,
            y: preferredPosition.y + attempt * step,
        };

        if (!isPositionOccupied(candidate, currentNodes, tileSizePx)) {
            return candidate;
        }
    }

    return preferredPosition;
}

function isPositionOccupied(
    position: GraphPosition,
    currentNodes: RoomFlowNode[],
    tileSizePx: number,
): boolean {
    return currentNodes.some((node) => {
        const xDistance = Math.abs(node.position.x - position.x);
        const yDistance = Math.abs(node.position.y - position.y);

        return xDistance < tileSizePx && yDistance < tileSizePx;
    });
}

function getUsedRoomIdsAcrossRun({
                                     activeDungeonId,
                                     activeVisibleRoomIds,
                                     allDungeons,
                                     runSettings,
                                 }: {
    activeDungeonId: string;
    activeVisibleRoomIds: string[];
    allDungeons: DungeonDefinition[];
    runSettings: TrackerRunSettings;
}): string[] {
    const usedRoomIds = new Set(activeVisibleRoomIds);

    allDungeons.forEach((candidateDungeon) => {
        if (candidateDungeon.id === activeDungeonId) {
            return;
        }

        const persistedState = loadPersistedTrackerState(candidateDungeon.id);

        const visibleRoomIds =
            persistedState?.visibleRoomIds?.length
                ? persistedState.visibleRoomIds
                : getStartingRoomIds(candidateDungeon, runSettings);

        visibleRoomIds.forEach((roomId) => {
            usedRoomIds.add(roomId);
        });
    });

    return [...usedRoomIds];
}

function getConnectionLaneOffset(index: number): number {
    if (index === 0) {
        return 0;
    }

    const lane = Math.floor((index + 1) / 2);
    const direction = index % 2 === 0 ? -1 : 1;

    return direction * lane * 18;
}