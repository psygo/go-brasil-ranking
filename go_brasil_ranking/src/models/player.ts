import { Country } from "./country";
import { SerializedElo } from "./elo";
import { Author, FirebaseDoc, FirebaseRef } from "./firebase_models";

// TODO1: Add field for email on the form
interface _Player extends FirebaseDoc {
  firebaseRef?: FirebaseRef;
  name: string;
  countries: readonly Country[];
  elo: SerializedElo;
  dateCreated?: number;
  author?: Author;
  gamesTotal?: number;
}
export type Player = Readonly<_Player>;
