import type { EdgeProps } from "@xyflow/react";
import { BaseEdge } from "@xyflow/react";

type ConnectionEdgeData = {
    color?: string;
    laneOffset?: number;
};

export function ConnectionEdge({
                                   id,
                                   sourceX,
                                   sourceY,
                                   targetX,
                                   targetY,
                                   selected,
                                   data,
                               }: EdgeProps) {
    const connectionData = data as ConnectionEdgeData | undefined;
    const color = connectionData?.color ?? "#60a5fa";
    const laneOffset = connectionData?.laneOffset ?? 0;

    const path = getOffsetCurvePath({
        sourceX,
        sourceY,
        targetX,
        targetY,
        laneOffset,
    });

    return (
        <>
            <BaseEdge
                id={`${id}-outline`}
                path={path}
                style={{
                    stroke: "rgba(2, 6, 23, 0.95)",
                    strokeWidth: selected ? 10 : 8,
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                }}
            />

            <BaseEdge
                id={id}
                path={path}
                style={{
                    stroke: color,
                    strokeWidth: selected ? 5 : 4,
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    filter: selected
                        ? `drop-shadow(0 0 6px ${color})`
                        : `drop-shadow(0 0 2px ${color})`,
                }}
            />
        </>
    );
}

function getOffsetCurvePath({
                                sourceX,
                                sourceY,
                                targetX,
                                targetY,
                                laneOffset,
                            }: {
    sourceX: number;
    sourceY: number;
    targetX: number;
    targetY: number;
    laneOffset: number;
}): string {
    const deltaX = targetX - sourceX;
    const deltaY = targetY - sourceY;
    const distance = Math.hypot(deltaX, deltaY) || 1;

    const normalX = -deltaY / distance;
    const normalY = deltaX / distance;

    const midX = (sourceX + targetX) / 2 + normalX * laneOffset;
    const midY = (sourceY + targetY) / 2 + normalY * laneOffset;

    return [
        `M ${sourceX},${sourceY}`,
        `Q ${midX},${midY} ${targetX},${targetY}`,
    ].join(" ");
}