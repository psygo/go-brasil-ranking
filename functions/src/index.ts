import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

import express from "express";

import {
  getPlayer,
  getPlayers,
  postPlayer,
} from "./go_brasil_ranking/api/players";
import { home } from "./go_brasil_ranking/api/others";

import { mockPopulatePlayersApi } from "./go_brasil_ranking/mock/mock_players";
import { mockPopulateGameRecordsApi } from "./go_brasil_ranking/mock/mock_game_recods";
import { mockPopulateGameEventsApi } from "./go_brasil_ranking/mock/mock_game_events";
import { ifDev } from "./infra";
import { mockPopulateEverythingApi } from "./go_brasil_ranking/mock/mock_everything";

import cors from "cors";
import {
  getGameRecord,
  getGameRecords,
  postGameRecord,
} from "./go_brasil_ranking/api/game_records";
import {
  getGameEvent,
  getGameEvents,
} from "./go_brasil_ranking/api/game_events";

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
goBrasilRankingApp.get("/players", getPlayers);
goBrasilRankingApp.get("/players/:playerId", getPlayer);
goBrasilRankingApp.post("/players/new", postPlayer);

// 2. Game Events
goBrasilRankingApp.get("/game-events", getGameEvents);
goBrasilRankingApp.get("/game-events/:gameEventId", getGameEvent);
goBrasilRankingApp.post("/game-events/new", postPlayer);

// 3. Game Records
goBrasilRankingApp.get("/game-records", getGameRecords);
goBrasilRankingApp.get("/game-records/:gameRecordId", getGameRecord);
goBrasilRankingApp.post("/game-records/new", postGameRecord);

// 4. Mocking
goBrasilRankingApp.use(ifDev);
goBrasilRankingApp.post("/mock-populate-everything", mockPopulateEverythingApi);
goBrasilRankingApp.post("/players/mock-populate", mockPopulatePlayersApi);
goBrasilRankingApp.post(
  "/game-events/mock-populate",
  mockPopulateGameEventsApi
);
goBrasilRankingApp.post(
  "/game-records/mock-populate",
  mockPopulateGameRecordsApi
);

export const goBrasilRanking = functions.https.onRequest(goBrasilRankingApp);
