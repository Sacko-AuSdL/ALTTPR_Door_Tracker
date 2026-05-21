import { useCallback, useRef, useState } from "react";
import { useCloseOnOutsideClick } from "./useCloseOnOutsideClick";

type TrackerActionsMenuProps = {
    onResetLayout: () => void;
    onResetDungeon: () => void;
    onResetRun: () => void;
};

export function TrackerActionsMenu({
                                       onResetLayout,
                                       onResetDungeon,
                                       onResetRun,
                                   }: TrackerActionsMenuProps) {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);

    const closeMenu = useCallback(() => {
        setIsOpen(false);
    }, []);

    useCloseOnOutsideClick(menuRef, isOpen, closeMenu);

    const runAction = useCallback(
        (action: () => void) => {
            action();
            closeMenu();
        },
        [closeMenu],
    );

    return (
        <div className="tracker-menu" ref={menuRef}>
            <button
                type="button"
                className="tracker-menu__trigger"
                aria-label="Tracker actions"
                title="Tracker actions"
                aria-haspopup="menu"
                aria-expanded={isOpen}
                onClick={() => setIsOpen((current) => !current)}
            >
                ⋯
            </button>

            {isOpen && (
                <div className="tracker-menu__content" role="menu">
                    <div className="tracker-menu__title">Actions</div>

                    <button
                        type="button"
                        className="tracker-menu__button"
                        role="menuitem"
                        onClick={() => runAction(onResetLayout)}
                    >
                        Rearrange Rooms
                    </button>

                    <button
                        type="button"
                        className="tracker-menu__button"
                        role="menuitem"
                        onClick={() => runAction(onResetDungeon)}
                    >
                        Reset Current Dungeon
                    </button>

                    <button
                        type="button"
                        className="tracker-menu__button tracker-menu__button--danger"
                        role="menuitem"
                        onClick={() => runAction(onResetRun)}
                    >
                        Reset All Dungeons
                    </button>
                </div>
            )}
        </div>
    );
}