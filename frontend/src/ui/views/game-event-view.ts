import { Globals as g } from "../../infra/globals";
import { RouteEnum } from "../../routing/router";

import { FirebaseRef } from "../../models/firebase_models";
import { TournamentOrLeague } from "../../models/game_event";
import { DateUtils } from "../../infra/date_utils";
import GameRecordsTable from "../components/game_records_table";

export default class GameEventView extends HTMLElement {
  static readonly tag: string = "game-event-view";

  constructor(public readonly gameEventRef: FirebaseRef) {
    super();
  }

  private declare gameEvent: TournamentOrLeague;

  private getGameEvent = async (): Promise<void> => {
    const response = await fetch(
      `${g.apiUrl}${RouteEnum.gameEvents}/${this.gameEventRef}`
    );
    const json = await response.json();
    this.gameEvent = json["data"]["gameEvent"];
  };

  async connectedCallback(): Promise<void> {
    document.title = "Evento";

    this.prepareGameEventPage();

    await this.getGameEvent();

    if (this.gameEvent) {
      document.title = `Evento | ${this.gameEvent.name}`;

      this.setGameEventPage();
    }
  }

  private prepareGameEventPage = (): void => {
    this.innerHTML = /*html*/ `
      <div id="event-name"></div>

      <div id="card"></div>
    `;
  };

  private setGameEventPage = (): void => {
    this.setGameEventName();
    this.setGameEventCard();

    this.append(
      new GameRecordsTable("Partidas do Evento", "", "", this.gameEventRef)
    );

    // TODO2: Add game records table with the games from the tournament
  };

  private setGameEventName = (): void => {
    const gameEventNameDiv: HTMLDivElement = this.querySelector("#event-name")!;

    gameEventNameDiv.innerHTML = /*html*/ `
      <h2>${this.gameEvent.name}</h2>
    `;
  };

  private setGameEventCard = (): void => {
    const gameEventCardDiv: HTMLDivElement = this.querySelector("#card")!;

    const dateLength = this.gameEvent.dates.length;
    const formattedDateInit = DateUtils.formatDate(
      new Date(this.gameEvent.dates[0])
    );
    const formattedDateEnd = DateUtils.formatDate(
      new Date(this.gameEvent.dates[dateLength - 1])
    );

    // TODO2: Add total of participants

    gameEventCardDiv.innerHTML = /*html*/ `
      <div id="legend">
        <span>Tipo</span>
        <span>Data de Início</span>
        <span>Data de Fim</span>
        <span>Total de Partidas</span>
      </div>

      <div id="content">
        <span>${this.gameEvent.type}</span>
        <span>${formattedDateInit}</span>
        <span>${formattedDateEnd}</span>
        <span>${this.gameEvent.gamesTotal}</span>
      </div>
    `;
  };
}
