import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

import cors from "cors";
import express from "express";

import { home } from "./api/home_api";

import { postGameEventApi } from "./api/post_game_event_api";
import { postGameRecordApi } from "./api/post_game_record_api";
import { postPlayerApi } from "./api/post_player_api";

import { validateFirebaseIdToken } from "./middleware/auth";

// import { ifDev } from "./middleware/if_dev";
import { populatePlayersApi } from "./populate/populate_players";
import { populateGameRecordsApi } from "./populate/populate_game_recods";
import { populateGameEventsApi } from "./populate/populate_game_events";
import { populateEverythingApi } from "./populate/populate_everything";

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

// 1. Only for Admins
goBrasilRankingApp.use("*/novo", validateFirebaseIdToken);
goBrasilRankingApp.post("/jogadores/novo", postPlayerApi);
goBrasilRankingApp.post("/eventos/novo", postGameEventApi);
goBrasilRankingApp.post("/partidas/novo", postGameRecordApi);

// 2. Mocking
// goBrasilRankingApp.use(ifDev);
goBrasilRankingApp.post("/mock-populate-everything", populateEverythingApi);
goBrasilRankingApp.post("/jogadores/mock-populate", populatePlayersApi);
goBrasilRankingApp.post("/eventos/mock-populate", populateGameEventsApi);
goBrasilRankingApp.post("/partidas/mock-populate", populateGameRecordsApi);

export const goBrasilRanking = functions
  .region("southamerica-east1")
  .runWith({ maxInstances: 5, timeoutSeconds: 100 })
  .https.onRequest(goBrasilRankingApp);
