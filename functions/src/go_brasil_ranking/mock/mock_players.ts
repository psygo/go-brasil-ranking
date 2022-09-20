import { ExpressApiRoute } from "../../infra";

import { Player } from "../../../../go_brasil_ranking/src/models/player";

import { fakePlayers } from "./data/fake_players";

import { postPlayer } from "../api/players";

export const mockPopulatePlayers = async (): Promise<Player[]> => {
  const mockPlayersWithFirebaseRef: Player[] = [];

  for (let i = 0; i < fakePlayers.length; i++) {
    const fakePlayer = fakePlayers[i];

    const fakePlayerOnDb = await postPlayer(fakePlayer, i.toString());

    mockPlayersWithFirebaseRef.push(fakePlayerOnDb);
  }

  return mockPlayersWithFirebaseRef;
};

export const mockPopulatePlayersApi: ExpressApiRoute = async (_, res) => {
  try {
    const players = await mockPopulatePlayers();

    res.status(200).send({
      status: "success",
      message: "Player added successfully",
      data: { players: players },
    });
  } catch (e) {
    res.status(500).json((e as Error).message);
  }
};
