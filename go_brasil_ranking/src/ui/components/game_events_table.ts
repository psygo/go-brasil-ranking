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
      <h2>Eventos</h2>
      
      <div class="game-events-table-legend">
        <span>#</span>
        <span>Nome</span>
      </div>
    `;

    this.setPlayersTable(gameEvents);
  }

  private setPlayersTable = (gameEvents: GameEvent[]): void => {
    for (let i = 0; i < gameEvents.length; i++) {
      const gameEvent = gameEvents[i];
      if (isTournamentOrLeague(gameEvent))
        this.innerHTML += /*html*/ `
          <div class="game-event-card" id="${gameEvent.firebaseRef}">
            <route-link href="${RouteEnum.gameEvents}/${gameEvent.firebaseRef}">
              <span>${i + 1}</span>

              <route-link 
                class="game-event-name"
                href="${RouteEnum.gameEvents}/${gameEvent.firebaseRef}">
                  <span>${gameEvent.name}</span>
              </route-link>
            </route-link>
          </div>
        `;
    }
  };
}
