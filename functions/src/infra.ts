import { Request, Response, NextFunction } from "express";

import { RankingData } from "../../frontend/src/infra/utils";

import Elo from "../../frontend/src/models/elo";
import { FirebaseRef } from "../../frontend/src/models/firebase_models";
import { EloHistory } from "../../frontend/src/models/player";

import { gameEvents } from "./data/game_events";
import { players } from "./data/players";

export type ExpressApiRoute = (req: Request, res: Response) => Promise<void>;
export type ExpressNexFunction = (
  req: Request,
  res: Response,
  next: NextFunction
) => void;

export const parseBody = (body: any): any =>
  typeof body === "string" ? JSON.parse(body) : body;

export const addFirebaseRef = <T extends RankingData>(
  rankingData: T,
  firebaseRef: FirebaseRef
): T => ({ ...rankingData, firebaseRef: firebaseRef });

// TODO1: Zero idea why, but having this specific function in only one place
// doesn't work, otherwise the whole project errors in a weird fashion. This is
// currently copied in 3 different places.
export const dateSorter = <T extends { date: number }>(
  dateAble1: T,
  dateAble2: T,
  desc: boolean = false
): number => {
  const [d1, d2] = [new Date(dateAble1.date), new Date(dateAble2.date)];
  const coeff = d1 > d2 ? 1 : d1 < d2 ? -1 : 0;
  return desc ? -coeff : coeff;
};

// TODO3: Needs to be eliminated once we stop forcing indices...
export const findPlayerRef = (name: string): string =>
  players.findIndex((p) => p.name.includes(name))!.toString();

// TODO3: Needs to be eliminated once we stop forcing indices...
export const findEventRef = (name: string): string =>
  gameEvents.findIndex((gE) => gE.name.includes(name))!.toString();

export const eloAtTheTime = (
  eloHistory: readonly EloHistory[],
  currentDate: Date = new Date()
): Elo => {
  let atTheTimeElo: Elo;
  let eloDeltaNum: Elo | undefined;

  const reversedEloHistory = [...eloHistory].reverse();
  for (const h of reversedEloHistory) {
    if (h.forced) continue;
    else if (currentDate >= new Date(h.date)) {
      atTheTimeElo = new Elo(h.atTheTimeElo);
      if (h.eloDelta) eloDeltaNum = new Elo(h.eloDelta);
      break;
    }
  }

  return eloDeltaNum ? atTheTimeElo!.add(eloDeltaNum) : atTheTimeElo!;
};

export const lastElo = (eloHistory: EloHistory[]): Elo => {
  const eloHistoryLength = eloHistory.length;
  const lastAtTheTimeElo = new Elo(
    eloHistory[eloHistoryLength - 1].atTheTimeElo
  );
  const lastEloDeltaNum = eloHistory[eloHistoryLength - 1].eloDelta;

  return lastEloDeltaNum
    ? lastAtTheTimeElo.add(new Elo(lastEloDeltaNum))
    : lastAtTheTimeElo;
};
