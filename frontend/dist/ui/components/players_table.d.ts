export default class PlayersTable extends HTMLElement {
    readonly title: string;
    readonly limit: number | "max";
    readonly isBrazilian: boolean | undefined;
    static readonly tag: string;
    private currentPlayer;
    private getPlayers;
    constructor(title?: string, limit?: number | "max", isBrazilian?: boolean | undefined);
    connectedCallback(): Promise<void>;
    private setPlayersTable;
    private get playerPicture();
}
