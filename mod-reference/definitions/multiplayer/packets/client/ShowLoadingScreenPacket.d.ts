/*!
 * Copyright Unlok, Vaughn Royko 2011-2018
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 *
 *
 */
import UiTranslation from "language/dictionary/UiTranslation";
import ClientPacket from "multiplayer/packets/ClientPacket";
export default class ShowLoadingScreenPacket extends ClientPacket {
    title: UiTranslation;
    description: UiTranslation;
    process(): void;
}
