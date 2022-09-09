import { ExpressApiRoute, howMany } from "../infra";

import { db } from "..";

import SerializedGameRecord from "../../../go_brasil_ranking/src/models/game_record";

export const getGameRecords: ExpressApiRoute = async (req, res) => {
  try {
    const limit = howMany(req.query.limit as string);

    const gameRecordsQuery = db.collection("game_records").limit(limit);

    const gameRecordsDocs = await gameRecordsQuery.get();

    const gameRecords: SerializedGameRecord[] = [];
    gameRecordsDocs.forEach((playerDoc) => {
      gameRecords.push(playerDoc.data() as SerializedGameRecord);
    });

    res.status(200).send({
      status: "success",
      message: `Game Records found (total: ${gameRecords.length}`,
      data: { players: gameRecords },
    });
  } catch (e) {
    res.status(500).json((e as Error).message);
  }
};

export const getGameRecord: ExpressApiRoute = async (req, res) => {
  try {
    const id = req.params.gameRecordId;

    const gameRecordRef = db.collection("game_record").doc(id);

    const gameRecordDoc = await gameRecordRef.get();

    if (req.query.exists === "")
      res.status(200).send({
        status: "success",
        message: "Game Record exists",
        data: gameRecordDoc.exists,
      });
    else
      res.status(200).send({
        status: "success",
        message: "Game Record found.",
        data: { players: gameRecordDoc.data() },
      });
  } catch (e) {
    res.status(500).json((e as Error).message);
  }
};

export const postPlayer: ExpressApiRoute = async (req, res) => {
  try {
    const gameRecord =
      typeof req.body === "string" ? JSON.parse(req.body) : req.body;

    // TODO1: Add a check if the received conforms to the interface.
    // See https://github.com/gristlabs/ts-interface-checker

    const gameRecordRef = await db.collection("game_record").add(gameRecord);

    res.status(200).send({
      status: "success",
      message: "Game Record added successfully",
      data: { id: gameRecordRef.id },
    });
  } catch (e) {
    res.status(500).json((e as Error).message);
  }
};
