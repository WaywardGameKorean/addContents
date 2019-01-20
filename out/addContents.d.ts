import { CreatureType, DoodadType, ItemType, TerrainType } from "Enums";
import Mod from "mod/Mod";
interface IAddContentsData {
    seed: number;
}
export default class AddContents extends Mod {
    itemCrabMeat: ItemType;
    itemCookedCrabMeat: ItemType;
    itemAberrantCrabMeat: ItemType;
    itemCookedAberrantCrabMeat: ItemType;
    itemMud: ItemType;
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
    terrainMudFlat: TerrainType;
    data: IAddContentsData;
}
export {};
