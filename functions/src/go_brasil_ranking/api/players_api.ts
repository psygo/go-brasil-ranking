import * as admin from "firebase-admin";

import { ExpressApiRoute, howMany, parseBody } from "../../infra";

import { playersCol } from "../collections/players_col";

import { Player } from "../../../../go_brasil_ranking/src/models/player";
import { FirebaseRef } from "../../../../go_brasil_ranking/src/models/firebase_models";

export const getPlayers: ExpressApiRoute = async (req, res) => {
  try {
    const limit = howMany(req.query.limite as string);

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
      status: "Sucesso",
      message: `Jogadores encontrados (total: ${players.length}`,
      data: { players: players },
    });
  } catch (e) {
    res.status(500).json((e as Error).message);
  }
};

export const getPlayer: ExpressApiRoute = async (req, res) => {
  try {
    const id = req.params.playerId;

    const playerRef = playersCol.col.doc(id);

    const playerDoc = await playerRef.get();

    if (req.query.existe === "")
      res.status(200).send({
        status: "Sucesso",
        message: "Jogador existe.",
        data: playerDoc.exists,
      });
    else
      res.status(200).send({
        status: "Sucesso",
        message: "Jogador encontrado.",
        data: { player: playerDoc.data() },
      });
  } catch (e) {
    res.status(500).json((e as Error).message);
  }
};

export const postPlayer = async (
  player: Player,
  firebaseRef?: FirebaseRef
): Promise<Player> => {
  const now = admin.firestore.Timestamp.now().toMillis();

  const playerOnDb = {
    ...player,
    dateCreated: now,
    gamesTotal: 0,
  };

  if (!firebaseRef) {
    const playerRef = await playersCol.col.add(playerOnDb);
    return { ...playerOnDb, firebaseRef: playerRef.id };
  } else {
    await playersCol.col.doc(firebaseRef).set(playerOnDb);
    return { ...playerOnDb, firebaseRef: firebaseRef };
  }
};

export const postPlayerApi: ExpressApiRoute = async (req, res) => {
  try {
    const player = parseBody(req.body);

    const playerOnDbWithRef = await postPlayer(player);

    console.log(playerOnDbWithRef);
    res.status(200).send({
      status: "Sucesso",
      message: "Jogador adicionado com sucesso.",
      data: { player: playerOnDbWithRef },
    });
  } catch (e) {
    res.status(500).json((e as Error).message);
  }
};
