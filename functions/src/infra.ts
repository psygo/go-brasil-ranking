import { Request, Response, NextFunction } from "express";
import { GameRecord } from "../../frontend/src/models/game_record";
import { RankingData } from "../../frontend/src/infra/utils";
import { FirebaseRef } from "../../frontend/src/models/firebase_models";

export type ExpressApiRoute = (req: Request, res: Response) => Promise<void>;
export type ExpressNexFunction = (
  req: Request,
  res: Response,
  next: NextFunction
) => void;

export const queryLimit = 5;

export const paginationSlicer = (startAfter: number, list: any[]): any[] =>
  list.slice(startAfter, startAfter + queryLimit);

export const parseBody = (body: any): any =>
  typeof body === "string" ? JSON.parse(body) : body;

export const orderGameRecordsByDate = (
  gameRecords: GameRecord[]
): GameRecord[] => {
  gameRecords.sort((g1, g2) => g2.date - g1.date);
  gameRecords.sort((g1, g2) => g2.dateCreated! - g1.dateCreated!);

  return gameRecords;
};

export const addFirebaseRef = <T extends RankingData>(
  rankingData: T,
  firebaseRef: FirebaseRef
): T => ({ ...rankingData, firebaseRef: firebaseRef });

export const mapDocsWithFirebaseRef = <T extends RankingData>(
  docs: FirebaseFirestore.QueryDocumentSnapshot<FirebaseFirestore.DocumentData>[]
): T[] =>
  docs.map((doc) => {
    const rankingData = doc.data() as T;
    return addFirebaseRef<T>(rankingData, doc.id);
  });
