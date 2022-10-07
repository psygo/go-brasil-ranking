import {
  DocumentData,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import { FirebaseRef } from "../models/firebase_models";
import { TournamentOrLeague } from "../models/game_event";
import { GameRecord } from "../models/game_record";
import { Player } from "../models/player";
import { Globals as g } from "./globals";

export const paginationSlicer = (startAfter: number, list: any[]): any[] =>
  list.slice(startAfter, startAfter + g.queryLimit);

export const inf = 1e10;

export type HtmlString = string;

export type RankingData = GameRecord | Player | TournamentOrLeague;

export const errorLog = (error: Error, title: string = ""): void => {
  console.log("----------------------------------------------------------");
  console.log(title);
  console.log();
  console.log(`Error Name: ${error.name}`);
  console.log(`Error Message: ${error.message}`);
  console.log(`Error Cause: ${error.cause}`);
  console.log(`Error Stack: ${error.stack}`);
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
