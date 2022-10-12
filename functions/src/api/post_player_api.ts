import { ExpressApiRoute, parseBody, postRankingData } from "../infra";

import { playersCol } from "../cols";

import { processPlayer } from "./process_player";

import { FirebaseRef } from "../../../frontend/src/models/firebase_models";
import { Player } from "../../../frontend/src/models/player";

export const postPlayer = async (
  player: Player,
  firebaseRef?: FirebaseRef
): Promise<Player> => {
  const playerOnDb = processPlayer(player);

  return await postRankingData(playersCol, playerOnDb, firebaseRef);
};

export const postPlayerApi: ExpressApiRoute = async (req, res) => {
  try {
    const player = parseBody(req.body);

    const playerOnDbWithRef = await postPlayer(player);

    res.status(200).send({
      status: "success",
      message: "Jogador adicionado com sucesso.",
      data: { player: playerOnDbWithRef },
    });
  } catch (e) {
    res.status(500).json((e as Error).message);
  }
};
