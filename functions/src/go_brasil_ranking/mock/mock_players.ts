import {
  BrazilianState,
  CountryFlag,
  Player,
  ToServerPlayers,
} from "../../../../go_brasil_ranking/src/models/player";
import { ExpressApiRoute } from "../../infra";
import { playersCol } from "../collections/players_col";

export const dummyPlayers: readonly ToServerPlayers.Player__Post[] = [
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

export const mockPopulatePlayers = async (): Promise<Player[]> => {
  const mockPlayersWithFirebaseRef: Player[] = [];

  for (let i = 0; i < dummyPlayers.length; i++) {
    const player = dummyPlayers[i];

    await playersCol.col.doc(i.toString()).set({ ...player, gamesTotal: 0 });

    mockPlayersWithFirebaseRef.push({
      firebaseRef: i.toString(),
      gamesTotal: 0,
      ...player,
    });
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
