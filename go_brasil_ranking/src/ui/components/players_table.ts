import { apiUrl } from "../../infra/setup";
import Elo from "../../models/elo";
import { Player } from "../../models/player";

export default class PlayersTable extends HTMLElement {
  static readonly tag: string = "players-table";

  private getPlayers = async (): Promise<Player[]> => {
    const response = await fetch(`${apiUrl}/players`);
    const json = await response.json();
    return json["data"]["players"];
  };

  async connectedCallback() {
    const players = await this.getPlayers();

    this.innerHTML += `
      <h3>Jogadores</h3>
    `;

    this.setPlayersTable(players);
  }

  private setPlayersTable = (players: Player[]): void => {
    for (let i = 0; i < players.length; i++) {
      const player = players[i];
      const elo = new Elo(player.elo);

      this.innerHTML += `
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
