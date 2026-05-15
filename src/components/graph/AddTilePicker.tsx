import { useMemo, useState } from "react";
import type { RoomGroup } from "../../domain/roomGroups";
import type { DungeonDefinition } from "../../types/dungeon";
import { RoomTilePreview } from "./RoomTilePreview";

type AddTilePickerProps = {
    roomGroups: RoomGroup[];
    allDungeons: DungeonDefinition[];
    onAddRoom: (roomId: string) => void;
};

export function AddTilePicker({
                                  roomGroups,
                                  allDungeons,
                                  onAddRoom,
                              }: AddTilePickerProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [previewRoomId, setPreviewRoomId] = useState<string | undefined>();

    const selectableRooms = useMemo(() => {
        return roomGroups.flatMap((group) => group.rooms);
    }, [roomGroups]);

    const previewRoom = useMemo(() => {
        return selectableRooms.find((room) => room.id === previewRoomId);
    }, [previewRoomId, selectableRooms]);

    function toggleOpen() {
        if (roomGroups.length === 0) {
            return;
        }

        setIsOpen((current) => !current);
        setPreviewRoomId(undefined);
    }

    function addRoom(roomId: string) {
        onAddRoom(roomId);
        setPreviewRoomId(undefined);
        setIsOpen(false);
    }

    return (
        <div className="add-tile-picker">
            <button
                type="button"
                className="connection-panel__button add-tile-picker__toggle"
                onClick={toggleOpen}
                disabled={roomGroups.length === 0}
            >
                {roomGroups.length === 0
                    ? "All Tiles Added"
                    : isOpen
                        ? "Close Add Tile"
                        : "+ Add Tile"}
            </button>

            {isOpen && (
                <div className="add-tile-picker__content">
                    <RoomTilePreview room={previewRoom} allDungeons={allDungeons} />

                    <div
                        className="add-tile-picker__groups"
                        onMouseLeave={() => setPreviewRoomId(undefined)}
                    >
                        {roomGroups.map((group) => (
                            <section
                                key={group.dungeonId}
                                className="add-tile-picker__group"
                            >
                                <h3>{group.dungeonName}</h3>

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
                                            {room.name}
                                        </button>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}