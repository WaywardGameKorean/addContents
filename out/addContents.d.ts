import { DoodadType, ItemType } from "Enums";
import Mod from "mod/Mod";
export default class AddContents extends Mod {
    onLoad(): void;
    onUnload(): void;
    itemLuminousMushroom: ItemType;
    itemLuminousMushroomLamp: ItemType;
    doodadLuminousMushroom: DoodadType;
}
