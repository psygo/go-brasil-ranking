import { apiUrl } from "../../infra/setup";
import { FirebaseRef } from "../../models/firebase_ref";
import { Color, GameRecord, resultString } from "../../models/game_record";

export default class GameRecordsTable extends HTMLElement {
  static readonly tag: string = "game-records-table";

  private getGameRecords = async (): Promise<GameRecord[]> => {
    const p = this.playerRef ? this.playerRef : "";
    const queryString = `?limit=${this.limit}&playerRef=${p}`;

    const response = await fetch(`${apiUrl}/game-records${queryString}`);

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
      <h3>Partidas</h3>

      <div class="game-records-table-legend">
        <p>#</p>
        <p>Preto</p>
        <p class="centered">Elo</p>
        <div>
          <p>Elo</p>
          <p>Dif</p>
        </div>
        <p>Branco</p>
        <p class="centered">Elo</p>
        <div>
          <p>Elo</p>
          <p>Dif</p>
        </div>
        <p>Resultado</p>
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

      this.innerHTML += `
        <div class="game-record-card" id="${gameRecord.firebaseRef}">
          <route-link href="/game-records/${gameRecord.firebaseRef}">
            <p>${gameRecord.firebaseRef}</p>
            <route-link ${blackWins} href="/players/${gameRecord.blackRef}">
              <p>${gameRecord.blackName}</p>
            </route-link>
            <p>${gameRecord.eloData.atTheTimeBlackElo}</p>
            <p class="centered">${gameRecord.eloData.eloDeltaBlack}</p>
            <route-link ${whiteWins} href="/players/${gameRecord.whiteRef}">
              <p>${gameRecord.whiteName}</p>
            </route-link>
            <p>${gameRecord.eloData.atTheTimeWhiteElo}</p>
            <p class="centered">${gameRecord.eloData.eloDeltaWhite}</p>
            <p>${resultString(gameRecord.result)}</p>
          </route-link>
        </div>
      `;
    }
  };
}
