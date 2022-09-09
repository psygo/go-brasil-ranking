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
    countries: [...this.countries],
    elo: this.elo,
  });

  static deserialize = (json: any): Player => {
    return new Player(
      json.name as string,
      json.countries as SerializedCountry[],
      json.elo as number
    );
  };
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
    elo: 2100,
  },
];
