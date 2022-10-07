import { ExpressApiRoute } from "../infra";

import { Player } from "../../../frontend/src/models/player";

import { players } from "../data/players";
import { postPlayer } from "../api/post_player_api";

export const populatePlayers = async (): Promise<Player[]> => {
  const playersWithFirebaseRef: Player[] = [];

  const length = players.length;
  for (let i = 0; i < length; i++) {
    const player = players[i];
    const ref = i.toString();

    const playerOnDb = await postPlayer(player, ref);

    playersWithFirebaseRef.push(playerOnDb);
  }

  return playersWithFirebaseRef;
};

export const populatePlayersApi: ExpressApiRoute = async (_, res) => {
  try {
    const players = await populatePlayers();

    res.status(200).send({
      status: "Successo",
      message: "Jogadores adicionados com sucesso.",
      data: { players: players },
    });
  } catch (e) {
    res.status(500).json((e as Error).message);
  }
};
