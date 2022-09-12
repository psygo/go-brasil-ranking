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

admin.initializeApp();

export const db = admin.firestore();

const goBrasilRankingApp = express();

goBrasilRankingApp.get("/", home);

// 1. Players
goBrasilRankingApp.get("/players", getPlayers);
goBrasilRankingApp.get("/players/:playerId", getPlayer);
goBrasilRankingApp.post("/players/new", postPlayer);

// 2. Game Events

// 3. Game Records
goBrasilRankingApp.get("/gameRecords", getPlayers);
goBrasilRankingApp.get("/gameRecords/:gameRecordId", getPlayer);
goBrasilRankingApp.post("/gameRecords/new", postPlayer);

// 4. Mocking
goBrasilRankingApp.use(ifDev);
goBrasilRankingApp.post(
  "/players/mock-populate-players",
  mockPopulatePlayersApi
);
goBrasilRankingApp.post(
  "/players/mock-populate-game-events",
  mockPopulateGameEventsApi
);
goBrasilRankingApp.post(
  "/players/mock-populate-game-records",
  mockPopulateGameRecordsApi
);

export const goBrasilRanking = functions.https.onRequest(goBrasilRankingApp);
