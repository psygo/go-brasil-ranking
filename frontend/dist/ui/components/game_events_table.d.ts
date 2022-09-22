export default class GameEventsTable extends HTMLElement {
    readonly limit: number | "max";
    static readonly tag: string;
    private getGameEvents;
    constructor(limit?: number | "max");
    connectedCallback(): Promise<void>;
    private setPlayersTable;
}
