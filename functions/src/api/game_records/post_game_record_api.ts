import { addFirebaseRef, ExpressApiRoute, parseBody } from "../../infra";

import { gameRecordsCol } from "../../collections/game_records_col";
import { playersCol } from "../../collections/players_col";

import {
  Color,
  doesThisColorWin,
  EloData,
  GameRecord,
} from "../../../../frontend/src/models/game_record";
import { FirebaseRef } from "../../../../frontend/src/models/firebase_models";
import Elo from "../../../../frontend/src/models/elo";
import { Player, _Player } from "../../../../frontend/src/models/player";
import { gameEventsCol } from "../../collections/game_events_col";
import {
  isTournamentOrLeagueRef,
  OnlineOrLive,
  TournamentOrLeague,
} from "../../../../frontend/src/models/game_event";

export const postGameRecord = async (
  gameRecord: GameRecord,
  firebaseRef?: FirebaseRef
): Promise<GameRecord> => {
  const black = (await playersCol.getWithRef(gameRecord.blackRef))! as _Player;
  const white = (await playersCol.getWithRef(gameRecord.whiteRef))! as _Player;

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

  gameRecordOnDb = await addGameToDbAndAddFirebaseRef(
    gameRecordOnDb,
    firebaseRef
  );

  await updateLastGameForPlayer(gameRecord.blackRef, gameRecordOnDb);
  await updateLastGameForPlayer(gameRecord.whiteRef, gameRecordOnDb);

  return gameRecordOnDb;
};

const updateElo = async (
  black: Player,
  white: Player,
  gameRecord: GameRecord
): Promise<EloData> => {
  const blackElo = new Elo(black.elo);
  const whiteElo = new Elo(white.elo);

  const blackEloDelta = blackElo.deltaFromGame(
    whiteElo,
    doesThisColorWin(Color.Black, gameRecord.result),
    gameRecord.handicap ?? 0,
    Color.Black
  );
  const whiteEloDelta = whiteElo.deltaFromGame(
    blackElo,
    doesThisColorWin(Color.White, gameRecord.result),
    gameRecord.handicap ?? 0,
    Color.White
  );

  await playersCol.updateWithRef(gameRecord.blackRef, {
    elo: blackElo.add(blackEloDelta).num,
    gamesTotal: black.gamesTotal! + 1,
  });
  await playersCol.updateWithRef(gameRecord.whiteRef, {
    elo: whiteElo.add(whiteEloDelta).num,
    gamesTotal: white.gamesTotal! + 1,
  });

  return {
    atTheTimeBlackElo: blackElo.serialize(),
    eloDeltaBlack: blackEloDelta.serialize(),
    atTheTimeWhiteElo: whiteElo.serialize(),
    eloDeltaWhite: whiteEloDelta.serialize(),
  };
};

const addGameEvent = async (gameRecord: GameRecord): Promise<GameRecord> => {
  if (isTournamentOrLeagueRef(gameRecord.gameEventRef)) {
    const eventRefString = gameRecord.gameEventRef;

    const eventRef = gameEventsCol.col.doc(eventRefString);
    const gameEvent = (await eventRef.get()).data() as TournamentOrLeague;

    if (gameEvent) {
      await eventRef.update({ gamesTotal: gameEvent.gamesTotal! + 1 });
      return { ...gameRecord, gameEvent: gameEvent };
    } else return gameRecord;
  } else
    return {
      ...gameRecord,
      gameEvent: <OnlineOrLive>{ type: gameRecord.gameEventRef },
    };
};

const addGameToDbAndAddFirebaseRef = async (
  gameRecord: GameRecord,
  firebaseRef?: FirebaseRef
): Promise<GameRecord> => {
  if (firebaseRef) {
    await gameRecordsCol.col.doc(firebaseRef).set(gameRecord);
    return addFirebaseRef(gameRecord, firebaseRef);
  } else {
    const gameRecordRef = await gameRecordsCol.col.add(gameRecord);
    return addFirebaseRef(gameRecord, gameRecordRef.id);
  }
};

const updateLastGameForPlayer = async (
  playerRef: FirebaseRef,
  lastGame: GameRecord
): Promise<void> => {
  await playersCol.updateWithRef(playerRef, {
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
