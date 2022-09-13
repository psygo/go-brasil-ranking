import { apiUrl } from "../../infra/setup";
import Elo from "../../models/elo";
import { Player } from "../../models/player";

export default class HomeView extends HTMLElement {
  static readonly tag: string = "home-view";

  private getPlayers = async (): Promise<Player[]> => {
    const response = await fetch(`${apiUrl}/players`);

    const json = await response.json();

    return json["data"]["players"];
  };

  async connectedCallback() {
    const players = await this.getPlayers();

    this.setPlayersTable(players);
  }

  private setPlayersTable = (players: Player[]): void => {
    this.innerHTML += `
      <table id="jogadores">
        <caption>Jogadores</caption>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Elo</th>
            <th>Dan/Kyu</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    `;

    const playersTableBody = this.querySelector("table#jogadores > tbody")!;

    for (let i = 0; i < players.length; i++) {
      const player = players[i];
      const elo = new Elo(player.elo);

      playersTableBody.innerHTML += `
        <tr id="${player.firebaseRef}">
          <td>${i + 1}</td>
          <td>${player.name}</td>
          <td>${elo.num}</td>
          <td>${elo.danKyuLevel}</td>
        </tr>
      `;
    }
  };
}
