import { FirebaseRef } from "../../models/firebase_models";
export default class PlayerView extends HTMLElement {
    readonly playerRef: FirebaseRef;
    static readonly tag: string;
    constructor(playerRef: FirebaseRef);
    private getPlayers;
    connectedCallback(): Promise<void>;
    private setPlayersPage;
}
