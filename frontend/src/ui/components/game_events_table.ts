import {
  collection,
  limit,
  orderBy,
  query,
  startAfter,
  where,
} from "firebase/firestore";

import { db, queryLimit } from "../../infra/globals";

import { RouteEnum } from "../../routing/router";

import { TournamentOrLeague } from "../../models/game_event";
import { DateUtils } from "../../infra/date_utils";
import UiTable from "./ui_table";
import { tableErrorLog, HtmlString } from "../../infra/utils";

export default class GameEventsTable extends UiTable<TournamentOrLeague> {
  static readonly tag: string = "game-events-table";

  private getAllGameEvents = async (): Promise<void> => {
    await this.firestoreQuery(
      query(
        collection(db, "game_events"),
        orderBy("firstDate", "desc"),
        startAfter(this.lastVisible),
        limit(queryLimit)
      )
    );
  };

  private getGameEventNameSearch = async (): Promise<void> => {
    await this.firestoreQuery(
      query(
        collection(db, "game_events"),
        where(
          "searchableName",
          "array-contains",
          this.gameEventNameSearch.toLowerCase()
        ),
        orderBy("name", "desc"),
        startAfter(this.lastVisible),
        limit(queryLimit)
      )
    );
  };

  protected getData = async (): Promise<void> => {
    try {
      if (this.gameEventNameSearch) await this.getGameEventNameSearch();
      else await this.getAllGameEvents();
    } catch (e) {
      const error = e as Error;
      tableErrorLog(error, "Game Events' Table");
    }
  };

  constructor(
    title: string = "Eventos",
    public readonly gameEventNameSearch: string = ""
  ) {
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
        <span class="non-mobile">Total de Partidas</span>
        <span>Data de Início</span>
        <span class="non-mobile">Data de Fim</span>
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
            
            <span class="non-mobile">${gameEvent.gamesTotal}</span>
            
            <span>${firstDate}</span>

            <span class="non-mobile">${lastDate}</span>
        </route-link>
      `;
    }
  };
}
