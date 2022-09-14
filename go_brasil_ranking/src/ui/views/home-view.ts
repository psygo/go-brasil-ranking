import { apiUrl } from "../../infra/setup";
import Elo from "../../models/elo";
import { Player } from "../../models/player";
import GameRecordsTable from "../components/game_records_table";

export default class HomeView extends HTMLElement {
  static readonly tag: string = "home-view";

  private getPlayers = async (): Promise<Player[]> => {
    const response = await fetch(`${apiUrl}/players`);
    const json = await response.json();
    return json["data"]["players"];
  };

  async connectedCallback() {
    document.title = "Ranking Brasileiro de Go";

    const players = await this.getPlayers();

    this.innerHTML += `
      <div id="players-table">
        <h3>Jogadores</h3>
      </div>
    `;

    this.setPlayersTable(players);

    this.appendChild(new GameRecordsTable());
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
            <p>${elo.danKyuLevel()}</p>
          </route-link>
        </div>
      `;
    }
  };
}
