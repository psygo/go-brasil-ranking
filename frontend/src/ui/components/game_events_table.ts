import { Globals as g } from "../../infra/globals";

import { RouteEnum } from "../../routing/router";

import { TournamentOrLeague } from "../../models/game_event";
import { DateUtils } from "../../infra/date_utils";
import UiTable from "./ui_table";
import { HtmlString } from "../../infra/utils";

export default class GameEventsTable extends UiTable<TournamentOrLeague> {
  static readonly tag: string = "game-events-table";

  protected getData = async (): Promise<void> => {
    const queryString = `?de=${this.startAfter}`;

    const response = await fetch(
      `${g.apiUrl}${RouteEnum.gameEvents}${queryString}`
    );

    const json = await response.json();
    this.data.push(...json["data"]["gameEvents"]);
  };

  constructor(title: string = "Eventos") {
    super(title);
  }

  protected get caption(): HtmlString {
    return /*html*/ `
      <h2>
        <route-link href="${RouteEnum.gameEvents}">
          ${this.title}
        </route-link>
      </h2>
    `;
  }

  protected get legend(): HtmlString {
    return /*html*/ `
      <div id="legend">
        <span>#</span>
        <span class="align-left">Nome</span>
        <span>Tipo</span>
        <span>Total de Partidas</span>
        <span>Data de Início</span>
        <span>Data de Fim</span>
      </div>
    `;
  }

  protected setCards = (): void => {
    const cardsDiv: HTMLDivElement = this.querySelector("#cards")!;
    const length = this.data.length;
    for (let i = this.startAfter; i < length; i++) {
      const gameEvent = this.data[i];

      const firstDate =
        gameEvent.dates.length === 0
          ? "&mdash;"
          : DateUtils.formatDate(new Date(gameEvent.dates[0]));
      const lastDate =
        gameEvent.dates.length === 1
          ? "&mdash;"
          : DateUtils.formatDate(
              new Date(gameEvent.dates[gameEvent.dates.length - 1])
            );

      cardsDiv.innerHTML += /*html*/ `
        <route-link
          class="card"
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
