type TrackerStatusBarProps = {
    statusText: string;
    isActive: boolean;
};

export function TrackerStatusBar({
                                     statusText,
                                     isActive,
                                 }: TrackerStatusBarProps) {
    return (
        <div className="tracker-statusbar">
            <span
                className={[
                    "tracker-statusbar__indicator",
                    isActive ? "tracker-statusbar__indicator--active" : "",
                ]
                    .filter(Boolean)
                    .join(" ")}
            />

            <span>{statusText}</span>
        </div>
    );
}