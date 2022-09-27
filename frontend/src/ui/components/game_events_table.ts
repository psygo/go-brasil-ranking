import { Globals as g } from "../../infra/globals";

import { RouteEnum } from "../../routing/router";

import { TournamentOrLeague } from "../../models/game_event";
import { DateUtils } from "../../infra/date_utils";

export default class GameEventsTable extends HTMLElement {
  static readonly tag: string = "game-events-table";

  private getGameEvents = async (): Promise<void> => {
    const queryString = `?de=${this.startAfter}`;

    const response = await fetch(
      `${g.apiUrl}${RouteEnum.gameEvents}${queryString}`
    );

    const json = await response.json();
    this.gameEvents.push(...json["data"]["gameEvents"]);
  };

  private readonly gameEvents: TournamentOrLeague[] = [];
  private startAfter: number = 0;

  constructor(public readonly title: string = "Eventos") {
    super();
  }

  async connectedCallback() {
    await this.getGameEvents();

    this.innerHTML += /*html*/ `
      <h2>
        <route-link href="${RouteEnum.gameEvents}">
          ${this.title}
        </route-link>
      </h2>
      
      <div class="game-events-table-legend">
        <span>#</span>
        <span class="align-left">Nome</span>
        <span>Tipo</span>
        <span>Total de Partidas</span>
        <span>Data de Início</span>
        <span>Data de Fim</span>
      </div>

      <div id="game-events-table-cards"></div>

      <div class="pagination"></div>
    `;

    this.setCards();

    this.setPagination();
  }

  private setPagination = (): void => {
    const paginationDiv: HTMLDivElement = this.querySelector(".pagination")!;

    paginationDiv.innerHTML += /*html*/ `
      <button class="next-page">+ ${g.queryLimit} Eventos</button>
    `;

    const nextPageButton: HTMLButtonElement =
      this.querySelector("button.next-page")!;

    nextPageButton.onclick = async (): Promise<void> => {
      this.startAfter += g.queryLimit;

      await this.getGameEvents();

      this.setCards();
    };
  };

  private setCards = (): void => {
    const cardsDiv: HTMLDivElement = this.querySelector(
      "#game-events-table-cards"
    )!;
    const length = this.gameEvents.length;
    for (let i = this.startAfter; i < length; i++) {
      const gameEvent = this.gameEvents[i];

      const firstDate =
        gameEvent.dates.length === 0
          ? "&mdash;"
          : DateUtils.formatDate(new Date(gameEvent.dates[0]));
      const lastDate =
        gameEvent.dates.length === 1
          ? "&mdash;"
          : DateUtils.formatDate(new Date(gameEvent.dates[length - 1]));

      cardsDiv.innerHTML += /*html*/ `
        <route-link
          class="game-event-card"
          id="${gameEvent.firebaseRef}"
          href="${RouteEnum.gameEvents}/${gameEvent.firebaseRef}">
            <span>${i + 1}</span>

            <route-link 
              href="${RouteEnum.gameEvents}/${gameEvent.firebaseRef}">
                <span class="align-left">${gameEvent.name}</span>
            </route-link>
            
            <span>${gameEvent.type}</span>
            
            <span>${gameEvent.gamesTotal}</span>
            
            <span>${firstDate}</span>

            <span>${lastDate}</span>
        </route-link>
      `;
    }
  };
}
