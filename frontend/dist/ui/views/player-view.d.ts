import { FirebaseRef } from "../../models/firebase_models";
export default class PlayerView extends HTMLElement {
    readonly playerRef: FirebaseRef;
    static readonly tag: string;
    constructor(playerRef: FirebaseRef);
    private getPlayer;
    private player;
    connectedCallback(): Promise<void>;
    private fetchPlayerGameRecords;
    private setGraph;
    private setPlayersPage;
    private setPlayerCard;
}
