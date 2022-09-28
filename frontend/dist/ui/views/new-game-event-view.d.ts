export default class NewGameEventView extends HTMLElement {
    static readonly tag: string;
    private currentUser;
    constructor();
    connectedCallback(): Promise<void>;
    private type;
    private setNewGameEventForm;
    private changeDatesOnForm;
    private changeDatesType;
    private numberOfDatesForTournament;
    private get tournamentDates();
    private get name();
    private get link();
    private get dateInit();
    private get dateEnd();
    private onSubmit;
}
