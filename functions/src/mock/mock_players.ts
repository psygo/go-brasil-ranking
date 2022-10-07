import { ExpressApiRoute } from "../infra";

import { Player } from "../../../frontend/src/models/player";

import { players } from "./data/players";
import { postPlayer } from "../api/post_player_api";

export const mockPopulatePlayers = async (): Promise<Player[]> => {
  const fakePlayersWithFirebaseRef: Player[] = [];

  const length = players.length;
  for (let i = 0; i < length; i++) {
    const fakePlayer = players[i];
    const ref = i.toString();

    const fakePlayerOnDb = await postPlayer(fakePlayer, ref);

    fakePlayersWithFirebaseRef.push(fakePlayerOnDb);
  }

  return fakePlayersWithFirebaseRef;
};

export const mockPopulatePlayersApi: ExpressApiRoute = async (_, res) => {
  try {
    const players = await mockPopulatePlayers();

    res.status(200).send({
      status: "Successo",
      message: "Jogadores adicionados com sucesso.",
      data: { players: players },
    });
  } catch (e) {
    res.status(500).json((e as Error).message);
  }
};
