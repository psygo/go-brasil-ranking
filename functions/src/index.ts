import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

import express from "express";

import { getPlayer, getPlayers, postPlayer } from "./api/players";
import { home } from "./api/others";

admin.initializeApp();

export const db = admin.firestore();

const goBrasilRankingApp = express();

goBrasilRankingApp.get("/", home);

goBrasilRankingApp.get("/players", getPlayers);
goBrasilRankingApp.get("/players/:playerId", getPlayer);
goBrasilRankingApp.post("/players/new", postPlayer);

export const goBrasilRanking = functions.https.onRequest(goBrasilRankingApp);
