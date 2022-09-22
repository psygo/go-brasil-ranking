import { FirebaseRef } from "../../models/firebase_models";
export default class GameEventView extends HTMLElement {
    readonly gameEventRef: FirebaseRef;
    static readonly tag: string;
    private gameEvent?;
    constructor(gameEventRef: FirebaseRef);
    private getGameEvent;
    connectedCallback(): Promise<void>;
    private setGameEventPage;
}
