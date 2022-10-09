import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  where,
} from "firebase/firestore";

import { Globals as g } from "../../infra/globals";
import { DateUtils } from "../../infra/date_utils";
import { RouteEnum } from "../../routing/router";
import { errorLog, HtmlString } from "../../infra/utils";

import { FirebaseRef } from "../../models/firebase_models";
import { Color, GameRecord, resultString } from "../../models/game_record";

import { UiUtils } from "../ui_utils";
import UiTable from "./ui_table";

export default class GameRecordsTable extends UiTable<GameRecord> {
  static readonly tag: string = "game-records-table";

  private getAllGameRecords = async (): Promise<void> => {
    await this.firestoreQuery(
      query(
        collection(g.db, "game_records"),
        orderBy("date", "desc"),
        startAfter(this.lastVisible),
        limit(g.queryLimit)
      )
    );
  };

  private getGameRecordsFromEvent = async (): Promise<void> => {
    await this.firestoreQuery(
      query(
        collection(g.db, "game_records"),
        where("gameEventRef", "==", this.eventRef),
        orderBy("date", "desc"),
        startAfter(this.lastVisible),
        limit(g.queryLimit)
      )
    );
  };

  private getPlayersGameRecords = async (): Promise<void> => {
    // TODO1: Pagination...
    const playerIsBlack = getDocs(
      query(
        collection(g.db, "game_records"),
        where("blackRef", "==", this.playerRef1),
        where("whiteRef", "==", this.playerRef2),
        orderBy("date", "desc"),
        startAfter(this.lastVisible1),
        limit(g.queryLimit)
      )
    );
    const playerIsWhite = getDocs(
      query(
        collection(g.db, "game_records"),
        where("blackRef", "==", this.playerRef2),
        where("whiteRef", "==", this.playerRef1),
        orderBy("date", "desc"),
        startAfter(this.lastVisible2),
        limit(g.queryLimit)
      )
    );

    await this.mergeParallelQueries(playerIsBlack, playerIsWhite);
  };

  private getPlayerGameRecords = async (): Promise<void> => {
    const playerIsBlack = getDocs(
      query(
        collection(g.db, "game_records"),
        where("blackRef", "==", this.playerRef1),
        orderBy("date", "desc"),
        startAfter(this.lastVisible1),
        limit(g.queryLimit)
      )
    );
    const playerIsWhite = getDocs(
      query(
        collection(g.db, "game_records"),
        where("whiteRef", "==", this.playerRef1),
        orderBy("date", "desc"),
        startAfter(this.lastVisible2),
        limit(g.queryLimit)
      )
    );

    await this.mergeParallelQueries(playerIsBlack, playerIsWhite);
  };

  protected getData = async (): Promise<void> => {
    try {
      if (this.playerRef1 && this.playerRef2)
        await this.getPlayersGameRecords();
      else if (this.playerRef1) await this.getPlayerGameRecords();
      else if (this.eventRef) await this.getGameRecordsFromEvent();
      else await this.getAllGameRecords();
    } catch (e) {
      const error = e as Error;
      errorLog(error, "Game Records' Table");
    }
  };

  constructor(
    title: string = "Partidas",
    public readonly playerRef1: FirebaseRef = "",
    public readonly playerRef2: FirebaseRef = "",
    public readonly eventRef: FirebaseRef = ""
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
        <span>#</span>
        <span>Foto Preto</span>
        <span class="align-left">Preto</span>
        <span>País Preto</span>
        <span>Com-pensa-ção</span>
        <span>Elo</span>
        <span>Elo Dif</span>
        <span>Foto Branco</span>
        <span class="align-left">Branco</span>
        <span>País Branco</span>
        <span>Elo</span>
        <span>Elo Dif</span>
        <span>Resultado</span>
        <span>Data</span>
        <span>Evento</span>
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
            <span>${i + 1}</span>

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
            
            <span>${handicap}</span>

            <span>${gameRecord!.eloData!.atTheTimeBlackElo}</span>

            <span ${blackWins}>
              ${UiUtils.signedEloDelta(gameRecord!.eloData!.eloDeltaBlack)}
            </span>

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

            <span>${resultString(gameRecord.result)}</span>

            <span>${DateUtils.formatDate(gameDate)}</span>
            
            ${UiUtils.gameEventLink(gameRecord)}
        </route-link>
      `;
    }
  };
}
