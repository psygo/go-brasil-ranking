import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";

import { Globals as g } from "./globals";

import { FirebaseRef } from "../models/firebase_models";
import { TournamentOrLeague } from "../models/game_event";
import { GameRecord } from "../models/game_record";
import { Player } from "../models/player";

export const paginationSlicer = <T extends RankingData>(
  startAfter: number,
  list: T[]
): T[] => list.slice(startAfter, startAfter + g.queryLimit);

export const inf = 1e10;

export type HtmlString = string;

export type RankingData = GameRecord | Player | TournamentOrLeague;

export const errorLog = (error: Error, title: string = ""): void => {
  console.log("----------------------------------------------------------");
  console.log(title);
  console.log();
  console.error(`Error Name: ${error.name}`);
  console.error(`Error Message: ${error.message}`);
  console.error(`Error Cause: ${error.cause}`);
  console.error(`Error Stack: ${error.stack}`);
  console.log("----------------------------------------------------------");
};

export const addFirebaseRef = <T extends RankingData>(
  rankingData: T,
  firebaseRef: FirebaseRef
): T => ({ ...rankingData, firebaseRef: firebaseRef });

export const mapDocsWithFirebaseRef = <T extends RankingData>(
  docs: QueryDocumentSnapshot<DocumentData>[]
): T[] =>
  docs.map((doc) => {
    const rankingData = doc.data() as T;
    return addFirebaseRef<T>(rankingData, doc.id);
  });
