import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

import cors from "cors";
import express from "express";

import { getPlayer, getPlayers, postPlayerApi } from "./api/players_api";
import { home } from "./api/others_api";
import {
  getGameRecord,
  getGameRecords,
  postGameRecordApi,
} from "./api/game_records_api";

import { validateFirebaseIdToken } from "./middleware/auth";

import { ifDev } from "./middleware/if_dev";
import { mockPopulatePlayersApi } from "./mock/mock_players";
import { mockPopulateGameRecordsApi } from "./mock/mock_game_recods";
import { mockPopulateGameEventsApi } from "./mock/mock_game_events";
import { mockPopulateEverythingApi } from "./mock/mock_everything";

import { getGameEvents } from "./api/game_events/get_game_events_api";
import { getGameEvent } from "./api/game_events/get_game_event_api";
import { postGameEventApi } from "./api/game_events/post_game_event_api";

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

export const goBrasilRanking = functions.https.onRequest(goBrasilRankingApp);
