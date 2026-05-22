export const CONNECTION_COLORS = [
    "#60a5fa", // blue
    "#f97316", // orange
    "#22c55e", // green
    "#e879f9", // pink
    "#facc15", // yellow
    "#a78bfa", // violet
    "#14b8a6", // teal
    "#ef4444", // red
    "#38bdf8", // sky
    "#fb7185", // rose
    "#84cc16", // lime
    "#c084fc", // purple
];

export function getConnectionColor(index: number): string {
    return CONNECTION_COLORS[index % CONNECTION_COLORS.length];
}