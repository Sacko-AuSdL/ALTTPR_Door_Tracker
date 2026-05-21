import { useMemo, useState } from "react";
import { createPortal } from "react-dom";
import type { RoomGroup } from "../../domain/roomGroups";
import type { DungeonDefinition } from "../../types/dungeon";
import { RoomTilePreview, RoomTilePreviewSizes } from "./RoomTilePreview";

type AddTilePickerProps = {
    roomGroups: RoomGroup[];
    allDungeons: DungeonDefinition[];
    collapseAfterAdd: boolean;
    onAddRoom: (roomId: string) => void;
};

export function AddTilePicker({
                                  roomGroups,
                                  allDungeons,
                                  collapseAfterAdd,
                                  onAddRoom,
                              }: AddTilePickerProps) {
    const [previewRoomId, setPreviewRoomId] = useState<string | undefined>();
    const [expandedDungeonIds, setExpandedDungeonIds] = useState<Set<string>>(
        () => new Set(),
    );

    const selectableRooms = useMemo(() => {
        return roomGroups.flatMap((group) => group.rooms);
    }, [roomGroups]);

    const previewRoom = useMemo(() => {
        return selectableRooms.find((room) => room.id === previewRoomId);
    }, [previewRoomId, selectableRooms]);

    function toggleDungeonGroup(dungeonId: string) {
        setExpandedDungeonIds((currentExpandedDungeonIds) => {
            const nextExpandedDungeonIds = new Set(currentExpandedDungeonIds);

            if (nextExpandedDungeonIds.has(dungeonId)) {
                nextExpandedDungeonIds.delete(dungeonId);
            } else {
                nextExpandedDungeonIds.add(dungeonId);
            }

            return nextExpandedDungeonIds;
        });
    }

    function addRoom(roomId: string) {
        onAddRoom(roomId);
        setPreviewRoomId(undefined);

        if (collapseAfterAdd) {
            setExpandedDungeonIds(new Set());
        }
    }

    return (
        <section className="add-tile-picker">
            <div className="add-tile-picker__header">
                <strong>Add Tile</strong>

                <span>{selectableRooms.length} available</span>
            </div>

            {roomGroups.length === 0 ? (
                <p className="add-tile-picker__empty">All tiles added.</p>
            ) : (
                <>
                    <div
                        className="add-tile-picker__groups"
                        onMouseLeave={() => setPreviewRoomId(undefined)}
                    >
                        {roomGroups.map((group) => {
                            const isExpanded = expandedDungeonIds.has(group.dungeonId);

                            return (
                                <section
                                    key={group.dungeonId}
                                    className="add-tile-picker__group"
                                >
                                    <button
                                        type="button"
                                        className="add-tile-picker__group-toggle"
                                        onClick={() => toggleDungeonGroup(group.dungeonId)}
                                    >
                                        <span>
                                            {isExpanded ? "▾" : "▸"} {group.dungeonName}
                                        </span>

                                        <span className="add-tile-picker__group-count">
                                            {group.rooms.length}
                                        </span>
                                    </button>

                                    {isExpanded && (
                                        <div className="add-tile-picker__rooms">
                                            {group.rooms.map((room) => (
                                                <button
                                                    key={room.id}
                                                    type="button"
                                                    className="add-tile-picker__room"
                                                    onMouseEnter={() => setPreviewRoomId(room.id)}
                                                    onFocus={() => setPreviewRoomId(room.id)}
                                                    onClick={() => addRoom(room.id)}
                                                >
                                                    <RoomTilePreview
                                                        room={room}
                                                        allDungeons={allDungeons}
                                                        size={RoomTilePreviewSizes.Thumbnail}
                                                    />

                                                    <span className="add-tile-picker__room-info">
                                                        <span className="add-tile-picker__room-name">
                                                            {room.name}
                                                        </span>

                                                        <span className="add-tile-picker__room-meta">
                                                            {room.doors.length} doors
                                                        </span>
                                                    </span>
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </section>
                            );
                        })}
                    </div>

                    {previewRoom
                        ? createPortal(
                            (
                                <div className="add-tile-picker__preview-flyout">
                                    <RoomTilePreview
                                        room={previewRoom}
                                        allDungeons={allDungeons}
                                        size={RoomTilePreviewSizes.Large}
                                    />
                                </div>
                            ) as unknown as Parameters<typeof createPortal>[0],
                            document.body,
                        )
                        : null}
                </>
            )}
        </section>
    );
}