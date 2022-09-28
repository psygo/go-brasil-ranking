export default class PlayersTable extends HTMLElement {
    readonly title: string;
    readonly isBrazilian: boolean | undefined;
    static readonly tag: string;
    private getPlayers;
    private startAfter;
    private readonly players;
    constructor(title?: string, isBrazilian?: boolean | undefined);
    connectedCallback(): Promise<void>;
    private setPagination;
    private i;
    private lastElo;
    private setCards;
}
