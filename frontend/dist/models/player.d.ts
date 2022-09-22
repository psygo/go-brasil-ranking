import { Country } from "./country";
import { SerializedElo } from "./elo";
import { Author, FirebaseDoc, FirebaseRef } from "./firebase_models";
import { GameRecord } from "./game_record";
interface _Player extends FirebaseDoc {
    firebaseRef?: FirebaseRef;
    name: string;
    picture?: string;
    countries: readonly Country[];
    elo: SerializedElo;
    dateCreated?: number;
    author?: Author;
    gamesTotal?: number;
    lastGame?: GameRecord;
}
export declare type Player = Readonly<_Player>;
export {};
