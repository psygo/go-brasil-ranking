import {
  BrazilianState,
  CountryName,
} from "../../../../go_brasil_ranking/src/models/country";
import { Player } from "../../../../go_brasil_ranking/src/models/player";
import { ExpressApiRoute } from "../../infra";
import { playersCol } from "../collections/players_col";

export const fakePlayers: readonly Player[] = [
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
    gamesTotal: 0,
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
    gamesTotal: 0,
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
    gamesTotal: 0,
  },
  {
    name: "Laura Augustina Avram",
    countries: [
      {
        name: CountryName.romania,
      },
    ],
    elo: 2250,
    gamesTotal: 0,
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
    gamesTotal: 0,
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
    gamesTotal: 0,
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
    gamesTotal: 0,
  },
  {
    name: "Gabriel Ventura",
    countries: [
      {
        name: CountryName.brazil,
      },
    ],
    elo: 1600,
    gamesTotal: 0,
  },
  {
    name: "Gabriel Garcia",
    countries: [
      {
        name: CountryName.brazil,
      },
    ],
    elo: 550,
    gamesTotal: 0,
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
    gamesTotal: 0,
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
    gamesTotal: 0,
  },
];

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
