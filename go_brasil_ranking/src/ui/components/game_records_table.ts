import { Globals as g } from "../../infra/globals";
import { DateUtils } from "../../infra/date_utils";
import { RouteEnum } from "../../routing/router";

import { FirebaseRef } from "../../models/firebase_ref";
import { Color, GameRecord, resultString } from "../../models/game_record";
import { isTournamentOrLeague } from "../../models/game_event";

export default class GameRecordsTable extends HTMLElement {
  static readonly tag: string = "game-records-table";

  private getGameRecords = async (): Promise<GameRecord[]> => {
    const p = this.playerRef ? this.playerRef : "";
    const queryString = `?limit=${this.limit}&playerRef=${p}`;

    const response = await fetch(
      `${g.apiUrl}${RouteEnum.gameRecords}${queryString}`
    );

    const json = await response.json();
    return json["data"]["gameRecords"];
  };

  constructor(
    public readonly limit: number | "max" = 20,
    public readonly playerRef: FirebaseRef = ""
  ) {
    super();
  }

  async connectedCallback() {
    const gameRecords = await this.getGameRecords();

    this.innerHTML = /*html*/ `
      <h2>Partidas</h2>

      <div class="game-records-table-legend">
        <span>#</span>
        <span>Preto</span>
        <span class="centered">Elo</span>
        <div>
          <p>Elo</span>
          <p>Dif</span>
        </div>
        <span>Branco</span>
        <span class="centered">Elo</span>
        <div>
          <span>Elo</span>
          <span>Dif</span>
        </div>
        <span>Resultado</span>
        <span class="centered">Data</span>
        <span class="centered">Evento</span>
      </div>
    `;

    this.setGameRecordsTable(gameRecords);
  }

  setGameRecordsTable = (gameRecords: GameRecord[]): void => {
    for (let i = gameRecords.length - 1; i >= 0; i--) {
      const gameRecord = gameRecords[i];

      const blackWins =
        gameRecord.result.whoWins === Color.Black ? "winner" : "loser";
      const whiteWins =
        gameRecord.result.whoWins === Color.White ? "winner" : "loser";

      const gameDate = new Date(gameRecord.date);

      let gameEvent = gameRecord.gameEvent?.type.toString();
      let gameEventLink = /*html*/ `<span class="centered">${gameEvent}</span>`;
      if (gameRecord.gameEvent && isTournamentOrLeague(gameRecord.gameEvent)) {
        gameEvent = gameRecord.gameEvent.name;
        gameEventLink = /*html*/ `
          <route-link 
            class="centered" 
            href="${RouteEnum.gameEvents}/${gameRecord.gameEventRef}">
              <span>${gameRecord.gameEvent.name}</span>
          </route-link>
        `;
      }

      this.innerHTML += /*html*/ `
        <div class="game-record-card" id="${gameRecord.firebaseRef}">
          <route-link href="${RouteEnum.gameRecords}/${gameRecord.firebaseRef}">
            <span>${gameRecord.firebaseRef}</span>

            <route-link 
              ${blackWins} 
              href="${RouteEnum.players}/${gameRecord.blackRef}">
                <span>${gameRecord.blackPlayer!.name}</span>
            </route-link>

            <span>${gameRecord!.eloData!.atTheTimeBlackElo}</span>

            <span class="centered">${gameRecord!.eloData!.eloDeltaBlack}</span>

            <route-link 
              ${whiteWins} 
              href="${RouteEnum.players}/${gameRecord.whiteRef}">
                <span>${gameRecord.whitePlayer!.name}</span>
            </route-link>

            <span>${gameRecord!.eloData!.atTheTimeWhiteElo}</span>

            <span class="centered">${gameRecord!.eloData!.eloDeltaWhite}</span>

            <span class="centered">${resultString(gameRecord.result)}</span>

            <span>${DateUtils.formatDate(gameDate)}</span>
            
            ${gameEventLink}
          </route-link>
        </div>
      `;
    }
  };
}
