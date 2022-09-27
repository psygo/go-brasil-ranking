import { FirebaseRef } from "../../../../frontend/src/models/firebase_models";
import { GameRecord } from "../../../../frontend/src/models/game_record";
import { gameRecordsCol } from "../../collections/game_records_col";
import { ExpressApiRoute, queryLimit } from "../../infra";

export const queryForPlayersGameRecords = async (playerRef: FirebaseRef) => {
  const playerIsBlack = gameRecordsCol.col
    .where("blackRef", "==", playerRef)
    .orderBy("date", "desc")
    .get();
  const playerIsWhite = gameRecordsCol.col
    .where("whiteRef", "==", playerRef)
    .orderBy("date", "desc")
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

  allPlayerGames.sort((g1, g2) => g2.date - g1.date);
  allPlayerGames.sort((g1, g2) => g2.dateCreated! - g1.dateCreated!);

  return allPlayerGames;
};

export const getGameRecords: ExpressApiRoute = async (req, res) => {
  try {
    const startAfter = parseInt(req.query.de as string);
    const playerRef = req.query.jogadorRef as FirebaseRef;

    let gameRecords: GameRecord[] = [];

    if (playerRef) gameRecords = await queryForPlayersGameRecords(playerRef);
    else {
      let gameRecordsDocs = await gameRecordsCol.col
        .orderBy("date", "desc")
        .get();

      const docs = gameRecordsDocs.docs.slice(
        startAfter,
        startAfter + queryLimit
      );

      docs.forEach((gameRecordDoc) => {
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
