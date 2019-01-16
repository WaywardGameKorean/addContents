import { CreatureType, DoodadType, ItemType } from "Enums";
import Mod from "mod/Mod";
interface IAddContentsData {
    seed: number;
}
export default class AddContents extends Mod {
    static readonly INSTANCE: AddContents;
    itemCrabMeat: ItemType;
    itemCookedCrabMeat: ItemType;
    itemAberrantCrabMeat: ItemType;
    itemCookedAberrantCrabMeat: ItemType;
    itemLuminousMushroom: ItemType;
    itemLuminousMushroomLamp: ItemType;
    doodadLuminousMushroom: DoodadType;
    creatureSeaCrab: CreatureType;
    data: IAddContentsData;
    firstLoad: boolean;
    onLoad(): void;
    onUnload(): void;
}
export {};
