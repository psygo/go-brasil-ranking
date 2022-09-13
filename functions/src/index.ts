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

// 3. Game Records
goBrasilRankingApp.get("/game-records", getPlayers);
goBrasilRankingApp.get("/game-records/:gameRecordId", getPlayer);
goBrasilRankingApp.post("/game-records/new", postPlayer);

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
