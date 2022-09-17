import { Country } from "./country";
import { SerializedElo } from "./elo";
import { FirebaseRef } from "./firebase_ref";

interface _Player {
  firebaseRef?: FirebaseRef;
  name: string;
  countries: readonly Country[];
  elo: SerializedElo;
  gamesTotal?: number;
}
export type Player = Readonly<_Player>;
