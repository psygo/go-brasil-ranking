import { Globals as g } from "../../infra/globals";
import { RouteEnum } from "../../routing/router";

import Elo from "../../models/elo";
import { Player } from "../../models/player";
import { DateUtils } from "../../infra/date_utils";
import { UiUtils } from "../utils";

export default class PlayersTable extends HTMLElement {
  static readonly tag: string = "players-table";

  private declare currentPlayer: Player;

  private getPlayers = async (): Promise<Player[]> => {
    const response = await fetch(`${g.apiUrl}${RouteEnum.players}`);
    const json = await response.json();
    return json["data"]["players"];
  };

  async connectedCallback() {
    const players = await this.getPlayers();

    this.innerHTML += /*html*/ `
      <h2>
        <route-link href="${RouteEnum.players}">
          Jogadores
        </route-link>
      </h2>
      
      <div class="players-table-legend">
        <span>#</span>
        <span>Foto</span>
        <span class="align-left">Nome</span>
        <span>País</span>
        <span>Elo</span>
        <span>Dan Kyu</span>
        <span>Data da Última Partida</span>
        <span>Número de Partidas</span>
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
                
                ${this.playerPicture}

                <route-link 
                  href="${RouteEnum.players}/${this.currentPlayer.firebaseRef}">
                    <span class="align-left">${this.currentPlayer.name}</span>
                </route-link>

                <div>
                  ${UiUtils.allFlags(this.currentPlayer.countries)}
                </div>

                <span>${elo.num}</span>

                <span>${elo.danKyuLevel()}</span>
                
                ${this.lastGameLink}
                
                <span>${player.gamesTotal}</span>
          </route-link>
        </div>
      `;
    }
  };

  private get playerPicture(): string {
    return !this.currentPlayer.picture
      ? /*html*/ `<span class="centered" id="picture-placeholder">&mdash;</span>`
      : /*html*/ `<img id="picture" src="${this.currentPlayer.picture}"/>`;
  }

  private get lastGameLink(): string {
    if (this.currentPlayer.lastGame) {
      const lastGameDate = this.currentPlayer.lastGame
        ? DateUtils.formatDate(new Date(this.currentPlayer.lastGame?.date!))
        : "&mdash;";

      return /*html*/ `
        <route-link 
          class="centered" 
          href="${RouteEnum.gameRecords}/${this.currentPlayer.lastGame.firebaseRef}">
            <span>${lastGameDate}</span>
        </route-link>
      `;
    } else return /*html*/ `<span class="centered">&mdash;</span>`;
  }
}
