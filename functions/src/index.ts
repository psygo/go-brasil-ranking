import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

import express from "express";

admin.initializeApp();

export const db = admin.firestore();

const goBrasilRankingApp = express();

goBrasilRankingApp.get("/", (_, res) => {
  try {
    res.status(200).send({
      status: "success",
      message: "Hello there",
    });
  } catch (e) {
    const error = e as Error;

    res.status(500).json(error.message);
  }
});

export const goBrasilRanking = functions.https.onRequest(goBrasilRankingApp);
