import { ExpressApiRoute } from "../../infra";

import { Player } from "../../../../go_brasil_ranking/src/models/player";
import { playersCol } from "../collections/players_col";
import { fakePlayers } from "./data/fake_players";

export const mockPopulatePlayers = async (): Promise<Player[]> => {
  const mockPlayersWithFirebaseRef: Player[] = [];

  for (let i = 0; i < fakePlayers.length; i++) {
    const player = fakePlayers[i];
    const ref = i.toString();

    await playersCol.col.doc(ref).set(player);

    const playerToReturn = { firebaseRef: ref, ...player };

    mockPlayersWithFirebaseRef.push(playerToReturn);
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
