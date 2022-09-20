import { ExpressApiRoute } from "../../infra";

import { Player } from "../../../../go_brasil_ranking/src/models/player";

import { fakePlayers } from "./data/fake_players";

import { postPlayer } from "../api/players_api";

export const mockPopulatePlayers = async (): Promise<Player[]> => {
  const fakePlayersWithFirebaseRef: Player[] = [];

  for (let i = 0; i < fakePlayers.length; i++) {
    const fakePlayer = fakePlayers[i];
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
      status: "success",
      message: "Jogadores adicionados com sucesso.",
      data: { players: players },
    });
  } catch (e) {
    res.status(500).json((e as Error).message);
  }
};
