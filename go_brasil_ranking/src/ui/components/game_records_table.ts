import { apiUrl } from "../../infra/setup";
import { DateUtils } from "../../infra/date_utils";

import { FirebaseRef } from "../../models/firebase_ref";
import { Color, GameRecord, resultString } from "../../models/game_record";

export default class GameRecordsTable extends HTMLElement {
  static readonly tag: string = "game-records-table";

  private getGameRecords = async (): Promise<GameRecord[]> => {
    const p = this.playerRef ? this.playerRef : "";
    const queryString = `?limit=${this.limit}&playerRef=${p}`;

    const response = await fetch(`${apiUrl}/partidas${queryString}`);

    const json = await response.json();
    return json["data"]["gameRecords"];
  };

  constructor(
    public readonly limit: number | "max" = 20,
    public readonly playerRef: FirebaseRef = ""
  ) {
    super();
  }

  async connectedCallback() {
    const gameRecords = await this.getGameRecords();

    this.innerHTML = `
      <h2>Partidas</h2>

      <div class="game-records-table-legend">
        <span>#</span>
        <span>Preto</span>
        <span class="centered">Elo</span>
        <div>
          <p>Elo</span>
          <p>Dif</span>
        </div>
        <span>Branco</span>
        <span class="centered">Elo</span>
        <div>
          <span>Elo</span>
          <span>Dif</span>
        </div>
        <span>Resultado</span>
        <span>Data</span>
      </div>
    `;

    this.setGameRecordsTable(gameRecords);
  }

  setGameRecordsTable = (gameRecords: GameRecord[]): void => {
    for (let i = gameRecords.length - 1; i >= 0; i--) {
      const gameRecord = gameRecords[i];
      const blackWins =
        gameRecord.result.whoWins === Color.Black ? "winner" : "loser";
      const whiteWins =
        gameRecord.result.whoWins === Color.White ? "winner" : "loser";

      const gameDate = new Date(gameRecord.date);

      this.innerHTML += `
        <div class="game-record-card" id="${gameRecord.firebaseRef}">
          <route-link href="/game-records/${gameRecord.firebaseRef}">
            <span>${gameRecord.firebaseRef}</span>
            <route-link ${blackWins} href="/players/${gameRecord.blackRef}">
              <span>${gameRecord.blackName}</span>
            </route-link>
            <span>${gameRecord!.eloData!.atTheTimeBlackElo}</span>
            <span class="centered">${gameRecord!.eloData!.eloDeltaBlack}</span>
            <route-link ${whiteWins} href="/players/${gameRecord.whiteRef}">
              <span>${gameRecord.whiteName}</span>
            </route-link>
            <span>${gameRecord!.eloData!.atTheTimeWhiteElo}</span>
            <span class="centered">${gameRecord!.eloData!.eloDeltaWhite}</span>
            <span>${resultString(gameRecord.result)}</span>
            <span>${DateUtils.formatDate(gameDate)}</span>
          </route-link>
        </div>
      `;
    }
  };
}
