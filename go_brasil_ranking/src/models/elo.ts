import { GameResult } from "./game_record";

export default class Elo {
  static readonly kBelow1500: number = 50;
  static readonly kBelow2000: number = 40;
  static readonly kAboveOrEqual2000: number = 30;

  constructor(public readonly elo: number) {}

  private get danOrKyu(): boolean {
    return this.elo >= 2000;
  }

  private get danFormatter(): string {
    return (Math.floor(this.elo / 100) - 20 + 1).toString() + "d";
  }

  private get kyuFormatter(): string {
    return Math.floor(20 - this.elo / 100).toString() + "k";
  }

  get danKyuLevel(): string {
    return this.danOrKyu ? this.danFormatter : this.kyuFormatter;
  }

  private get k(): number {
    return this.elo < 1500
      ? Elo.kBelow1500
      : this.elo < 2000
      ? Elo.kBelow2000
      : Elo.kAboveOrEqual2000;
  }

  eloFromGame = (opponentElo: Elo, gameResult: GameResult): number => {
    if (gameResult === GameResult.Voided) return 0;

    const levelDiff = opponentElo.elo - this.elo;

    const gameResultAsNumber: number = gameResult === GameResult.Win ? 1 : 0;

    const expectedValue = 1 / (1 + 10 ** (levelDiff / 400));

    return Math.round((gameResultAsNumber - expectedValue) * this.k);
  };

  add = (delta: number): Elo => new Elo(this.elo + delta);
}
