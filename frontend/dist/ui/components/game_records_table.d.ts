import { FirebaseRef } from "../../models/firebase_models";
export default class GameRecordsTable extends HTMLElement {
    readonly title: string;
    readonly limit: number | "max";
    readonly playerRef: FirebaseRef;
    static readonly tag: string;
    private getGameRecords;
    constructor(title?: string, limit?: number | "max", playerRef?: FirebaseRef);
    private get playerName();
    private gameRecords;
    connectedCallback(): Promise<void>;
    setGameRecordsTable: () => void;
    private signedEloDelta;
    private gameEventLink;
}
