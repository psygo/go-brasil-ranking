import { FirebaseRef } from "../../../../frontend/src/models/firebase_models";
import { GameRecord } from "../../../../frontend/src/models/game_record";
import { gameRecordsCol } from "../../collections/game_records_col";
import { ExpressApiRoute, howMany } from "../../infra";

export const queryForPlayersGameRecords = async (
  playerRef: FirebaseRef,
  limit: number
) => {
  const playerIsBlack = gameRecordsCol.col
    .where("blackRef", "==", playerRef)
    .orderBy("date", "desc")
    .limit(limit)
    .get();
  const playerIsWhite = gameRecordsCol.col
    .where("whiteRef", "==", playerRef)
    .orderBy("date", "desc")
    .limit(limit)
    .get();

  const [snapsAsBlack, snapsAsWhite] = await Promise.all([
    playerIsBlack,
    playerIsWhite,
  ]);

  const playerAsBlack = snapsAsBlack.docs.map((g) => {
    const game = g.data() as GameRecord;
    return { ...game, firebaseRef: g.id };
  });
  const playerAsWhite = snapsAsWhite.docs.map((g) => {
    const game = g.data() as GameRecord;
    return { ...game, firebaseRef: g.id };
  });

  const allPlayerGames = [...playerAsBlack, ...playerAsWhite];

  allPlayerGames.sort((g1, g2) => g1.date - g2.date);
  allPlayerGames.sort((g1, g2) => g1.dateCreated! - g2.dateCreated!);

  return allPlayerGames;
};

export const getGameRecords: ExpressApiRoute = async (req, res) => {
  try {
    const limit = howMany(req.query.limit as string);
    let gameRecords: GameRecord[] = [];

    const playerRef = req.query.jogadorRef as FirebaseRef;
    if (playerRef)
      gameRecords = await queryForPlayersGameRecords(playerRef, limit);
    else {
      let gameRecordsDocs = await gameRecordsCol.col
        .orderBy("date")
        .orderBy("dateCreated")
        .limit(limit)
        .get();

      gameRecordsDocs.forEach((gameRecordDoc) => {
        const gameRecordNoRef = gameRecordDoc.data() as GameRecord;
        gameRecords.push({ ...gameRecordNoRef, firebaseRef: gameRecordDoc.id });
      });
    }

    res.status(200).send({
      status: "success",
      message: `Partidas encontradas (total: ${gameRecords.length})`,
      data: { gameRecords: gameRecords },
    });
  } catch (e) {
    res.status(500).json((e as Error).message);
  }
};
