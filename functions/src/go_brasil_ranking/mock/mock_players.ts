import {
  BrazilianState,
  CountryName,
  Player,
  ToServerPlayers,
} from "../../../../go_brasil_ranking/src/models/player";
import { ExpressApiRoute } from "../../infra";
import { playersCol } from "../collections/players_col";

export const fakePlayers: readonly ToServerPlayers.Player__Post[] = [
  {
    name: "Philippe Fanaro",
    countries: [
      {
        name: CountryName.brazil,
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
        name: CountryName.brazil,
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
        name: CountryName.brazil,
        state: BrazilianState.df,
        city: "São Paulo",
      },
    ],
    elo: 1050,
  },
  {
    name: "Laura Augustina Avram",
    countries: [
      {
        name: CountryName.romania,
      },
    ],
    elo: 2250,
  },
  {
    name: "Emanuel Araújo",
    countries: [
      {
        name: CountryName.brazil,
        state: BrazilianState.rj,
        city: "São Paulo",
      },
    ],
    elo: 1650,
  },
  {
    name: "Sophie Pagès",
    countries: [
      {
        name: CountryName.france,
      },
      {
        name: CountryName.brazil,
      },
    ],
    elo: 700,
  },
  {
    name: "Laércio Pereira",
    countries: [
      {
        name: CountryName.brazil,
        state: BrazilianState.pr,
        city: "Curitiba",
      },
    ],
    elo: 2000,
  },
  {
    name: "Gabriel Ventura",
    countries: [
      {
        name: CountryName.brazil,
      },
    ],
    elo: 1600,
  },
  {
    name: "Gabriel Garcia",
    countries: [
      {
        name: CountryName.brazil,
      },
    ],
    elo: 550,
  },
  {
    name: "Vanderson da Silva Rodrigues",
    countries: [
      {
        name: CountryName.brazil,
        state: BrazilianState.al,
      },
    ],
    elo: 550,
  },
  {
    name: "Audrey Luciano Filho",
    countries: [
      {
        name: CountryName.brazil,
        state: BrazilianState.ce,
      },
    ],
    elo: 900,
  },
];

export const mockPopulatePlayers = async (): Promise<Player[]> => {
  const mockPlayersWithFirebaseRef: Player[] = [];

  for (let i = 0; i < fakePlayers.length; i++) {
    const player = fakePlayers[i];

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
