import { Globals as g } from "../../infra/globals";
import { RouteEnum } from "../../routing/router";

import Elo from "../../models/elo";
import { FirebaseRef } from "../../models/firebase_models";
import { Player } from "../../models/player";

import GameRecordsTable from "../components/game_records_table";
import { UiUtils } from "../utils";

export default class PlayerView extends HTMLElement {
  static readonly tag: string = "player-view";

  constructor(public readonly playerRef: FirebaseRef) {
    super();
  }

  private getPlayer = async (): Promise<Player> => {
    const response = await fetch(
      `${g.apiUrl}${RouteEnum.players}/${this.playerRef}`
    );
    const json = await response.json();
    return json["data"]["player"];
  };

  private declare player: Player;

  async connectedCallback() {
    this.player = await this.getPlayer();

    document.title = `Jogador | ${this.player.name}`;

    this.setPlayersPage();

    this.appendChild(new GameRecordsTable("max", this.playerRef));
  }

  private setPlayersPage = (): void => {
    const countryFlags = UiUtils.allFlags(this.player.countries);

    this.innerHTML += /*html*/ `
      <div id="name">
        <img src="${this.player.picture}"/>
        <h1>${this.player.name} ${countryFlags}</h1>
      </div>
    `;

    this.setPlayerCard();
  };

  private setPlayerCard = (): void => {
    const elo = new Elo(this.player.elo);

    this.innerHTML += /*html*/ `
      <div id="player-personal-card">
        <div id="player-personal-card-legend">
          <span>Elo</span>
          <span>Dan Kyu</span>
          <span>Número de Partidas</span>
          <span>Data da Última Partida</span>
        </div>

        <div id="player-personal-card-content">
          <span>${elo.num}</span>
          <span>${elo.danKyuLevel(true)}</span>
          <span>${this.player.gamesTotal}</span>
          <span>${UiUtils.lastGameLink(this.player)}</span>
        </div>
      </div>
    `;
  };
}
