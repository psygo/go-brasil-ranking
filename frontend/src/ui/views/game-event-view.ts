import { Globals as g } from "../../infra/globals";
import { RouteEnum } from "../../routing/router";

import { FirebaseRef } from "../../models/firebase_models";
import {
  GameEventLeague,
  GameEventTournament,
  GameEventTypes,
} from "../../models/game_event";
import { DateUtils } from "../../infra/date_utils";

export default class GameEventView extends HTMLElement {
  static readonly tag: string = "game-event-view";

  private declare gameEvent: GameEventTournament | GameEventLeague;

  constructor(public readonly gameEventRef: FirebaseRef) {
    super();
  }

  private getGameEvent = async (): Promise<void> => {
    const response = await fetch(
      `${g.apiUrl}${RouteEnum.gameEvents}/${this.gameEventRef}`
    );
    const json = await response.json();
    this.gameEvent = json["data"]["gameEvent"];
  };

  async connectedCallback() {
    await this.getGameEvent();

    if (this.gameEvent) {
      document.title = `Evento | ${this.gameEvent.name}`;

      this.setGameEventPage();

      // TODO2: Add players table with the participants
      // TODO2: Add game records table with the games from the tournament
    }
  }

  private setGameEventPage = (): void => {
    this.innerHTML += /*html*/ `
      <h2>${this.gameEvent.name}</h2>
    `;

    if (this.gameEvent.type === GameEventTypes.tournament) {
      this.innerHTML += /*html*/ `
        <h4>Dias</h4>
      `;

      const dates = this.gameEvent.dates;

      for (let i = 0; i < dates.length; i++) {
        const date = new Date(dates[i]);
        this.innerHTML += /*html*/ `
          <p>${DateUtils.formatDate(date)}</p>
        `;
      }
    } else if (this.gameEvent.type === GameEventTypes.league) {
      const dateInit = DateUtils.formatDate(new Date(this.gameEvent.dateInit));
      let dateEnd;
      if (this.gameEvent.dateEnd) dateEnd = new Date(this.gameEvent.dateEnd);

      const dateEndFormatted = dateEnd ? DateUtils.formatDate(dateEnd) : "";

      dateEnd = this.innerHTML += /*html*/ `
        <h4>Data de Início: ${dateInit}</h4>
        <h4>Data de Fim: ${dateEndFormatted}</h4>
      `;
    }
  };
}
