import { Globals as g } from "../../infra/globals";
import { RouteEnum } from "../../routing/router";

import Elo from "../../models/elo";
import { Player } from "../../models/player";
import { UiUtils } from "../ui_utils";

export default class PlayersTable extends HTMLElement {
  static readonly tag: string = "players-table";

  private declare currentPlayer: Player;

  private getPlayers = async (): Promise<Player[]> => {
    const isBrazilian =
      this.isBrazilian === undefined ? "" : `isBrazilian=${this.isBrazilian}`;

    const response = await fetch(
      `${g.apiUrl}${RouteEnum.players}?limite=${this.limit}&${isBrazilian}`
    );

    const json = await response.json();
    return json["data"]["players"];
  };

  constructor(
    public readonly title: string = "Jogadores",
    public readonly limit: number | "max" = 20,
    public readonly isBrazilian: boolean | undefined = undefined
  ) {
    super();
  }

  async connectedCallback() {
    const players = await this.getPlayers();

    this.innerHTML += /*html*/ `
      <h2>
        <route-link href="${RouteEnum.players}">
          ${this.title}
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
        <route-link 
          class="player-card" 
          id="${this.currentPlayer.firebaseRef}"
          href="${RouteEnum.players}/${this.currentPlayer.firebaseRef}">
            <span>${i}</span>
            
            <span>${UiUtils.playerPicture(player.picture)}</span>

            <route-link 
              href="${RouteEnum.players}/${this.currentPlayer.firebaseRef}">
                <span class="align-left">${this.currentPlayer.name}</span>
            </route-link>

            <div>
              ${UiUtils.allFlags(this.currentPlayer.countries)}
            </div>

            <span>${elo.num}</span>

            <span>${elo.danKyuLevel()}</span>
            
            ${UiUtils.lastGameLink(this.currentPlayer)}
            
            <span>${player.gamesTotal}</span>
        </route-link>
      `;
    }
  };

}
