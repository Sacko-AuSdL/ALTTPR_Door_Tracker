import type { DungeonDefinition, DungeonRoom } from "../../types/dungeon";

type RoomTilePreviewProps = {
    room: DungeonRoom | undefined;
    allDungeons: DungeonDefinition[];
};

const MAX_VISIBLE_DOORS = 6;

export function RoomTilePreview({ room, allDungeons }: RoomTilePreviewProps) {
    if (!room) {
        return (
            <div className="room-tile-preview room-tile-preview--empty">
                <div className="room-tile-preview__image">
                    <span>No tile</span>
                </div>

                <div className="room-tile-preview__content">
                    <div className="room-tile-preview__dungeon">Preview</div>
                    <div className="room-tile-preview__name">Hover a tile</div>
                    <div className="room-tile-preview__doors">
                        <span>Select a tile to preview it.</span>
                    </div>
                </div>
            </div>
        );
    }

    const dungeonName = getDungeonName(room, allDungeons);
    const visibleDoors = room.doors.slice(0, MAX_VISIBLE_DOORS);
    const hiddenDoorCount = room.doors.length - visibleDoors.length;

    return (
        <div className="room-tile-preview">
            <div className="room-tile-preview__image">
                {room.previewImageUrl ? (
                    <img src={room.previewImageUrl} alt={room.name} />
                ) : (
                    <span>No image yet</span>
                )}
            </div>

            <div className="room-tile-preview__content">
                <div className="room-tile-preview__dungeon">{dungeonName}</div>
                <div className="room-tile-preview__name" title={room.name}>
                    {room.name}
                </div>

                <div className="room-tile-preview__doors">
                    {visibleDoors.map((door) => (
                        <span key={door.id}>{door.label}</span>
                    ))}

                    {hiddenDoorCount > 0 && (
                        <span>+{hiddenDoorCount} more</span>
                    )}
                </div>
            </div>
        </div>
    );
}

function getDungeonName(
    room: DungeonRoom,
    allDungeons: DungeonDefinition[],
): string {
    const dungeon = allDungeons.find(
        (candidate) => candidate.id === room.originalDungeonId,
    );

    return dungeon?.name.replace(" - Sample", "") ?? room.originalDungeonId;
}