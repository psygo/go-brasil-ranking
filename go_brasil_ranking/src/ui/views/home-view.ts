import { apiUrl } from "../../infra/setup";
import Elo from "../../models/elo";
import { GameRecord, resultString } from "../../models/game_record";
import { Player } from "../../models/player";

export default class HomeView extends HTMLElement {
  static readonly tag: string = "home-view";

  private getPlayers = async (): Promise<Player[]> => {
    const response = await fetch(`${apiUrl}/players`);
    const json = await response.json();
    return json["data"]["players"];
  };

  private getGameRecords = async (): Promise<GameRecord[]> => {
    const response = await fetch(`${apiUrl}/game-records`);
    const json = await response.json();
    return json["data"]["gameRecords"];
  };

  async connectedCallback() {
    const players = await this.getPlayers();

    this.innerHTML += `
      <div class="ranking-table" id="players-table">
        <h3>Jogadores</h3>
      </div>
      <div class="ranking-table" id="game-records-table">
        <h3>Partidas</h3>
      </div>
    `;

    this.setPlayersTable(players);

    const gameRecords = await this.getGameRecords();

    this.setGameRecordsTable(gameRecords);
  }

  private setPlayersTable = (players: Player[]): void => {
    const playersTable = this.querySelector("#players-table")!;

    for (let i = 0; i < players.length; i++) {
      const player = players[i];
      const elo = new Elo(player.elo);

      playersTable.innerHTML += `
        <div class="player-card" id="${player.firebaseRef}">
          <route-link href="/players/${player.firebaseRef}">
            <p>${i + 1}</p>
            <route-link href="/players/${player.firebaseRef}">
              <p>${player.name}</p>
            </route-link>
            <p>${elo.num}</p>
            <p>${elo.danKyuLevel}</p>
          </route-link>
        </div>
      `;
    }
  };

  setGameRecordsTable = (gameRecords: GameRecord[]): void => {
    const gameRecordsTable = this.querySelector("#game-records-table")!;

    for (let i = gameRecords.length - 1; i >= 0; i--) {
      const gameRecord = gameRecords[i];

      gameRecordsTable.innerHTML += `
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
