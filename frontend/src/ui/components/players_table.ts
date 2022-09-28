import { Globals as g } from "../../infra/globals";
import { RouteEnum } from "../../routing/router";

import Elo from "../../models/elo";
import { Player } from "../../models/player";
import { UiUtils } from "../ui_utils";
import { paginationSlicer } from "../../infra/utils";

export default class PlayersTable extends HTMLElement {
  static readonly tag: string = "players-table";

  private getPlayers = async (): Promise<void> => {
    const isBrazilian =
      this.isBrazilian === undefined ? "" : `isBrazilian=${this.isBrazilian}`;

    const queryString = `?de=${this.startAfter}&${isBrazilian}`;

    const response = await fetch(
      `${g.apiUrl}${RouteEnum.players}${queryString}`
    );

    const json = await response.json();
    this.players.push(...json["data"]["players"]);
  };

  private startAfter: number = 0;
  private readonly players: Player[] = [];

  constructor(
    public readonly title: string = "Jogadores",
    public readonly isBrazilian: boolean | undefined = undefined
  ) {
    super();
  }

  async connectedCallback() {
    await this.getPlayers();

    this.innerHTML += /*html*/ `
      <h2>
        <route-link href="${RouteEnum.players}">
          ${this.title}
        </route-link>
      </h2>
      
      <div id="players-table-legend">
        <span>#</span>
        <span>Foto</span>
        <span class="align-left">Nome</span>
        <span>País</span>
        <span>Elo</span>
        <span>Dan Kyu</span>
        <span>Data da Última Partida</span>
        <span>Número de Partidas</span>
      </div>

      <div id="players-table-cards"></div>

      <div class="pagination"></div>
    `;

    this.setCards();

    this.setPagination();

    const nextPageButton: HTMLButtonElement =
      this.querySelector("button.next-page")!;
    nextPageButton.click();
  }

  private setPagination = (): void => {
    const paginationDiv: HTMLDivElement = this.querySelector(".pagination")!;

    paginationDiv.innerHTML += /*html*/ `
      <button class="next-page">+ Jogadores</button>
    `;

    const nextPageButton: HTMLButtonElement =
      this.querySelector("button.next-page")!;

    nextPageButton.onclick = async (): Promise<void> => {
      this.startAfter += g.queryLimit;

      await this.getPlayers();

      this.setCards();
    };
  };

  private i: number = 0;
  private lastElo: number = -10000;

  private setCards = (): void => {
    const cardsDiv: HTMLDivElement = this.querySelector(
      "#players-table-cards"
    )!;
    const slicedPlayers = paginationSlicer(this.startAfter, this.players);
    for (const player of slicedPlayers) {
      if (player.elo !== this.lastElo) {
        this.i++;
        this.lastElo = player.elo;
      }

      const elo = new Elo(player.elo);

      cardsDiv.innerHTML += /*html*/ `
        <route-link 
          class="player-card" 
          id="${player.firebaseRef}"
          href="${RouteEnum.players}/${player.firebaseRef}">
            <span>${this.i}</span>
            
            <span>${UiUtils.playerPicture(player.picture)}</span>

            <route-link 
              href="${RouteEnum.players}/${player.firebaseRef}">
                <span class="align-left">${player.name}</span>
            </route-link>

            <div>
              ${UiUtils.allFlags(player.countries)}
            </div>

            <span>${elo.num}</span>

            <span>${elo.danKyuLevel()}</span>
            
            ${UiUtils.lastGameLink(player)}
            
            <span>${player.gamesTotal}</span>
        </route-link>
      `;
    }
  };
}
