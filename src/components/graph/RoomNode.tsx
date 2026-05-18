import { Handle, Position, type NodeProps } from "@xyflow/react";
import type { CSSProperties } from "react";
import type { DungeonDoor, DungeonRoom } from "../../types/dungeon";

export type RoomNodeData = {
    room: DungeonRoom;
    selectedDoorId?: string;
    connectedDoorIds: string[];
    doorConnectionMap: Record<
        string,
        { connectionId: string; color: string; index: number }
    >;
    onDoorClick: (door: DungeonDoor) => void;
    onRemoveRoom: (roomId: string) => void;
};

export type RoomFlowNode = {
    id: string;
    type: "room";
    position: { x: number; y: number };
    data: RoomNodeData;
};

export function RoomNode({ data }: NodeProps<RoomFlowNode>) {
    const hasPreviewImage = Boolean(data.room.previewImageUrl);

    return (
        <div className="room-node">
            {hasPreviewImage && (
                <div
                    className="room-node__background"
                    style={{
                        backgroundImage: `url(${data.room.previewImageUrl})`,
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
                                {connectionInfo ? `${connectionInfo.index} ${door.label}` : door.label}
                            </button>
                        );
                    })}
                </div>

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