import {
  collection,
  DocumentData,
  getDocs,
  limit,
  orderBy,
  query,
  QueryDocumentSnapshot,
  QuerySnapshot,
  startAfter,
  where,
} from "firebase/firestore";

import { dayInMs, db, queryLimit } from "../../infra/globals";
import { DateUtils } from "../../infra/date_utils";
import { RouteEnum } from "../../routing/router";
import {
  dateSorter,
  tableErrorLog,
  HtmlString,
  mapDocsWithFirebaseRef,
} from "../../infra/utils";

import { FirebaseRef } from "../../models/firebase_models";
import { Color, GameRecord, resultString } from "../../models/game_record";

import { UiUtils } from "../ui_utils";
import UiTable from "./ui_table";

export default class GameRecordsTable extends UiTable<GameRecord> {
  static readonly tag: string = "game-records-table";

  private getAllGameRecords = async (): Promise<void> => {
    await this.firestoreQuery(
      query(
        collection(db, "game_records"),
        orderBy("date", "desc"),
        startAfter(this.lastVisible),
        limit(queryLimit)
      )
    );
  };

  private getGameRecordsFromEvent = async (): Promise<void> => {
    await this.firestoreQuery(
      query(
        collection(db, "game_records"),
        where("gameEventRef", "==", this.eventRef),
        orderBy("date", "desc"),
        startAfter(this.lastVisible),
        limit(queryLimit)
      )
    );
  };

  private getPlayersGameRecords = async (): Promise<void> => {
    const playerIsBlack = getDocs(
      query(
        collection(db, "game_records"),
        where("blackRef", "==", this.playerRef1),
        where("whiteRef", "==", this.playerRef2),
        orderBy("date", "desc"),
        startAfter(this.lastVisible1),
        limit(queryLimit)
      )
    );
    const playerIsWhite = getDocs(
      query(
        collection(db, "game_records"),
        where("blackRef", "==", this.playerRef2),
        where("whiteRef", "==", this.playerRef1),
        orderBy("date", "desc"),
        startAfter(this.lastVisible2),
        limit(queryLimit)
      )
    );

    await this.mergeParallelQueries(playerIsBlack, playerIsWhite);
  };

  private mergeParallelQueries = async (
    q1: Promise<QuerySnapshot<DocumentData>>,
    q2: Promise<QuerySnapshot<DocumentData>>
  ): Promise<void> => {
    const [snapsAsBlack, snapsAsWhite] = await Promise.all([q1, q2]);

    const [gameRecordsAsBlack, gameRecordsAsWhite] = [
      mapDocsWithFirebaseRef<GameRecord>(snapsAsBlack.docs),
      mapDocsWithFirebaseRef<GameRecord>(snapsAsWhite.docs),
    ];

    const allGames = [...gameRecordsAsBlack, ...gameRecordsAsWhite];

    allGames.sort((g1, g2) => dateSorter(g1, g2, true));

    const slicedGames = allGames.slice(0, 5);

    slicedGames.reverse();

    for (const docBlack of snapsAsBlack.docs)
      for (const g of slicedGames)
        if (docBlack.id === g.firebaseRef) this._lastVisible1 = docBlack;
    for (const docWhite of snapsAsWhite.docs)
      for (const g of slicedGames)
        if (docWhite.id === g.firebaseRef) this._lastVisible2 = docWhite;

    slicedGames.reverse();

    this.data.push(...slicedGames);
  };

  private declare _lastVisible1: QueryDocumentSnapshot<DocumentData>;
  private declare _lastVisible2: QueryDocumentSnapshot<DocumentData>;

  private get lastVisible1(): QueryDocumentSnapshot<DocumentData> | {} {
    return this._lastVisible1 ? this._lastVisible2 : {};
  }
  private get lastVisible2(): QueryDocumentSnapshot<DocumentData> | {} {
    return this._lastVisible2 ? this._lastVisible2 : {};
  }

  private getPlayerGameRecords = async (): Promise<void> => {
    const playerIsBlack = getDocs(
      query(
        collection(db, "game_records"),
        where("blackRef", "==", this.playerRef1),
        orderBy("date", "desc"),
        startAfter(this.lastVisible1),
        limit(queryLimit)
      )
    );
    const playerIsWhite = getDocs(
      query(
        collection(db, "game_records"),
        where("whiteRef", "==", this.playerRef1),
        orderBy("date", "desc"),
        startAfter(this.lastVisible2),
        limit(queryLimit)
      )
    );

    await this.mergeParallelQueries(playerIsBlack, playerIsWhite);
  };

  private getGameRecordsFromDate = async (): Promise<void> => {
    console.log(this.date!.getTime());
    await this.firestoreQuery(
      query(
        collection(db, "game_records"),
        where("date", ">=", this.date!.getTime() - dayInMs),
        where("date", "<=", this.date!.getTime() + dayInMs),
        orderBy("date", "desc"),
        startAfter(this.lastVisible),
        limit(queryLimit)
      )
    );
  };

  protected getData = async (): Promise<void> => {
    try {
      if (this.date) await this.getGameRecordsFromDate();
      else if (this.playerRef1 && this.playerRef2)
        await this.getPlayersGameRecords();
      else if (this.playerRef1) await this.getPlayerGameRecords();
      else if (this.eventRef) await this.getGameRecordsFromEvent();
      else await this.getAllGameRecords();
    } catch (e) {
      const error = e as Error;
      tableErrorLog(error, "Game Records' Table");
    }
  };

  constructor(
    title: string = "Partidas",
    public readonly playerRef1: FirebaseRef = "",
    public readonly playerRef2: FirebaseRef = "",
    public readonly eventRef: FirebaseRef = "",
    public readonly date?: Date
  ) {
    super(title);
  }

  private playerName(firebaseRef: FirebaseRef): string | null {
    if (firebaseRef) {
      const firstGame = this.data[0];
      return firstGame.blackRef === firebaseRef
        ? firstGame.blackPlayer!.name
        : firstGame.whitePlayer!.name;
    } else return null;
  }

  protected get caption(): HtmlString {
    const player1Name = this.playerName(this.playerRef1);
    const player2Name = this.playerName(this.playerRef2);
    return this.playerRef1 && this.playerRef2
      ? /*html*/ `
        <h2>
          Todas as Partidas entre ${player1Name} e ${player2Name}
        </h2>
      `
      : this.playerRef1
      ? /*html*/ `
        <h2>
          Todas Partidas de ${this.playerName(this.playerRef1)}
        </h2>
      `
      : this.eventRef
      ? /*html*/ `<h2>${this.title}</h2>`
      : /*html*/ `
        <h2>
          <route-link href="${RouteEnum.gameRecords}">
            ${this.title}
          </route-link>
        </h2>
      `;
  }

  protected get legend(): HtmlString {
    return /*html*/ `
      <div id="legend">
        <span class="non-mobile">#</span>
        <div class="player">
          <span>Foto Preto</span>
          <span class="align-left">Preto</span>
          <span>País Preto</span>
          <span>Elo</span>
          <span>Elo Dif</span>
        </div>
        <div class="player">
          <span>Foto Branco</span>
          <span class="align-left">Branco</span>
          <span>País Branco</span>
          <span>Elo</span>
          <span>Elo Dif</span>
        </div>
        <div class="meta">
          <span class="non-mobile">Com-pensa-ção</span>
          <span>Resultado</span>
          <span>Data</span>
          <span>Evento</span>
        </div>
      </div>
    `;
  }

  protected setCards = (): void => {
    const cardsDiv: HTMLDivElement = this.querySelector("#cards")!;
    const length = this.data.length;
    for (let i = this.startAfter; i < length; i++) {
      const gameRecord = this.data[i];

      const [blackWins, whiteWins] = [
        gameRecord.result.whoWins === Color.Black ? "winner" : "loser",
        gameRecord.result.whoWins === Color.White ? "winner" : "loser",
      ];

      const gameDate = new Date(gameRecord.date);

      let winOrLossAttr = "";
      if (this.playerRef1 && !this.playerRef2)
        if (
          (blackWins === "winner" && this.playerRef1 === gameRecord.blackRef) ||
          (whiteWins === "winner" && this.playerRef1 === gameRecord.whiteRef)
        )
          winOrLossAttr = "player-wins";
        else winOrLossAttr = "player-loses";

      const handicap = gameRecord.handicap ? gameRecord.handicap : "0";

      cardsDiv.innerHTML += /*html*/ `
        <route-link 
          class="card"
          id="${gameRecord.firebaseRef}"
          href="${RouteEnum.gameRecords}/${gameRecord.firebaseRef}"
          ${winOrLossAttr}>
            <span class="non-mobile">${i + 1}</span>

            <div class="player">
              <span>
                ${UiUtils.playerPicture(gameRecord.blackPlayer!.picture)}
              </span>

              <route-link href="${RouteEnum.players}/${gameRecord.blackRef}">
                <span ${blackWins} class="align-left">
                  ${gameRecord.blackPlayer!.name}
                </span>
              </route-link>

              <div>
                ${UiUtils.allFlags(gameRecord.blackPlayer!.countries)}
              </div>

              <span>${gameRecord!.eloData!.atTheTimeBlackElo}</span>

              <span ${blackWins}>
                ${UiUtils.signedEloDelta(gameRecord!.eloData!.eloDeltaBlack)}
              </span>
            </div>

            <div class="player">
              <span>
                ${UiUtils.playerPicture(gameRecord.whitePlayer!.picture)}
              </span>

              <route-link href="${RouteEnum.players}/${gameRecord.whiteRef}">
                <span ${whiteWins} class="align-left">
                  ${gameRecord.whitePlayer!.name}
                </span>
              </route-link>

              <div>
                ${UiUtils.allFlags(gameRecord.whitePlayer!.countries)}
              </div>

              <span>${gameRecord!.eloData!.atTheTimeWhiteElo}</span>

              <span ${whiteWins}>
                ${UiUtils.signedEloDelta(gameRecord!.eloData!.eloDeltaWhite)}
              </span>
            </div>

            <div class="meta">
              <span class="non-mobile">${handicap}</span>

              <span class="who-wins">${resultString(gameRecord.result)}</span>

              <span>${DateUtils.formatDate(gameDate)}</span>
              
              ${UiUtils.gameEventLink(gameRecord)}
            </div>
        </route-link>
      `;
    }
  };
}
