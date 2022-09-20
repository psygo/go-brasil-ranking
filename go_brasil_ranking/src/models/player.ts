import { Country } from "./country";
import { SerializedElo } from "./elo";
import { FirebaseDoc, FirebaseRef, Uid } from "./firebase_ref";

interface _Player extends FirebaseDoc {
  firebaseRef?: FirebaseRef;
  name: string;
  countries: readonly Country[];
  elo: SerializedElo;
  dateCreated?: number;
  author?: Uid;
  gamesTotal?: number;
}
export type Player = Readonly<_Player>;
