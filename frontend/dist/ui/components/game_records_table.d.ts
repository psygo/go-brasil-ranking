import { FirebaseRef } from "../../models/firebase_models";
export default class GameRecordsTable extends HTMLElement {
    readonly title: string;
    readonly playerRef: FirebaseRef;
    static readonly tag: string;
    private getGameRecords;
    private readonly gameRecords;
    private startAfter;
    constructor(title?: string, playerRef?: FirebaseRef);
    private get playerName();
    connectedCallback(): Promise<void>;
    private setPagination;
    private setCards;
    private signedEloDelta;
    private gameEventLink;
}
