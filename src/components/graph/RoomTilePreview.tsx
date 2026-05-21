import type { DungeonDefinition, DungeonRoom } from "../../types/dungeon";
import { getPublicAssetUrl } from "../utils/publicAssetUrl";

export const RoomTilePreviewSizes = {
    Thumbnail: "thumbnail",
    Large: "large",
} as const;

export type RoomTilePreviewSize =
    (typeof RoomTilePreviewSizes)[keyof typeof RoomTilePreviewSizes];

type RoomTilePreviewProps = {
    room: DungeonRoom | undefined;
    allDungeons: DungeonDefinition[];
    size?: RoomTilePreviewSize;
};

const MAX_VISIBLE_DOORS = 6;

export function RoomTilePreview({
                                    room,
                                    allDungeons,
                                    size = RoomTilePreviewSizes.Large,
                                }: RoomTilePreviewProps) {
    if (!room) {
        return null;
    }

    const dungeonName = getDungeonName(room, allDungeons);
    const previewImageUrl = getPublicAssetUrl(room.previewImageUrl);
    const visibleDoors = room.doors.slice(0, MAX_VISIBLE_DOORS);
    const hiddenDoorCount = room.doors.length - visibleDoors.length;
    const showDetails = size === RoomTilePreviewSizes.Large;

    return (
        <div
            className={[
                "room-tile-preview",
                `room-tile-preview--${size}`,
            ].join(" ")}
        >
            <div className="room-tile-preview__image">
                {previewImageUrl ? (
                    <img src={previewImageUrl} alt={room.name} />
                ) : (
                    <span>No image yet</span>
                )}
            </div>

            {showDetails && (
                <div className="room-tile-preview__content">
                    <div className="room-tile-preview__dungeon">
                        {dungeonName}
                    </div>

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
            )}
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