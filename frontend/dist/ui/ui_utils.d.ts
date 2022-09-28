import { Country } from "../models/country";
import { Player } from "../models/player";
export declare namespace UiUtils {
    const allFlags: (countries: readonly Country[]) => string;
    const lastGameLink: (player: Player) => string;
    const playerPicture: (picture: string | undefined) => string;
}
