import type { DungeonDefinition } from "../../../types/dungeon";
import { HyruleCastleGenerated } from "./hyrule-castle.generated";
import { EasternPalaceGenerated } from "./eastern-palace.generated";
import { DesertPalaceGenerated } from "./desert-palace.generated";
import { TowerOfHeraGenerated } from "./tower-of-hera.generated";
import { CastleTowerGenerated } from "./castle-tower.generated";
import { PalaceOfDarknessGenerated } from "./palace-of-darkness.generated";
import { SwampPalaceGenerated } from "./swamp-palace.generated";
import { SkullWoodsGenerated } from "./skull-woods.generated";
import { ThievesTownGenerated } from "./thieves-town.generated";
import { IcePalaceGenerated } from "./ice-palace.generated";
import { MiseryMireGenerated } from "./misery-mire.generated";
import { TurtleRockGenerated } from "./turtle-rock.generated";
import { GanonsTowerGenerated } from "./ganons-tower.generated";

export const krisdavieDungeons = [
    HyruleCastleGenerated,
    EasternPalaceGenerated,
    DesertPalaceGenerated,
    TowerOfHeraGenerated,
    CastleTowerGenerated,
    PalaceOfDarknessGenerated,
    SwampPalaceGenerated,
    SkullWoodsGenerated,
    ThievesTownGenerated,
    IcePalaceGenerated,
    MiseryMireGenerated,
    TurtleRockGenerated,
    GanonsTowerGenerated,
] satisfies DungeonDefinition[];
