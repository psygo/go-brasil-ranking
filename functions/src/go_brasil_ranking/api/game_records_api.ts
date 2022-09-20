import { ExpressApiRoute, howMany } from "../../infra";

import { GameRecord } from "../../../../go_brasil_ranking/src/models/game_record";
import { gameRecordsCol } from "../collections/game_records_col";
// import { playersCol } from "../collections/players_col";
// import { FirebaseRef } from "../../../../go_brasil_ranking/src/models/firebase_ref";

// export const queryForPlayersGameRecords = async (
//   playerRef: FirebaseRef,
//   limit: number
// ) => {
//   const gamesWithPlayer = (
//     await playersCol.col
//       .doc(playerRef)
//       .collection("gamesRefs")
//       .orderBy("gameDate", "desc")
//       .limit(limit)
//       .get()
//   ).docs;

//   let gamesRefs: GameRecord[] = [];
//   gamesRefs = gamesWithPlayer.map((g) => g.data() as GameRecord);

//   const gameRecordsWithRefsQuery = gamesRefs.map((gRef) =>
//     gameRecordsCol.col.doc(gRef.gameRef).get()
//   );

//   return await Promise.all(gameRecordsWithRefsQuery);
// };

export const getGameRecords: ExpressApiRoute = async (req, res) => {
  try {
    const limit = howMany(req.query.limit as string);
    let gameRecordsQuery = gameRecordsCol.col.limit(limit);
    let gameRecordsDocs;

    // const playerRef = req.query.playerRef as FirebaseRef;
    // if (playerRef)
    //   gameRecordsDocs = await queryForPlayersGameRecords(playerRef, limit);
    // else
    gameRecordsDocs = await gameRecordsQuery.get();

    const gameRecords: GameRecord[] = [];
    gameRecordsDocs.forEach((gameRecordDoc) => {
      const gameRecordNoRef = gameRecordDoc.data() as GameRecord;
      gameRecords.push({ ...gameRecordNoRef, firebaseRef: gameRecordDoc.id });
    });

    res.status(200).send({
      status: "success",
      message: `Game Records found (total: ${gameRecords.length}`,
      data: { gameRecords: gameRecords },
    });
  } catch (e) {
    res.status(500).json((e as Error).message);
  }
};

export const getGameRecord: ExpressApiRoute = async (req, res) => {
  try {
    const id = req.params.gameRecordId;

    const gameRecordRef = gameRecordsCol.col.doc(id);

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
        data: { gameRecord: gameRecordDoc.data() },
      });
  } catch (e) {
    res.status(500).json((e as Error).message);
  }
};

export const postGameRecordApi: ExpressApiRoute = async (req, res) => {
  try {
    const gameRecord =
      typeof req.body === "string" ? JSON.parse(req.body) : req.body;

    const gameRecordRef = await gameRecordsCol.col.add(gameRecord);

    res.status(200).send({
      status: "success",
      message: "Game Record added successfully",
      data: { id: gameRecordRef.id },
    });
  } catch (e) {
    res.status(500).json((e as Error).message);
  }
};
