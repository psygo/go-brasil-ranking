export default class GameEventsTable extends HTMLElement {
    readonly title: string;
    static readonly tag: string;
    private getGameEvents;
    private readonly gameEvents;
    private startAfter;
    constructor(title?: string);
    connectedCallback(): Promise<void>;
    private setPagination;
    private setCards;
}
