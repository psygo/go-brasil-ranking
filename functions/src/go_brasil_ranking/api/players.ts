import { ExpressApiRoute, howMany } from "../../infra";

import { db } from "../..";
import { Player } from "../../../../go_brasil_ranking/src/models/player";
import { playersCol } from "../collections/players_col";

export const getPlayers: ExpressApiRoute = async (req, res) => {
  try {
    const limit = howMany(req.query.limit as string);

    const playersDocs = await playersCol.col
      .limit(limit)
      .orderBy("elo", "desc")
      .get();

    const players: Player[] = [];
    playersDocs.forEach((playerDoc) => {
      const playerNoRef = playerDoc.data() as Player;
      players.push({ ...playerNoRef, firebaseRef: playerDoc.id });
    });

    res.status(200).send({
      status: "success",
      message: `Players found (total: ${players.length}`,
      data: { players: players },
    });
  } catch (e) {
    res.status(500).json((e as Error).message);
  }
};

export const getPlayer: ExpressApiRoute = async (req, res) => {
  try {
    const id = req.params.playerId;

    const playerRef = db.collection("players").doc(id);

    const playerDoc = await playerRef.get();

    if (req.query.exists === "")
      res.status(200).send({
        status: "success",
        message: "Item exists",
        data: playerDoc.exists,
      });
    else
      res.status(200).send({
        status: "success",
        message: "Player found.",
        data: { player: playerDoc.data() },
      });
  } catch (e) {
    res.status(500).json((e as Error).message);
  }
};

export const postPlayer: ExpressApiRoute = async (req, res) => {
  try {
    const player =
      typeof req.body === "string" ? JSON.parse(req.body) : req.body;

    // TODO1: Add a check if the received conforms to the interface.
    // See https://github.com/gristlabs/ts-interface-checker

    const playerRef = await db.collection("players").add(player);

    res.status(200).send({
      status: "success",
      message: "Player added successfully",
      data: { id: playerRef.id },
    });
  } catch (e) {
    res.status(500).json((e as Error).message);
  }
};
