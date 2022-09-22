import { FirebaseRef } from "../../models/firebase_models";
export default class GameRecordView extends HTMLElement {
    readonly gameRecordRef: FirebaseRef;
    static readonly tag: string;
    private gameRecord?;
    constructor(gameRecordRef: FirebaseRef);
    private getGameRecord;
    connectedCallback(): Promise<void>;
    private setGameRecordPage;
    private addSgfDiagram;
}
