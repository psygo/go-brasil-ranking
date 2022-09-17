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

import { ifDev } from "./infra";
import { mockPopulatePlayersApi } from "./go_brasil_ranking/mock/mock_players";
import { mockPopulateGameRecordsApi } from "./go_brasil_ranking/mock/mock_game_recods";
import { mockPopulateGameEventsApi } from "./go_brasil_ranking/mock/mock_game_events";
import { mockPopulateEverythingApi } from "./go_brasil_ranking/mock/mock_everything";

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
goBrasilRankingApp.post("/jogadores/new", postPlayer);

// 2. Game Events
goBrasilRankingApp.get("/eventos", getGameEvents);
goBrasilRankingApp.get("/eventos/:gameEventId", getGameEvent);
goBrasilRankingApp.post("/eventos/new", postPlayer);

// 3. Game Records
goBrasilRankingApp.get("/partidas", getGameRecords);
goBrasilRankingApp.get("/partidas/:gameRecordId", getGameRecord);
goBrasilRankingApp.post("/partidas/new", postGameRecord);

// 4. Mocking
goBrasilRankingApp.use(ifDev);
goBrasilRankingApp.post("/mock-populate-everything", mockPopulateEverythingApi);
goBrasilRankingApp.post("/jogadores/mock-populate", mockPopulatePlayersApi);
goBrasilRankingApp.post("/eventos/mock-populate", mockPopulateGameEventsApi);
goBrasilRankingApp.post("/partidas/mock-populate", mockPopulateGameRecordsApi);

export const goBrasilRanking = functions.https.onRequest(goBrasilRankingApp);
