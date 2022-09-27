import * as admin from "firebase-admin";
import { CountryName } from "../../../../frontend/src/models/country";

import { FirebaseRef } from "../../../../frontend/src/models/firebase_models";
import { Player } from "../../../../frontend/src/models/player";
import { playersCol } from "../../collections/players_col";
import { ExpressApiRoute, parseBody } from "../../infra";

export const postPlayer = async (
  player: Player,
  firebaseRef?: FirebaseRef
): Promise<Player> => {
  const now = admin.firestore.Timestamp.now().toMillis();

  const isBrazilian = player.countries.some(
    (c) => c.name === CountryName.brazil
  );

  let playerOnDb = {
    ...player,
    isBrazilian: isBrazilian,
    dateCreated: now,
    gamesTotal: 0,
  };

  if (player.picture) playerOnDb = { ...playerOnDb, picture: player.picture };

  if (!firebaseRef) {
    const playerRef = await playersCol.col.add(playerOnDb);
    playerOnDb = { ...playerOnDb, firebaseRef: playerRef.id };
  } else {
    await playersCol.col.doc(firebaseRef).set(playerOnDb);
    playerOnDb = { ...playerOnDb, firebaseRef: firebaseRef };
  }

  return playerOnDb;
};

export const postPlayerApi: ExpressApiRoute = async (req, res) => {
  try {
    const player = parseBody(req.body);

    const playerOnDbWithRef = await postPlayer(player);

    res.status(200).send({
      status: "Sucesso",
      message: "Jogador adicionado com sucesso.",
      data: { player: playerOnDbWithRef },
    });
  } catch (e) {
    res.status(500).json((e as Error).message);
  }
};
