import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

import cors from "cors";
import express from "express";

import { home } from "./api/others/home_api";

import { getPlayer } from "./api/players/get_player_api";
import { postPlayerApi } from "./api/players/post_player_api";

import { postGameEventApi } from "./api/game_events/post_game_event_api";

import { getGameRecords } from "./api/game_records/get_game_records_api";
import { getGameRecord } from "./api/game_records/get_game_record_api";
import { postGameRecordApi } from "./api/game_records/post_game_record_api";

import { validateFirebaseIdToken } from "./middleware/auth";

import { ifDev } from "./middleware/if_dev";
import { mockPopulatePlayersApi } from "./mock/mock_players";
import { mockPopulateGameRecordsApi } from "./mock/mock_game_recods";
import { mockPopulateGameEventsApi } from "./mock/mock_game_events";
import { mockPopulateEverythingApi } from "./mock/mock_everything";

import { firebaseConfig } from "../../frontend/src/infra/firebase_config";

admin.initializeApp(firebaseConfig);

export const db = admin.firestore();

const goBrasilRankingApp = express();

goBrasilRankingApp.use(
  cors({
    origin: true,
  })
);

goBrasilRankingApp.get("/", home);

// 1. Players
goBrasilRankingApp.get("/jogadores/:playerId", getPlayer);

// 3. Game Records
goBrasilRankingApp.get("/partidas", getGameRecords);
goBrasilRankingApp.get("/partidas/:gameRecordId", getGameRecord);

// 4. Only for Admins
goBrasilRankingApp.use("*/novo", validateFirebaseIdToken);
goBrasilRankingApp.post("/jogadores/novo", postPlayerApi);
goBrasilRankingApp.post("/eventos/novo", postGameEventApi);
goBrasilRankingApp.post("/partidas/novo", postGameRecordApi);

// 5. Mocking
goBrasilRankingApp.use(ifDev);
goBrasilRankingApp.post("/mock-populate-everything", mockPopulateEverythingApi);
goBrasilRankingApp.post("/jogadores/mock-populate", mockPopulatePlayersApi);
goBrasilRankingApp.post("/eventos/mock-populate", mockPopulateGameEventsApi);
goBrasilRankingApp.post("/partidas/mock-populate", mockPopulateGameRecordsApi);

export const goBrasilRanking = functions
  .region("southamerica-east1")
  .runWith({ maxInstances: 10 })
  .https.onRequest(goBrasilRankingApp);
