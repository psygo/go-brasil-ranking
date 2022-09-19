import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

import cors from "cors";
import express from "express";

import {
  getPlayer,
  getPlayers,
  postPlayer,
} from "./go_brasil_ranking/api/players";
import { home } from "./go_brasil_ranking/api/others";
import {
  getGameRecord,
  getGameRecords,
  postGameRecord,
} from "./go_brasil_ranking/api/game_records";
import {
  getGameEvent,
  getGameEvents,
} from "./go_brasil_ranking/api/game_events";

import { mockPopulatePlayersApi } from "./go_brasil_ranking/mock/mock_players";
import { mockPopulateGameRecordsApi } from "./go_brasil_ranking/mock/mock_game_recods";
import { mockPopulateGameEventsApi } from "./go_brasil_ranking/mock/mock_game_events";
import { mockPopulateEverythingApi } from "./go_brasil_ranking/mock/mock_everything";
import { ifDev } from "./go_brasil_ranking/middleware/if_dev";
import { validateFirebaseIdToken } from "./go_brasil_ranking/middleware/auth";

admin.initializeApp();

export const db = admin.firestore();

const goBrasilRankingApp = express();

const localPort = 8086;
goBrasilRankingApp.use(
  cors({
    origin: [`http://localhost:${localPort}`, `http://127.0.0.1:${localPort}`],
  })
);

goBrasilRankingApp.get("/", home);

// 1. Players
goBrasilRankingApp.get("/jogadores", getPlayers);
goBrasilRankingApp.get("/jogadores/:playerId", getPlayer);

// 2. Game Events
goBrasilRankingApp.get("/eventos", getGameEvents);
goBrasilRankingApp.get("/eventos/:gameEventId", getGameEvent);

// 3. Game Records
goBrasilRankingApp.get("/partidas", getGameRecords);
goBrasilRankingApp.get("/partidas/:gameRecordId", getGameRecord);

// 4. Only for Admins
goBrasilRankingApp.use(validateFirebaseIdToken);
goBrasilRankingApp.post("/jogadores/novo", postPlayer);
goBrasilRankingApp.post("/eventos/novo", postPlayer);
goBrasilRankingApp.post("/partidas/novo", postGameRecord);

// 5. Mocking
goBrasilRankingApp.use(ifDev);
goBrasilRankingApp.post("/mock-populate-everything", mockPopulateEverythingApi);
goBrasilRankingApp.post("/jogadores/mock-populate", mockPopulatePlayersApi);
goBrasilRankingApp.post("/eventos/mock-populate", mockPopulateGameEventsApi);
goBrasilRankingApp.post("/partidas/mock-populate", mockPopulateGameRecordsApi);

export const goBrasilRanking = functions.https.onRequest(goBrasilRankingApp);
