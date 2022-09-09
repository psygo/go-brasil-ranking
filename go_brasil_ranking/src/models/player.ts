export interface SerializedCountry {
  name: string;
  state?: string;
  city?: string;
}

export default interface SerializedPlayer {
  name: string;
  countries: SerializedCountry[];
  elo: number;
}

export class Player {
  constructor(
    public readonly name: string,
    public readonly countries: readonly SerializedCountry[],
    public readonly elo: number
  ) {}

  serialize = (): SerializedPlayer => ({
    name: this.name,
    countries: this.countries as SerializedCountry[],
    elo: this.elo,
  });

  static deserialize = (json: any): Player =>
    new Player(
      json.name as string,
      json.countries as SerializedCountry[],
      json.elo as number
    );
}

export const dummyPlayers: SerializedPlayer[] = [
  {
    name: "Philippe Fanaro",
    countries: [
      {
        name: "Brazil",
        state: "SP",
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
        state: "DF",
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
        state: "SP",
        city: "São Paulo",
      },
    ],
    elo: 1050,
  },
];
