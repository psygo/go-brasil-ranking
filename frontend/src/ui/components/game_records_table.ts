import { Globals as g } from "../../infra/globals";
import { DateUtils } from "../../infra/date_utils";
import { RouteEnum } from "../../routing/router";
import { HtmlString } from "../../infra/utils";

import { FirebaseRef } from "../../models/firebase_models";
import { Color, GameRecord, resultString } from "../../models/game_record";

import { UiUtils } from "../ui_utils";
import UiTable from "./ui_table";

export default class GameRecordsTable extends UiTable<GameRecord> {
  static readonly tag: string = "game-records-table";

  protected getData = async (): Promise<void> => {
    const queryString =
      `?de=${this.startAfter}` + `&jogadorRef=${this.playerRef}`;

    const response = await fetch(
      `${g.apiUrl}${RouteEnum.gameRecords}${queryString}`
    );

    const json = await response.json();
    this.data.push(...json["data"]["gameRecords"]);
  };

  constructor(
    title: string = "Partidas",
    public readonly playerRef: FirebaseRef = ""
  ) {
    super(title);
  }

  private get playerName(): string | null {
    if (this.playerRef) {
      const firstGame = this.data[0];
      return firstGame.blackRef === this.playerRef
        ? firstGame.blackPlayer!.name
        : firstGame.whitePlayer!.name;
    } else return null;
  }

  protected get caption(): HtmlString {
    const titleSuffix = this.playerRef ? this.playerName : "";
    return this.playerRef
      ? /*html*/ `
          <h2>
            Partidas de ${titleSuffix}
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

      const blackWins =
        gameRecord.result.whoWins === Color.Black ? "winner" : "loser";
      const whiteWins =
        gameRecord.result.whoWins === Color.White ? "winner" : "loser";

      const gameDate = new Date(gameRecord.date);

      let winOrLossAttr = "";
      if (this.playerRef)
        if (
          (blackWins === "winner" && this.playerRef === gameRecord.blackRef) ||
          (whiteWins === "winner" && this.playerRef === gameRecord.whiteRef)
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
