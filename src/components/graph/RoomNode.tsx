import { Handle, Position, type Node, type NodeProps } from "@xyflow/react";
import type {
    DoorDirection,
    DungeonDoor,
    DungeonRoom,
} from "../../types/dungeon";

export type RoomNodeData = {
    room: DungeonRoom;
    selectedDoorId?: string;
    connectedDoorIds: string[];
    onDoorClick: (door: DungeonDoor) => void;
};

export type RoomFlowNode = Node<RoomNodeData, "room">;

export function RoomNode({ data }: NodeProps<RoomFlowNode>) {
    return (
        <div className="room-node">
            <div className="room-node__title">{data.room.name}</div>

            <div className="room-node__doors">
                {data.room.doors.map((door) => {
                    const isSelected = data.selectedDoorId === door.id;
                    const isConnected = data.connectedDoorIds.includes(door.id);
                    const handlePosition = getHandlePosition(door.direction);

                    return (
                        <div key={door.id} className="room-node__door-row">
                            <Handle
                                id={door.id}
                                type="target"
                                position={handlePosition}
                                className="room-node__handle"
                            />

                            <button
                                className={[
                                    "nodrag",
                                    "room-node__door",
                                    isSelected ? "room-node__door--selected" : "",
                                    isConnected ? "room-node__door--connected" : "",
                                ]
                                    .filter(Boolean)
                                    .join(" ")}
                                type="button"
                                onClick={() => data.onDoorClick(door)}
                            >
                                {door.label}
                            </button>

                            <Handle
                                id={door.id}
                                type="source"
                                position={handlePosition}
                                className="room-node__handle"
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

function getHandlePosition(direction?: DoorDirection): Position {
    switch (direction) {
        case "north":
            return Position.Top;
        case "south":
            return Position.Bottom;
        case "west":
            return Position.Left;
        case "east":
            return Position.Right;
        case "stairs":
        case "drop":
        default:
            return Position.Right;
    }
}