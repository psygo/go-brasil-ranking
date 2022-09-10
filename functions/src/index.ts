import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

import express from "express";

import {
  getPlayer,
  getPlayers,
  postPlayer,
} from "./go_brasil_ranking/api/players";
import { home } from "./go_brasil_ranking/api/others";

admin.initializeApp();

export const db = admin.firestore();

const goBrasilRankingApp = express();

goBrasilRankingApp.get("/", home);

goBrasilRankingApp.get("/players", getPlayers);
goBrasilRankingApp.get("/players/:playerId", getPlayer);
goBrasilRankingApp.post("/players/new", postPlayer);

goBrasilRankingApp.get("/gameRecords", getPlayers);
goBrasilRankingApp.get("/gameRecords/:gameRecordId", getPlayer);
goBrasilRankingApp.post("/gameRecords/new", postPlayer);

export const goBrasilRanking = functions.https.onRequest(goBrasilRankingApp);
