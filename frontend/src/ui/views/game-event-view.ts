import { doc, getDoc } from "firebase/firestore";

import { Globals as g } from "../../infra/globals";
import { DateUtils } from "../../infra/date_utils";
import { addFirebaseRef } from "../../infra/utils";

import { FirebaseRef } from "../../models/firebase_models";
import { TournamentOrLeague } from "../../models/game_event";

import GameRecordsTable from "../components/game_records_table";
import PlayersTable from "../components/players_table";

export default class GameEventView extends HTMLElement {
  static readonly tag: string = "game-event-view";

  constructor(public readonly gameEventRef: FirebaseRef) {
    super();
  }

  private declare gameEvent: TournamentOrLeague;

  private getGameEvent = async (): Promise<void> => {
    const eventDoc = await getDoc(doc(g.db, "game_events", this.gameEventRef));

    this.gameEvent = addFirebaseRef(
      eventDoc.data() as TournamentOrLeague,
      eventDoc.id
    );
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
      new PlayersTable("Participantes do Evento", false, this.gameEventRef),
      new GameRecordsTable("Partidas do Evento", "", "", this.gameEventRef)
    );
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

    gameEventCardDiv.innerHTML = /*html*/ `
      <div id="legend">
        <span>Tipo</span>
        <span>Data de Início</span>
        <span>Data de Fim</span>
        <span>Total de Partidas</span>
        <span>Total de Partici-pantes</span>
      </div>

      <div id="content">
        <span>${this.gameEvent.type}</span>
        <span>${formattedDateInit}</span>
        <span>${formattedDateEnd}</span>
        <span>${this.gameEvent.gamesTotal}</span>
        <span>${this.gameEvent.participants!.length}</span>
      </div>
    `;
  };
}
