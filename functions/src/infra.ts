import { Request, Response, NextFunction } from "express";

import { RankingData } from "../../frontend/src/infra/utils";
import { FirebaseRef } from "../../frontend/src/models/firebase_models";

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

export const findPlayerRef = (name: string): string =>
  players.findIndex((p) => p.name.includes(name))!.toString();

export const findEventRef = (name: string): string =>
  gameEvents.findIndex((gE) => gE.name.includes(name))!.toString();
