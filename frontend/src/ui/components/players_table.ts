import {
  startAfter,
  collection,
  orderBy,
  query,
  limit,
  where,
  getDoc,
  doc,
  getDocs,
  documentId,
} from "firebase/firestore";

import { db, queryLimit } from "../../infra/globals";
import { RouteEnum } from "../../routing/router";
import {
  tableErrorLog,
  HtmlString,
  inf,
  mapDocsWithFirebaseRef,
  paginationSlicer,
} from "../../infra/utils";

import Elo from "../../models/elo";
import { FirebaseRef } from "../../models/firebase_models";
import { Player } from "../../models/player";
import { TournamentOrLeague } from "../../models/game_event";

import { UiUtils } from "../ui_utils";
import UiTable from "./ui_table";

export default class PlayersTable extends UiTable<Player> {
  static readonly tag: string = "players-table";

  private getAllPlayers = async (): Promise<void> => {
    await this.firestoreQuery(
      query(
        collection(db, "players"),
        orderBy("currentElo", "desc"),
        startAfter(this.lastVisible),
        limit(queryLimit)
      )
    );
  };

  private getOnlyBrazilians = async (): Promise<void> => {
    await this.firestoreQuery(
      query(
        collection(db, "players"),
        where("isBrazilian", "==", true),
        orderBy("currentElo", "desc"),
        startAfter(this.lastVisible),
        limit(queryLimit)
      )
    );
  };

  private getFromEvent = async (): Promise<void> => {
    const eventDoc = await getDoc(doc(db, "game_events", this.eventRef));
    const event = eventDoc.data() as TournamentOrLeague;
    this.gameEvent = event;

    const playersRefs = event.finalOrderingRefs
      ? event.finalOrderingRefs
      : event.participants!;

    const paginatedPlayersRefs: FirebaseRef[] = playersRefs.slice(
      this.startAfter,
      this.startAfter + queryLimit
    );

    const playersDocs = await getDocs(
      query(
        collection(db, "players"),
        where(documentId(), "in", paginatedPlayersRefs)
      )
    );

    this.lastVisibleRef = paginatedPlayersRefs[queryLimit - 1];

    const players = mapDocsWithFirebaseRef<Player>(playersDocs.docs);

    let orderedPlayers = [];
    for (const ref of paginatedPlayersRefs) {
      const player = players.find((p) => p.firebaseRef === ref)!;
      orderedPlayers.push(player);
    }

    this.data.push(...orderedPlayers);
  };

  private declare gameEvent: TournamentOrLeague;
  private declare lastVisibleRef: FirebaseRef;

  private getPlayerNameSearch = async (): Promise<void> => {
    await this.firestoreQuery(
      query(
        collection(db, "players"),
        where("name", "<=", this.playerNameSearch + "\uf8ff"),
        where("name", ">=", this.playerNameSearch),
        orderBy("name", "asc"),
        startAfter(this.lastVisible),
        limit(queryLimit)
      )
    );
  };

  protected getData = async (): Promise<void> => {
    try {
      if (this.playerNameSearch) await this.getPlayerNameSearch();
      else if (this.eventRef) await this.getFromEvent();
      else if (this.onlyBrazilians) await this.getOnlyBrazilians();
      else await this.getAllPlayers();
    } catch (e) {
      const error = e as Error;
      tableErrorLog(error, "Players' Table");
    }
  };

  constructor(
    title: string = "Jogadores",
    public readonly onlyBrazilians: boolean = false,
    public readonly eventRef: FirebaseRef = "",
    public readonly playerNameSearch: string = ""
  ) {
    super(title);
  }

  async connectedCallback(): Promise<void> {
    await super.connectedCallback();

    const nextButton: HTMLButtonElement = this.querySelector(".next-page")!;
    nextButton.click();
  }

  protected get caption(): HtmlString {
    return this.gameEvent?.finalOrderingRefs
      ? /*html*/ `<h2>Colocação Final</h2>`
      : /*html*/ `
        <h2>
          <route-link href="${RouteEnum.players}">
            ${this.title}
          </route-link>
        </h2>
      `;
  }

  protected get legend(): HtmlString {
    return /*html*/ `
      <div id="legend">
        <span>#</span>
        <span>Foto</span>
        <span class="align-left">Nome</span>
        <span>País</span>
        <span>Elo</span>
        <span>Dan Kyu</span>
        <span>Data da Última Partida</span>
        <span>Número de Partidas</span>
      </div>
    `;
  }

  private i: number = 0;
  private lastElo: number = -inf;

  protected setCards = (): void => {
    const cardsDiv: HTMLDivElement = this.querySelector("#cards")!;
    const slicedPlayers = paginationSlicer(this.startAfter, this.data);
    for (const player of slicedPlayers) {
      if (player.currentElo! !== this.lastElo) {
        this.i++;
        this.lastElo = player.currentElo!;
      }

      const elo = new Elo(player.currentElo!);

      cardsDiv.innerHTML += /*html*/ `
        <route-link 
          class="card" 
          id="${player.firebaseRef}"
          href="${RouteEnum.players}/${player.firebaseRef}">
            <span>${this.i}</span>
            
            <span>${UiUtils.playerPicture(player.picture)}</span>

            <route-link 
              href="${RouteEnum.players}/${player.firebaseRef}">
                <span class="align-left">${player.name}</span>
            </route-link>

            <div>
              ${UiUtils.allFlags(player.countries)}
            </div>

            <span>${elo.num}</span>

            <span>${elo.danKyuLevel()}</span>
            
            ${UiUtils.lastGameLink(player)}
            
            <span>${player.gamesTotal}</span>
        </route-link>
      `;
    }
  };
}
