import Serializable, { JsonInterface } from "../infra/serializable";
import Elo from "./elo";

export interface Country {
  name: string;
  state?: string;
  city?: string;
}

export default interface SerializedPlayer {
  name: string;
  countries: Country[];
  elo: number;
}

export class Player implements Serializable {
  constructor(
    public readonly name: string,
    public readonly countries: readonly Country[],
    public readonly elo: Elo
  ) {}

  serialize = (): SerializedPlayer => ({
    name: this.name,
    countries: this.countries as Country[],
    elo: this.elo.serialize(),
  });

  static deserialize = (json: JsonInterface): Player =>
    new Player(
      json.name as string,
      json.countries as Country[],
      Elo.deserialize(json.elo as number)
    );
}
