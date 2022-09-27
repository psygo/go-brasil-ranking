export default class GameEventsTable extends HTMLElement {
    readonly title: string;
    readonly limit: number | "max";
    static readonly tag: string;
    private getGameEvents;
    constructor(title?: string, limit?: number | "max");
    connectedCallback(): Promise<void>;
    private setPlayersTable;
}
