export default class PlayersTable extends HTMLElement {
    static readonly tag: string;
    private getPlayers;
    connectedCallback(): Promise<void>;
    private setPlayersTable;
    private currentPlayer;
    private lastGameLink;
}
