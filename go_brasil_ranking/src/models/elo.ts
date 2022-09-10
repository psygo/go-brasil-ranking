import Serializable, { JsonDatum } from "../infra/serializable";
import { GameResult } from "./game_record";

export type SerializedElo = number;
export type SerializedEloDelta = number;

export default class Elo implements Serializable {
  private static readonly kBelow1500: number = 50;
  private static readonly kBelow2000: number = 40;
  private static readonly kAboveOrEqual2000: number = 30;

  constructor(public readonly num: number) {}

  serialize = (): SerializedElo => this.num;

  static deserialize = (json: JsonDatum): Elo => new Elo(json as number);

  private get danOrKyu(): boolean {
    return this.num >= 2000;
  }

  private get danFormatter(): string {
    return (Math.floor(this.num / 100) - 20 + 1).toString() + "d";
  }

  private get kyuFormatter(): string {
    return Math.floor(20 - this.num / 100).toString() + "k";
  }

  get danKyuLevel(): string {
    return this.danOrKyu ? this.danFormatter : this.kyuFormatter;
  }

  private get k(): number {
    return this.num < 1500
      ? Elo.kBelow1500
      : this.num < 2000
      ? Elo.kBelow2000
      : Elo.kAboveOrEqual2000;
  }

  eloFromGame = (opponentElo: Elo, gameResult: GameResult): number => {
    if (gameResult === GameResult.Voided) return 0;

    const levelDiff = opponentElo.num - this.num;

    const gameResultAsNumber: number = gameResult === GameResult.Win ? 1 : 0;

    const expectedValue = 1 / (1 + 10 ** (levelDiff / 400));

    return Math.round((gameResultAsNumber - expectedValue) * this.k);
  };

  add = (delta: number): Elo => new Elo(this.num + delta);
}
