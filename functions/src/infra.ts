import { Request, Response, NextFunction } from "express";

import Elo from "../../frontend/src/models/elo";
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

export const findPlayerRef = (name: string): string =>
  players.findIndex((p) => p.name.includes(name))!.toString();

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
