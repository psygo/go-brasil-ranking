import { FirebaseRef } from "../../models/firebase_models";
import { GameRecord } from "../../models/game_record";
export default class GameRecordsTable extends HTMLElement {
    readonly limit: number | "max";
    readonly playerRef: FirebaseRef;
    static readonly tag: string;
    private getGameRecords;
    constructor(limit?: number | "max", playerRef?: FirebaseRef);
    connectedCallback(): Promise<void>;
    setGameRecordsTable: (gameRecords: GameRecord[]) => void;
    private gameEventLink;
}
