import { Globals as g } from "../../infra/globals";
import { RouteEnum } from "../../routing/router";

import { getAllFlags } from "../../models/country";
import Elo from "../../models/elo";
import { Player } from "../../models/player";

export default class PlayersTable extends HTMLElement {
  static readonly tag: string = "players-table";

  private getPlayers = async (): Promise<Player[]> => {
    const response = await fetch(`${g.apiUrl}${RouteEnum.players}`);
    const json = await response.json();
    return json["data"]["players"];
  };

  async connectedCallback() {
    const players = await this.getPlayers();

    this.innerHTML += `
      <h2>Jogadores</h2>
      
      <div class="players-table-legend">
        <span>#</span>
        <span>Nome</span>
        <span>País</span>
        <span>Elo</span>
        <div>
          <span>Dan</span>
          <span>Kyu</span>
        </div>
      </div>
    `;

    this.setPlayersTable(players);
  }

  private setPlayersTable = (players: Player[]): void => {
    for (let i = 0; i < players.length; i++) {
      const player = players[i];
      const elo = new Elo(player.elo);

      this.innerHTML += `
        <div class="player-card" id="${player.firebaseRef}">
          <route-link href="${RouteEnum.players}/${player.firebaseRef}">
            <span>${i + 1}</span>

            <route-link href="${RouteEnum.players}/${player.firebaseRef}">
              <span>${player.name}</span>
            </route-link>

            <span class="countries">${getAllFlags(player.countries)}</span>

            <span>${elo.num}</span>

            <span class="dan-kyu">${elo.danKyuLevel()}</span>
          </route-link>
        </div>
      `;
    }
  };
}
