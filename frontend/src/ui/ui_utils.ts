import { emdash } from "../infra/globals";

import { DateUtils } from "../infra/date_utils";

import { RouteEnum } from "../routing/router";

import { Country, getFlag } from "../models/country";
import { Player } from "../models/player";
import { HtmlString } from "../infra/utils";
import { GameRecord } from "../models/game_record";
import { isTournamentOrLeague } from "../models/game_event";

export namespace UiUtils {
  export const allFlags = (countries: readonly Country[]): HtmlString =>
    countries
      .map(
        (c) => /*html*/ `
          <span title="${c.name}">
            ${getFlag(c.name)}
          </span>
        `
      )
      .reduce((pflag, cflag) => pflag + cflag);

  export const lastGameLink = (player: Player): HtmlString => {
    if (player.lastGame) {
      const lastGameDate = DateUtils.formatDate(new Date(player.lastGame.date));

      return /*html*/ `
        <route-link 
          class="centered" 
          href="${RouteEnum.gameRecords}/${player.lastGame.firebaseRef}">
            <span>${lastGameDate}</span>
        </route-link>
      `;
    } else return /*html*/ `<span class="centered">${emdash}</span>`;
  };

  export const playerPicture = (picture: string | undefined): HtmlString =>
    !picture
      ? /*html*/ `<span class="centered" id="picture-placeholder">${emdash}</span>`
      : /*html*/ `<img id="picture" src="${picture}"/>`;

  export const signedEloDelta = (n: number): string =>
    n === 0 ? n.toString() : n > 0 ? `+${n}` : n.toString();

  export const gameEventLink = (gameRecord: GameRecord) => {
    let gameEvent = gameRecord.gameEvent?.type.toString();

    let gameEventLink = /*html*/ `<span>${gameEvent}</span>`;

    if (gameRecord.gameEvent && isTournamentOrLeague(gameRecord.gameEvent)) {
      gameEvent = gameRecord.gameEvent.name;
      gameEventLink = /*html*/ `
        <route-link 
          href="${RouteEnum.gameEvents}/${gameRecord.gameEventRef}">
            <span>${gameRecord.gameEvent.name}</span>
        </route-link>
      `;
    }

    return gameEventLink;
  };
}
