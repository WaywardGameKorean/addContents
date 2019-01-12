import { DoodadType, ItemType } from "Enums";
import Mod from "mod/Mod";
interface IAddContentsData {
    seed: number;
}
export default class AddContents extends Mod {
    static readonly INSTANCE: AddContents;
    itemLuminousMushroom: ItemType;
    itemLuminousMushroomLamp: ItemType;
    doodadLuminousMushroom: DoodadType;
    data: IAddContentsData;
    firstLoad: boolean;
    onLoad(): void;
    onUnload(): void;
}
export {};
