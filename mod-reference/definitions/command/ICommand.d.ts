/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
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
import { Command } from "Enums";
import { IPlayer } from "player/IPlayer";
export interface ICommand {
    type: Command;
    callback: CommandCallback;
}
export declare type CommandCallback = (player: IPlayer, args: string) => void;
