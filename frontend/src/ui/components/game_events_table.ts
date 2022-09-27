import { Globals as g } from "../../infra/globals";

import { RouteEnum } from "../../routing/router";

import { GameEvent, isTournamentOrLeague } from "../../models/game_event";

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

  constructor(public readonly limit: number | "max" = 20) {
    super();
  }

  async connectedCallback() {
    const gameEvents = await this.getGameEvents();

    this.innerHTML += /*html*/ `
      <h2>
        <route-link href="${RouteEnum.gameEvents}">
          Eventos
        </route-link>
      </h2>
      
      <div class="game-events-table-legend">
        <span>#</span>
        <span class="align-left">Nome</span>
        <span>Total de Partidas</span>
      </div>
    `;

    this.setPlayersTable(gameEvents);
  }

  private setPlayersTable = (gameEvents: GameEvent[]): void => {
    // TODO2: Add Type of Event
    // TODO2: Add dates
    // TODO2: Decreasing IDs on the table
    for (let i = 0; i < gameEvents.length; i++) {
      const gameEvent = gameEvents[i];
      if (isTournamentOrLeague(gameEvent))
        this.innerHTML += /*html*/ `
          <route-link
            class="game-event-card"
            id="${gameEvent.firebaseRef}"
            href="${RouteEnum.gameEvents}/${gameEvent.firebaseRef}">
              <span>${i + 1}</span>

              <route-link 
                href="${RouteEnum.gameEvents}/${gameEvent.firebaseRef}">
                  <span class="align-left">${gameEvent.name}</span>
              </route-link>
              
              <span>${gameEvent.gamesTotal}</span>
          </route-link>
        `;
    }
  };
}
