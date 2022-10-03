import { TournamentOrLeague } from "../models/game_event";
import { GameRecord } from "../models/game_record";
import { Player } from "../models/player";
import { Globals as g } from "./globals";

export const paginationSlicer = (startAfter: number, list: any[]): any[] =>
  list.slice(startAfter, startAfter + g.queryLimit);

export const inf = 1e10;

export type HtmlString = string;

export type RankingData = GameRecord | Player | TournamentOrLeague;
