import { Globals as g } from "../../infra/globals";
import { RouteEnum } from "../../routing/router";

import { getAllFlags } from "../../models/country";
import Elo from "../../models/elo";
import { Player } from "../../models/player";
import { DateUtils } from "../../infra/date_utils";

export default class PlayersTable extends HTMLElement {
  static readonly tag: string = "players-table";

  private getPlayers = async (): Promise<Player[]> => {
    const response = await fetch(`${g.apiUrl}${RouteEnum.players}`);
    const json = await response.json();
    return json["data"]["players"];
  };

  async connectedCallback() {
    const players = await this.getPlayers();

    this.innerHTML += /*html*/ `
      <h2>Jogadores</h2>
      
      <div class="players-table-legend">
        <span>#</span>
        <span>Nome</span>
        <span>País</span>
        <span>Elo</span>
        <span>Dan Kyu</span>
        <span class="centered">Data da Última Partida</span>
      </div>
    `;

    this.setPlayersTable(players);
  }

  private setPlayersTable = (players: Player[]): void => {
    let i = 1;
    this.currentPlayer = players[0];
    for (const player of players) {
      player.elo === this.currentPlayer.elo ? null : i++;

      this.currentPlayer = player;

      const elo = new Elo(this.currentPlayer.elo);

      this.innerHTML += /*html*/ `
        <div 
          class="player-card" 
          id="${this.currentPlayer.firebaseRef}">
            <route-link 
              href="${RouteEnum.players}/${this.currentPlayer.firebaseRef}">
                <span>${i}</span>

                <route-link 
                  href="${RouteEnum.players}/${this.currentPlayer.firebaseRef}">
                    <span>${this.currentPlayer.name}</span>
                </route-link>

                <span class="countries">
                  ${getAllFlags(this.currentPlayer.countries)}
                </span>

                <span>${elo.num}</span>

                <span class="dan-kyu">${elo.danKyuLevel()}</span>
                
                ${this.lastGameLink(this.currentPlayer)}
          </route-link>
        </div>
      `;
    }
  };

  private declare currentPlayer: Player;

  private lastGameLink = (player: Player): string => {
    if (player.lastGame) {
      const lastGameDate = player.lastGame
        ? DateUtils.formatDate(new Date(player.lastGame?.date!))
        : "&mdash;";

      return /*html*/ `
        <route-link 
          class="centered" 
          href="${RouteEnum.gameRecords}/${player.lastGame.firebaseRef}">
            <span>${lastGameDate}</span>
        </route-link>
      `;
    } else return /*html*/ `<span class="centered">&mdash;</span>`;
  };
}
