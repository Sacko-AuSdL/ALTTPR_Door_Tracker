import type { DungeonDefinition, DungeonRoom } from "../../types/dungeon";

type RoomTilePreviewProps = {
    room: DungeonRoom | undefined;
    allDungeons: DungeonDefinition[];
};

export function RoomTilePreview({ room, allDungeons }: RoomTilePreviewProps) {
    if (!room) {
        return (
            <div className="room-tile-preview room-tile-preview--empty">
                Select a tile to preview it.
            </div>
        );
    }

    const dungeonName = getDungeonName(room, allDungeons);

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
                <div className="room-tile-preview__name">{room.name}</div>

                <div className="room-tile-preview__doors">
                    {room.doors.map((door) => (
                        <span key={door.id}>{door.label}</span>
                    ))}
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