import {
  eloAtTheTime,
  ExpressApiRoute,
  lastElo,
  parseBody,
  postRankingData,
} from "../infra";

import { gameEventsCol, gameRecordsCol, playersCol } from "../cols";

import {
  Color,
  doesThisColorWin,
  EloData,
  GameRecord,
} from "../../../frontend/src/models/game_record";
import { FirebaseRef } from "../../../frontend/src/models/firebase_models";
import Elo from "../../../frontend/src/models/elo";
import {
  EloHistory,
  Player,
  _Player,
} from "../../../frontend/src/models/player";
import {
  isTournamentOrLeagueRef,
  OnlineOrLive,
  TournamentOrLeague,
} from "../../../frontend/src/models/game_event";
import { dateSorter } from "../../../frontend/src/infra/utils";

export const postGameRecord = async (
  gameRecord: GameRecord,
  firebaseRef?: FirebaseRef
): Promise<GameRecord> => {
  const [blackSnap, whiteSnap] = await Promise.all([
    playersCol.col.doc(gameRecord.blackRef).get(),
    playersCol.col.doc(gameRecord.whiteRef).get(),
  ]);
  const [black, white]: _Player[] = [
    blackSnap.data() as _Player,
    whiteSnap.data() as _Player,
  ];

  delete black.lastGame;
  delete white.lastGame;

  const eloData = await updateElo(black, white, gameRecord);

  let gameRecordOnDb: GameRecord = {
    ...gameRecord,
    blackPlayer: black,
    whitePlayer: white,
    eloData: eloData,
    dateCreated: new Date().getTime(),
  };

  gameRecordOnDb = await addGameEvent(gameRecordOnDb);

  gameRecordOnDb = await postRankingData(
    gameRecordsCol,
    gameRecordOnDb,
    firebaseRef
  );

  await Promise.all([
    updateLastGameForPlayer(gameRecord.blackRef, gameRecordOnDb),
    updateLastGameForPlayer(gameRecord.whiteRef, gameRecordOnDb),
  ]);

  return gameRecordOnDb;
};

const updateElo = async (
  black: Player,
  white: Player,
  gameRecord: GameRecord
): Promise<EloData> => {
  const [blackElo, whiteElo]: Elo[] = gameRecord.forcedElos
    ? [
        new Elo(gameRecord.forcedElos.blackElo),
        new Elo(gameRecord.forcedElos.whiteElo),
      ]
    : [
        eloAtTheTime(black.eloHistory!, new Date(gameRecord.date)),
        eloAtTheTime(white.eloHistory!, new Date(gameRecord.date)),
      ];

  const [blackEloDelta, whiteEloDelta]: Elo[] = [
    blackElo.deltaFromGame(
      whiteElo,
      doesThisColorWin(Color.Black, gameRecord.result),
      gameRecord.handicap ?? 0,
      Color.Black
    ),
    whiteElo.deltaFromGame(
      blackElo,
      doesThisColorWin(Color.White, gameRecord.result),
      gameRecord.handicap ?? 0,
      Color.White
    ),
  ];

  const eloData: EloData = {
    atTheTimeBlackElo: blackElo.serialize(),
    eloDeltaBlack: blackEloDelta.serialize(),
    atTheTimeWhiteElo: whiteElo.serialize(),
    eloDeltaWhite: whiteEloDelta.serialize(),
  };

  const [dateEloBlack, dateEloWhite]: EloHistory[] = [
    {
      date: gameRecord.date,
      atTheTimeElo: eloData.atTheTimeBlackElo,
      eloDelta: eloData.eloDeltaBlack,
      forced: gameRecord.forcedElos !== undefined,
    },
    {
      date: gameRecord.date,
      atTheTimeElo: eloData.atTheTimeWhiteElo,
      eloDelta: eloData.eloDeltaWhite,
      forced: gameRecord.forcedElos !== undefined,
    },
  ];

  const [newBlackEloHistory, newWhiteEloHistory] = [
    [...black.eloHistory!, dateEloBlack],
    [...white.eloHistory!, dateEloWhite],
  ];

  newBlackEloHistory.sort(dateSorter);
  newWhiteEloHistory.sort(dateSorter);

  await Promise.all([
    playersCol.col.doc(gameRecord.blackRef).update({
      eloHistory: newBlackEloHistory,
      currentElo: lastElo(newBlackEloHistory).serialize(),
      gamesTotal: black.gamesTotal! + 1,
    }),
    playersCol.col.doc(gameRecord.whiteRef).update({
      eloHistory: newWhiteEloHistory,
      currentElo: lastElo(newWhiteEloHistory).serialize(),
      gamesTotal: white.gamesTotal! + 1,
    }),
  ]);

  return eloData;
};

const addGameEvent = async (gameRecord: GameRecord): Promise<GameRecord> => {
  if (isTournamentOrLeagueRef(gameRecord.gameEventRef)) {
    const eventRefString = gameRecord.gameEventRef;

    const eventRef = gameEventsCol.col.doc(eventRefString);
    const gameEvent = (await eventRef.get()).data() as TournamentOrLeague;

    if (gameEvent) {
      const participants = gameEvent.participants
        ? [...gameEvent.participants]
        : [];
      if (!participants.includes(gameRecord.blackRef))
        participants.push(gameRecord.blackRef);
      if (!participants.includes(gameRecord.whiteRef))
        participants.push(gameRecord.whiteRef);

      await eventRef.update({
        gamesTotal: gameEvent.gamesTotal! + 1,
        participants: participants,
      });

      return { ...gameRecord, gameEvent: gameEvent };
    } else return gameRecord;
  } else
    return {
      ...gameRecord,
      gameEvent: <OnlineOrLive>{ type: gameRecord.gameEventRef },
    };
};

const updateLastGameForPlayer = async (
  playerRef: FirebaseRef,
  lastGame: GameRecord
): Promise<void> => {
  await playersCol.col.doc(playerRef).update({
    lastGame: lastGame,
  });
};

export const postGameRecordApi: ExpressApiRoute = async (req, res) => {
  try {
    const gameRecord = parseBody(req.body);

    const gameRecordOnDbWithRef = await postGameRecord(gameRecord);

    res.status(200).send({
      status: "success",
      message: "Partida adicionada com sucesso.",
      data: { gameRecord: gameRecordOnDbWithRef },
    });
  } catch (e) {
    res.status(500).json((e as Error).message);
  }
};
