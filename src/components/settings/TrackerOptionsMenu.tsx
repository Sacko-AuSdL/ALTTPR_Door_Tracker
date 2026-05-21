import { useCallback, useRef, useState } from "react";
import { RunSettingsPanel } from "../graph/RunSettingsPanel";
import type { TrackerRunSettings } from "../../types/runSettings";
import { useCloseOnOutsideClick } from "./useCloseOnOutsideClick";

type TrackerOptionsMenuProps = {
    settings: TrackerRunSettings;
    onChange: (settings: TrackerRunSettings) => void;
};

export function TrackerOptionsMenu({
                                       settings,
                                       onChange,
                                   }: TrackerOptionsMenuProps) {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);

    const closeMenu = useCallback(() => {
        setIsOpen(false);
    }, []);

    useCloseOnOutsideClick(menuRef, isOpen, closeMenu);

    return (
        <div className="tracker-menu" ref={menuRef}>
            <button
                type="button"
                className="tracker-menu__trigger"
                aria-label="Tracker options"
                title="Tracker options"
                aria-haspopup="menu"
                aria-expanded={isOpen}
                onClick={() => setIsOpen((current) => !current)}
            >
                ⚙
            </button>

            {isOpen && (
                <div className="tracker-menu__content" role="menu">
                    <div className="tracker-menu__title">Tracker Options</div>

                    <RunSettingsPanel settings={settings} onChange={onChange} />
                </div>
            )}
        </div>
    );
}