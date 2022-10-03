import {
  ExpressApiRoute,
  mapDocsWithFirebaseRef,
  orderGameRecordsByDate,
  paginationSlicer,
  queryLimit,
} from "../../infra";

import { gameRecordsCol } from "../../collections/game_records_col";

import { FirebaseRef } from "../../../../frontend/src/models/firebase_models";
import {
  DateEloData,
  GameRecord,
} from "../../../../frontend/src/models/game_record";
import { RankingData } from "../../../../frontend/src/infra/utils";

const queryForPlayerGameRecords = async (
  playerRef: FirebaseRef
): Promise<GameRecord[]> => {
  const playerIsBlack = gameRecordsCol.col
    .where("blackRef", "==", playerRef)
    .orderBy("date", "desc")
    .get();
  const playerIsWhite = gameRecordsCol.col
    .where("whiteRef", "==", playerRef)
    .orderBy("date", "desc")
    .get();

  const merged = await mergeParallelQueries<GameRecord>(
    playerIsBlack,
    playerIsWhite
  );

  return orderGameRecordsByDate(merged);
};

const mergeParallelQueries = async <T extends RankingData>(
  q1: Promise<FirebaseFirestore.QuerySnapshot<FirebaseFirestore.DocumentData>>,
  q2: Promise<FirebaseFirestore.QuerySnapshot<FirebaseFirestore.DocumentData>>
): Promise<T[]> => {
  const [snapsAsBlack, snapsAsWhite] = await Promise.all([q1, q2]);

  const playerAsBlack = snapsAsBlack.docs.map(mapDocsWithFirebaseRef<T>);
  const playerAsWhite = snapsAsWhite.docs.map(mapDocsWithFirebaseRef<T>);

  return [...playerAsBlack, ...playerAsWhite];
};

const queryForPlayersGameRecords = async (
  playerRef1: FirebaseRef,
  playerRef2: FirebaseRef
) => {
  const blackWhite = gameRecordsCol.col
    .where("blackRef", "==", playerRef1)
    .where("whiteRef", "==", playerRef2)
    .orderBy("date", "desc")
    .get();
  const whiteBlack = gameRecordsCol.col
    .where("blackRef", "==", playerRef2)
    .where("whiteRef", "==", playerRef1)
    .orderBy("date", "desc")
    .get();

  const merged = await mergeParallelQueries<GameRecord>(blackWhite, whiteBlack);

  return orderGameRecordsByDate(merged);
};

const playerDateEloData = async (
  playerRef: FirebaseRef
): Promise<DateEloData[]> => {
  const allPlayerGames = await queryForPlayerGameRecords(playerRef);

  return allPlayerGames
    .map((g) => ({
      date: g.date,
      atTheTimeElo:
        playerRef === g.blackRef
          ? g.eloData!.atTheTimeBlackElo
          : g.eloData!.atTheTimeWhiteElo,
      eloDelta:
        playerRef === g.blackRef
          ? g.eloData!.eloDeltaBlack
          : g.eloData!.eloDeltaWhite,
    }))
    .reverse();
};

export const getGameRecords: ExpressApiRoute = async (req, res) => {
  try {
    const startAfter = parseInt(req.query.de as string);

    const playerRef1 = req.query.jogadorRef1 as FirebaseRef;
    const playerRef2 = req.query.jogadorRef2 as FirebaseRef;

    const eventRef = req.query.eventoRef as FirebaseRef;

    const dateElo = req.query["data-elo"];

    let gameRecords: GameRecord[] = [];

    if (dateElo && playerRef1) {
      res.status(200).send({
        status: "success",
        message: "Elos encontrados.",
        data: { dateEloData: await playerDateEloData(playerRef1) },
      });
      return;
    }

    if (eventRef)
      gameRecords = await gameRecordsFromEvent(startAfter, eventRef);
    else if (playerRef1 && playerRef2)
      gameRecords = await gameRecordsFromTwoPlayers(
        startAfter,
        playerRef1,
        playerRef2
      );
    else if (playerRef1)
      gameRecords = await gameRecordsFromSinglePlayer(startAfter, playerRef1);
    else gameRecords = await gameRecordsByDate(startAfter);

    res.status(200).send({
      status: "success",
      message: `Partidas encontradas (total: ${gameRecords.length})`,
      data: { gameRecords: gameRecords },
    });
  } catch (e) {
    res.status(500).json((e as Error).message);
  }
};

const gameRecordsByDate = async (startAfter: number): Promise<GameRecord[]> => {
  let gameRecordsSnaps = await gameRecordsCol.col
    .orderBy("date", "desc")
    .offset(startAfter)
    .limit(queryLimit)
    .get();

  return gameRecordsSnaps.docs.map(mapDocsWithFirebaseRef<GameRecord>);
};

const gameRecordsFromSinglePlayer = async (
  startAfter: number,
  playerRef: FirebaseRef
): Promise<GameRecord[]> =>
  paginationSlicer(startAfter, await queryForPlayerGameRecords(playerRef));

const gameRecordsFromTwoPlayers = async (
  startAfter: number,
  playerRef1: FirebaseRef,
  playerRef2: FirebaseRef
): Promise<GameRecord[]> =>
  paginationSlicer(
    startAfter,
    await queryForPlayersGameRecords(playerRef1, playerRef2)
  );

const gameRecordsFromEvent = async (
  startAfter: number,
  eventRef: FirebaseRef
): Promise<GameRecord[]> => {
  const snapsGamesFromEvent = await gameRecordsCol.col
    .where("gameEventRef", "==", eventRef)
    .orderBy("date", "desc")
    .offset(startAfter)
    .limit(queryLimit)
    .get();

  return snapsGamesFromEvent.docs.map(mapDocsWithFirebaseRef<GameRecord>);
};
