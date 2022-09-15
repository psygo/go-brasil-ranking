import { apiUrl } from "../../infra/setup";
import { FirebaseRef } from "../../models/firebase_ref";
import { GameRecord, resultString } from "../../models/game_record";

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
    `;

    this.setGameRecordsTable(gameRecords);
  }

  setGameRecordsTable = (gameRecords: GameRecord[]): void => {
    for (let i = gameRecords.length - 1; i >= 0; i--) {
      const gameRecord = gameRecords[i];

      this.innerHTML += `
        <div class="game-record-card" id="${gameRecord.firebaseRef}">
          <route-link href="/game-records/${gameRecord.firebaseRef}">
            <p>${gameRecord.firebaseRef}</p>
            <route-link href="/players/${gameRecord.blackRef}">
              <p>${gameRecord.blackName}</p>
            </route-link>
            <route-link href="/players/${gameRecord.whiteRef}">
              <p>${gameRecord.whiteName}</p>
            </route-link>
            <p>${resultString(gameRecord.result)}</p>
          </route-link>
        </div>
      `;
    }
  };
}