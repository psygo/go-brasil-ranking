import * as admin from "firebase-admin";

import { ExpressApiRoute, howMany, parseBody } from "../../infra";

import { gameEventsCol } from "../collections/game_events_col";

import {
  GameEvent,
  isTournamentOrLeague,
} from "../../../../go_brasil_ranking/src/models/game_event";
import { FirebaseRef } from "../../../../go_brasil_ranking/src/models/firebase_ref";

export const getGameEvents: ExpressApiRoute = async (req, res) => {
  try {
    const limit = howMany(req.query.limit as string);

    const gameEventsQuery = gameEventsCol.col.limit(limit);

    const gameEventsDocs = await gameEventsQuery.get();

    const gameEvents: GameEvent[] = [];
    gameEventsDocs.forEach((gameEventDoc) => {
      const gameEventNoRef = gameEventDoc.data() as GameEvent;

      if (isTournamentOrLeague(gameEventNoRef))
        gameEvents.push({ ...gameEventNoRef, firebaseRef: gameEventDoc.id });
      else gameEvents.push(gameEventNoRef);
    });

    res.status(200).send({
      status: "success",
      message: `Game Records found (total: ${gameEvents.length}`,
      data: { gameEvents: gameEvents },
    });
  } catch (e) {
    res.status(500).json((e as Error).message);
  }
};

export const getGameEvent: ExpressApiRoute = async (req, res) => {
  try {
    const id = req.params.gameEventId;

    const gameGameEventRef = gameEventsCol.col.doc(id);

    const gameEventDoc = await gameGameEventRef.get();

    if (req.query.exists === "")
      res.status(200).send({
        status: "success",
        message: "Game Record exists",
        data: gameEventDoc.exists,
      });
    else
      res.status(200).send({
        status: "success",
        message: "Game Record found.",
        data: { gameEvent: gameEventDoc.data() },
      });
  } catch (e) {
    res.status(500).json((e as Error).message);
  }
};

export const postGameEvent = async (
  gameEvent: GameEvent,
  firebaseRef?: FirebaseRef
): Promise<GameEvent> => {
  const now = admin.firestore.Timestamp.now().toMillis();

  const gameEventOnDb = {
    ...gameEvent,
    dateCreated: now,
    gamesTotal: 0,
  };

  if (!firebaseRef) {
    const gameEventRef = await gameEventsCol.col.add(gameEventOnDb);
    return { ...gameEventOnDb, firebaseRef: gameEventRef.id };
  } else {
    await gameEventsCol.col.doc(firebaseRef).set(gameEventOnDb);
    return { ...gameEventOnDb, firebaseRef: firebaseRef };
  }
};

export const postGameEventApi: ExpressApiRoute = async (req, res) => {
  try {
    const gameEvent = parseBody(req.body);

    const gameEventOnDbWithRef = await postGameEvent(gameEvent);

    res.status(200).send({
      status: "success",
      message: "Evento adicionado com sucesso.",
      data: { gameEvent: gameEventOnDbWithRef },
    });
  } catch (e) {
    res.status(500).json((e as Error).message);
  }
};
