import { db } from "../..";
import {
  Player,
  BrazilianState,
  CountryFlag,
} from "../../../../go_brasil_ranking/src/models/player";
import { ExpressApiRoute } from "../../infra";

export const dummyPlayers: readonly Player[] = [
  {
    firebaseRef: "0",
    name: "Philippe Fanaro",
    countries: [
      {
        name: "Brazil",
        flag: CountryFlag.brazil,
        state: BrazilianState.sp,
        city: "São Paulo",
      },
    ],
    elo: 2150,
  },
  {
    firebaseRef: "1",
    name: "Fabrício Caluza Machado",
    countries: [
      {
        name: "Brazil",
        flag: CountryFlag.brazil,
        state: BrazilianState.df,
        city: "Brasília",
      },
    ],
    elo: 1750,
  },
  {
    firebaseRef: "2",
    name: "Ariel Oliveira",
    countries: [
      {
        name: "Brazil",
        flag: CountryFlag.brazil,
        state: BrazilianState.df,
        city: "São Paulo",
      },
    ],
    elo: 1050,
  },
];

export const mockPopulatePlayers = async (): Promise<void> => {
  const playersColl = db.collection("players");

  for (const player of dummyPlayers) {
    await playersColl.doc(player.firebaseRef).set(player);
  }
};

export const mockPopulatePlayersApi: ExpressApiRoute = async (_, res) => {
  try {
    await mockPopulatePlayers();

    res.status(200).send({
      status: "success",
      message: "Player added successfully",
      data: { players: dummyPlayers },
    });
  } catch (e) {
    res.status(500).json((e as Error).message);
  }
};
