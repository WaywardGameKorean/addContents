import { CreatureType, DoodadType, ItemType, TerrainType } from "Enums";
import Mod from "mod/Mod";
interface IAddContentsData {
    seed: number;
}
export default class AddContents extends Mod {
    itemHardShell: ItemType;
    itemHardShellPowder: ItemType;
    itemCrabMeat: ItemType;
    itemCookedCrabMeat: ItemType;
    itemAberrantCrabMeat: ItemType;
    itemCookedAberrantCrabMeat: ItemType;
    itemMud: ItemType;
    itemPearlOyster: ItemType;
    itemPearl: ItemType;
    itemSnailMucus: ItemType;
    itemSnailSalveBand: ItemType;
    itemSnailMeat: ItemType;
    itemCookedSnailMeat: ItemType;
    itemScallop: ItemType;
    itemCookedScallop: ItemType;
    itemMycenaChlorophos: ItemType;
    itemMycenaChlorophosLamp: ItemType;
    itemPillow: ItemType;
    itemWoodenBed: ItemType;
    itemPomegranate: ItemType;
    itemPomegranateSeeds: ItemType;
    doodadMycenaChlorophos: DoodadType;
    doodadPomegranateTree: DoodadType;
    creatureSeaCrab: CreatureType;
    creatureGreenSnail: CreatureType;
    terrainMudFlat: TerrainType;
    data: IAddContentsData;
}
export {};
