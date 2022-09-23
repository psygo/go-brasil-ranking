export default class PlayersTable extends HTMLElement {
    static readonly tag: string;
    private currentPlayer;
    private getPlayers;
    connectedCallback(): Promise<void>;
    private setPlayersTable;
    private get playerPicture();
    private get lastGameLink();
}
