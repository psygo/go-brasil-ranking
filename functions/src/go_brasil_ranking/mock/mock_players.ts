import { db } from "../..";
import { FirebaseRef } from "../../../../go_brasil_ranking/src/models/firebase_ref";
import {
  SerializedPlayer,
  BrazilianState,
  CountryFlag,
} from "../../../../go_brasil_ranking/src/models/player";
import { ExpressApiRoute } from "../../infra";

export const dummyPlayers: readonly SerializedPlayer[] = [
  {
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

export const mockPopulatePlayers = async (): Promise<FirebaseRef[]> => {
  const playersColl = db.collection("players");
  const playersRefs: FirebaseRef[] = [];

  for (const player of dummyPlayers) {
    const playerRef = await playersColl.add(player);
    playersRefs.push(playerRef.id);
  }

  return playersRefs;
};

export const mockPopulatePlayersApi: ExpressApiRoute = async (_, res) => {
  try {
    const playersRefs = await mockPopulatePlayers();

    res.status(200).send({
      status: "success",
      message: "Player added successfully",
      data: { playersRefs: playersRefs },
    });
  } catch (e) {
    res.status(500).json((e as Error).message);
  }
};
