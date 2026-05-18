export const CONNECTION_COLORS = [
    "#60a5fa",
    "#f97316",
    "#22c55e",
    "#e879f9",
    "#facc15",
    "#a78bfa",
    "#14b8a6",
    "#ef4444",
];

export function getConnectionColor(index: number): string {
    return CONNECTION_COLORS[index % CONNECTION_COLORS.length];
}