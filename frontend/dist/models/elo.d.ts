import Serializable, { JsonDatum } from "../infra/serializable";
import { Color, GameResultStatus } from "./game_record";
export declare type SerializedElo = number;
export declare type SerializedEloDelta = number;
export default class Elo implements Serializable {
    readonly num: number;
    private static readonly kBelow1500;
    private static readonly kBelow2000;
    private static readonly kAboveOrEqual2000;
    constructor(num: number);
    serialize: () => SerializedElo;
    static deserialize: (json: JsonDatum) => Elo;
    private get danOrKyu();
    private danFormatter;
    private kyuFormatter;
    danKyuLevel: (long?: boolean) => string;
    private get k();
    deltaFromGame: (opponentElo: Elo, gameResult: GameResultStatus, handicap?: number, myColor?: Color) => Elo;
    add: (delta: Elo) => Elo;
}
