import { Country } from "./country";
import { SerializedElo } from "./elo";
import { Author, FirebaseDoc, FirebaseRef } from "./firebase_models";
import { GameRecord } from "./game_record";
export interface _Player extends FirebaseDoc {
    firebaseRef?: FirebaseRef;
    name: string;
    email?: string;
    nicks?: readonly Nick[];
    picture?: string;
    countries: readonly Country[];
    isBrazilian?: boolean;
    elo: SerializedElo;
    dateCreated?: number;
    author?: Author;
    gamesTotal?: number;
    lastGame?: GameRecord;
}
export declare type Player = Readonly<_Player>;
export declare enum GoServers {
    ogs = "OGS",
    kgs = "KGS",
    fox = "Fox",
    tygem = "Tygem",
    wbaduk = "WBaduk",
    pandanet = "Pandanet"
}
interface _Nick extends FirebaseDoc {
    name: string;
    server: GoServers;
}
export declare type Nick = Readonly<_Nick>;
export {};
