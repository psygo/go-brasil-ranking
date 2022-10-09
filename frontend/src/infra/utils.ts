import {
  collection,
  DocumentData,
  getDocs,
  limit,
  orderBy,
  query,
  QueryDocumentSnapshot,
  QuerySnapshot,
  where,
} from "firebase/firestore";
import { FirebaseRef } from "../models/firebase_models";
import { TournamentOrLeague } from "../models/game_event";
import { GameRecord } from "../models/game_record";
import { Player, RebaseElo } from "../models/player";
import { Globals as g } from "./globals";

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

export const mergeParallelQueries = async (
  q1: Promise<QuerySnapshot<DocumentData>>,
  q2: Promise<QuerySnapshot<DocumentData>>
): Promise<GameRecord[]> => {
  const [snapsAsBlack, snapsAsWhite] = await Promise.all([q1, q2]);

  const [gameRecordsAsBlack, gameRecordsAsWhite] = [
    mapDocsWithFirebaseRef<GameRecord>(snapsAsBlack.docs),
    mapDocsWithFirebaseRef<GameRecord>(snapsAsWhite.docs),
  ];

  return [...gameRecordsAsBlack, ...gameRecordsAsWhite];
};

type WithDate = RebaseElo | GameRecord;
export const orderByDate = (withDates: WithDate[]): void => {
  withDates.sort((g1, g2) => g2.date - g1.date);
};

export const getPlayerGameRecords = async (
  playerRef: FirebaseRef
): Promise<GameRecord[]> => {
  // TODO1: Pagination...
  const playerIsBlack = getDocs(
    query(
      collection(g.db, "game_records"),
      where("blackRef", "==", playerRef),
      orderBy("date", "desc"),
      limit(g.queryLimit)
    )
  );
  const playerIsWhite = getDocs(
    query(
      collection(g.db, "game_records"),
      where("whiteRef", "==", playerRef),
      orderBy("date", "desc"),
      limit(g.queryLimit)
    )
  );

  const allGames = await mergeParallelQueries(playerIsBlack, playerIsWhite);

  orderByDate(allGames);

  return allGames;
};
