import { Request, Response, NextFunction } from "express";
import { addFirebaseRef, RankingData } from "../../frontend/src/infra/utils";

import Elo from "../../frontend/src/models/elo";
import { FirebaseRef } from "../../frontend/src/models/firebase_models";
import { EloHistory } from "../../frontend/src/models/player";
import CollectionWrapper from "./cols";

import { gameEvents } from "./data/game_events";
import { players } from "./data/players";

export const postRankingData = async <T extends RankingData>(
  collectionWrapper: CollectionWrapper,
  data: T,
  firebaseRef?: FirebaseRef
): Promise<T> => {
  if (!firebaseRef) {
    const ref = await collectionWrapper.col.add(data);
    return addFirebaseRef(data, ref.id);
  } else {
    await collectionWrapper.col.doc(firebaseRef).set(data);
    return addFirebaseRef(data, firebaseRef);
  }
};

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

export const generateSearchableArrayFromString = (s: string): string[] => {
  const searchableArray = [];
  const length = s.length;
  const lowerS = s.toLowerCase();

  for (let i = 1; i < length + 1; i++)
    searchableArray.push(lowerS.substring(0, i));

  return searchableArray;
};
