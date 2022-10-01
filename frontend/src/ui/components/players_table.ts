import { Globals as g } from "../../infra/globals";
import { RouteEnum } from "../../routing/router";

import Elo from "../../models/elo";
import { Player } from "../../models/player";
import { UiUtils } from "../ui_utils";
import { paginationSlicer } from "../../infra/utils";
import UiTable from "./ui_table";

export default class PlayersTable extends UiTable<Player> {
  static readonly tag: string = "players-table";

  protected getData = async (): Promise<void> => {
    const isBrazilian =
      this.isBrazilian === undefined ? "" : `isBrazilian=${this.isBrazilian}`;

    const queryString = `?de=${this.startAfter}&${isBrazilian}`;

    const response = await fetch(
      `${g.apiUrl}${RouteEnum.players}${queryString}`
    );

    const json = await response.json();
    this.data.push(...json["data"]["players"]);
  };

  constructor(
    title: string = "Jogadores",
    public readonly isBrazilian: boolean | undefined = undefined
  ) {
    super(title);
  }

  async connectedCallback(): Promise<void> {
    await super.connectedCallback();

    const nextButton: HTMLButtonElement = this.querySelector("next-page")!;
    nextButton.click();
  }

  protected prepareTable = (): void => {
    this.innerHTML += /*html*/ `
      <h2>
        <route-link href="${RouteEnum.players}">
          ${this.title}
        </route-link>
      </h2>
      
      <div id="legend">
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

    this.addHtmlCardLoaderPaginationDivs();
  };

  private i: number = 0;
  private lastElo: number = -10000;

  protected setCards = (): void => {
    const cardsDiv: HTMLDivElement = this.querySelector("#cards")!;
    const slicedPlayers = paginationSlicer(this.startAfter, this.data);
    for (const player of slicedPlayers) {
      if (player.elo !== this.lastElo) {
        this.i++;
        this.lastElo = player.elo;
      }

      const elo = new Elo(player.elo);

      cardsDiv.innerHTML += /*html*/ `
        <route-link 
          class="card" 
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
