import { Handle, Position, type NodeProps } from "@xyflow/react";
import type { CSSProperties } from "react";
import type { DungeonDoor, DungeonRoom } from "../../types/dungeon";
import { DOOR_MARKER_DEFINITIONS, getDoorMarkerDefinition } from "../../data/doorMarkerDefinitions";
import type { DoorMarkerMap, DoorMarkerType } from "../../types/doorMarker";
import {
    DoorLabelModes,
    type DoorLabelMode,
} from "../../types/runSettings";
import { getPublicAssetUrl } from "../utils/publicAssetUrl";

export type RoomNodeData = {
    room: DungeonRoom;
    selectedDoorId?: string;
    connectedDoorIds: string[];
    doorConnectionMap: Record<
        string,
        {
            connectionId: string;
            color: string;
            index: number;
        }
    >;
    doorLabelMode: DoorLabelMode;
    doorMarkers: DoorMarkerMap;
    onDoorClick: (door: DungeonDoor) => void;
    onDoorMarkerChange: (
        doorId: string,
        markerType: DoorMarkerType | undefined,
    ) => void;
    onDoorSelectionClear: () => void;
    onRemoveRoom: (roomId: string) => void;
};

export type RoomFlowNode = {
    id: string;
    type: "room";
    position: { x: number; y: number };
    data: RoomNodeData;
};

export function RoomNode({ data }: NodeProps<RoomFlowNode>) {
    const previewImageUrl = getPublicAssetUrl(data.room.previewImageUrl);
    const selectedDoor = data.room.doors.find(
        (door) => door.id === data.selectedDoorId,
    );

    function setSelectedDoorMarker(markerType: DoorMarkerType | undefined) {
        if (!selectedDoor) {
            return;
        }

        data.onDoorMarkerChange(selectedDoor.id, markerType);
        data.onDoorSelectionClear();
    }

    return (
        <div className="room-node">
            {previewImageUrl && (
                <div
                    className="room-node__background"
                    style={{
                        backgroundImage: `url(${previewImageUrl})`,
                    }}
                />
            )}

            <div className="room-node__overlay" />

            <div className="room-node__content">
                <button
                    type="button"
                    className="nodrag room-node__remove"
                    onClick={(event) => {
                        event.stopPropagation();
                        data.onRemoveRoom(data.room.id);
                    }}
                    aria-label={`Remove ${data.room.name}`}
                    title={`Remove ${data.room.name}`}
                >
                    ×
                </button>

                <div className="room-node__doors">
                    {data.room.doors.map((door) => {
                        const isSelected = data.selectedDoorId === door.id;
                        const isConnected = data.connectedDoorIds.includes(door.id);
                        const connectionInfo = data.doorConnectionMap[door.id];

                        return (
                            <button
                                key={door.id}
                                type="button"
                                style={getDoorVisualStyle(door, isSelected, data.doorConnectionMap)}
                                className={[
                                    "nodrag",
                                    "room-node__door",
                                    data.doorLabelMode === DoorLabelModes.Dots ? "room-node__door--dots" : "",
                                    isSelected ? "room-node__door--selected" : "",
                                    isConnected ? "room-node__door--connected" : "",
                                ]
                                    .filter(Boolean)
                                    .join(" ")}
                                onClick={(event) => {
                                    event.stopPropagation();
                                    data.onDoorClick(door);
                                }}
                                title={door.label}
                            >
                                {getDoorButtonLabel({
                                    label: door.label,
                                    connectionIndex: connectionInfo?.index,
                                    mode: data.doorLabelMode,
                                })}
                            </button>
                        );
                    })}
                </div>

                {data.room.doors.map((door) => {
                    const markerDefinition = getDoorMarkerDefinition(data.doorMarkers[door.id]);

                    if (!markerDefinition) {
                        return null;
                    }

                    const markerIconUrl = getPublicAssetUrl(markerDefinition.iconUrl);

                    return (
                        <button
                            key={`${door.id}-marker`}
                            type="button"
                            className="nodrag room-node__door-marker"
                            style={getDoorMarkerStyle(door)}
                            title={`Remove ${markerDefinition.label} marker`}
                            aria-label={`Remove ${markerDefinition.label} marker from ${door.label}`}
                            onClick={(event) => {
                                event.stopPropagation();
                                data.onDoorMarkerChange(door.id, undefined);
                                data.onDoorSelectionClear();
                            }}
                        >
                            {markerIconUrl ? (
                                <img src={markerIconUrl} alt="" aria-hidden="true" />
                            ) : (
                                <span>{markerDefinition.shortLabel}</span>
                            )}
                        </button>
                    );
                })}

                {selectedDoor && (
                    <div
                        className={[
                            "nodrag",
                            "room-node__marker-menu",
                            getDoorMarkerMenuPlacementClass(selectedDoor),
                        ].join(" ")}
                        style={getDoorMarkerMenuStyle(selectedDoor)}
                        onClick={(event) => {
                            event.stopPropagation();
                        }}
                    >
                        {DOOR_MARKER_DEFINITIONS.map((definition) => {
                            const iconUrl = getPublicAssetUrl(definition.iconUrl);

                            return (
                                <button
                                    key={definition.type}
                                    type="button"
                                    className="room-node__marker-menu-button"
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        setSelectedDoorMarker(definition.type);
                                    }}
                                    title={definition.label}
                                >
                                    {iconUrl ? (
                                        <img src={iconUrl} alt={definition.label} />
                                    ) : (
                                        definition.shortLabel
                                    )}
                                </button>
                            );
                        })}

                        <button
                            type="button"
                            className="room-node__marker-menu-button room-node__marker-menu-button--clear"
                            onClick={(event) => {
                                event.stopPropagation();
                                setSelectedDoorMarker(undefined);
                            }}
                            title="Clear marker"
                        >
                            ×
                        </button>
                    </div>
                )}

                {data.room.doors.map((door) => {
                    return (
                        <Handle
                            key={door.id}
                            id={door.id}
                            type="source"
                            position={Position.Top}
                            style={getDoorHotspotStyle(door)}
                            className="room-node__handle"
                        />
                    );
                })}

                {data.room.doors.map((door) => {
                    return (
                        <Handle
                            key={`${door.id}-target`}
                            id={door.id}
                            type="target"
                            position={Position.Top}
                            style={getDoorHotspotStyle(door)}
                            className="room-node__handle"
                        />
                    );
                })}
            </div>
        </div>
    );
}

function getDoorHotspotStyle(door: DungeonDoor): CSSProperties {
    return {
        left: `${((door.x ?? 256) / 512) * 100}%`,
        top: `${((door.y ?? 256) / 512) * 100}%`,
    };
}

function getDoorVisualStyle(
    door: DungeonDoor,
    isSelected: boolean,
    doorConnectionMap: RoomNodeData["doorConnectionMap"],
): CSSProperties {
    const hotspotStyle = getDoorHotspotStyle(door);
    const connectionInfo = doorConnectionMap[door.id];

    if (!connectionInfo) {
        return hotspotStyle;
    }

    return {
        ...hotspotStyle,
        borderColor: connectionInfo.color,
        boxShadow: isSelected
            ? `0 0 0 2px white, 0 0 0 4px ${connectionInfo.color}`
            : `0 0 0 2px ${connectionInfo.color}`,
        background: "rgba(17, 24, 39, 0.92)",
    };
}

function getDoorButtonLabel({
                                label,
                                connectionIndex,
                                mode,
                            }: {
    label: string;
    connectionIndex?: number;
    mode: DoorLabelMode;
}): string {
    if (mode === DoorLabelModes.Dots) {
        return connectionIndex ? String(connectionIndex) : "";
    }

    const displayLabel =
        mode === DoorLabelModes.Compact ? compactDoorLabel(label) : label;

    return connectionIndex ? `${connectionIndex} ${displayLabel}` : displayLabel;
}

function compactDoorLabel(label: string): string {
    const normalizedLabel = label.trim();

    const replacements: Record<string, string> = {
        "Up Stairs": "UP",
        "Down Stairs": "DN",
        "North Stairs": "N↑",
        "South Stairs": "S↓",
        "Up Ladder": "UP",
        "Down Ladder": "DN",
        "Drop Entrance": "DR",
        Drop: "DR",
        Hole: "HL",
    };

    if (replacements[normalizedLabel]) {
        return replacements[normalizedLabel];
    }

    const bigKeyMatch = normalizedLabel.match(/^Big Key Door ([A-Z]{1,2})$/);
    if (bigKeyMatch) {
        return `BK-${bigKeyMatch[1]}`;
    }

    const keyMatch = normalizedLabel.match(/^Key Door ([A-Z]{1,2})$/);
    if (keyMatch) {
        return `K-${keyMatch[1]}`;
    }

    const edgeMatch = normalizedLabel.match(/([A-Z]{1,2}) Edge$/);
    if (edgeMatch) {
        return edgeMatch[1];
    }

    return normalizedLabel;
}

function getDoorMarkerStyle(door: DungeonDoor): CSSProperties {
    const xPercent = ((door.x ?? 256) / 512) * 100;
    const yPercent = ((door.y ?? 256) / 512) * 100;

    let markerX = xPercent;
    let markerY = yPercent;

    if (yPercent < 18) {
        markerY += 9;
    } else if (yPercent > 82) {
        markerY -= 9;
    } else if (xPercent < 18) {
        markerX += 9;
    } else if (xPercent > 82) {
        markerX -= 9;
    } else {
        markerY -= 8;
    }

    return {
        left: `${clamp(markerX, 8, 92)}%`,
        top: `${clamp(markerY, 8, 92)}%`,
    };
}

function getDoorMarkerMenuStyle(door: DungeonDoor): CSSProperties {
    const xPercent = ((door.x ?? 256) / 512) * 100;
    const yPercent = ((door.y ?? 256) / 512) * 100;

    return {
        left: `${clamp(xPercent, 20, 80)}%`,
        top: `${clamp(yPercent, 12, 88)}%`,
    };
}

function getDoorMarkerMenuPlacementClass(door: DungeonDoor): string {
    const yPercent = ((door.y ?? 256) / 512) * 100;

    if (yPercent < 30) {
        return "room-node__marker-menu--below";
    }

    return "room-node__marker-menu--above";
}

function clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
}