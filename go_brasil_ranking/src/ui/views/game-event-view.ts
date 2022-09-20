import { Globals as g } from "../../infra/globals";
import { RouteEnum } from "../../routing/router";

import { FirebaseRef } from "../../models/firebase_ref";
import { GameEventLeague, GameEventTournament } from "../../models/game_event";

export default class GameEventView extends HTMLElement {
  static readonly tag: string = "game-event-view";

  private gameEvent?: GameEventTournament | GameEventLeague;

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
    }
  }

  private setGameEventPage = (): void => {
    this.innerHTML += /*html*/ `
      <h2>${this.gameEvent?.name}</h2>
    `;
  };
}
