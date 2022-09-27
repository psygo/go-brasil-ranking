import { Globals as g } from "../../infra/globals";

import { RouteEnum } from "../../routing/router";

import { GameEvent, isTournamentOrLeague } from "../../models/game_event";
import { DateUtils } from "../../infra/date_utils";

export default class GameEventsTable extends HTMLElement {
  static readonly tag: string = "game-events-table";

  private getGameEvents = async (): Promise<GameEvent[]> => {
    const queryString = `?limite=${this.limit}`;
    const response = await fetch(
      `${g.apiUrl}${RouteEnum.gameEvents}${queryString}`
    );
    const json = await response.json();
    return json["data"]["gameEvents"];
  };

  constructor(
    public readonly title: string = "Eventos",
    public readonly limit: number | "max" = 20
  ) {
    super();
  }

  async connectedCallback() {
    const gameEvents = await this.getGameEvents();

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
    `;

    this.setPlayersTable(gameEvents);
  }

  private setPlayersTable = (gameEvents: GameEvent[]): void => {
    const length = gameEvents.length;
    for (let i = 0; i < length; i++) {
      const gameEvent = gameEvents[i];

      if (isTournamentOrLeague(gameEvent)) {
        const firstDate =
          gameEvent.dates.length === 0
            ? "&mdash;"
            : DateUtils.formatDate(new Date(gameEvent.dates[0]));
        let lastDate =
          gameEvent.dates.length === 1
            ? "&mdash;"
            : DateUtils.formatDate(
                new Date(gameEvent.dates[gameEvent.dates.length - 1])
              );

        this.innerHTML += /*html*/ `
          <route-link
            class="game-event-card"
            id="${gameEvent.firebaseRef}"
            href="${RouteEnum.gameEvents}/${gameEvent.firebaseRef}">
              <span>${length - i}</span>

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
    }
  };
}
