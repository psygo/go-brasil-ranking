export default class NewGameRecordView extends HTMLElement {
    static readonly tag: string;
    private currentUser;
    constructor();
    connectedCallback(): Promise<void>;
    private setNewGameRecordForm;
    private get difference();
    private resignSelectOnchange;
    private get gameEventRef();
    private gameEventTypeSelectOnChange;
    private get blackRef();
    private get whiteRef();
    private get date();
    private sgf;
    private sgfOnChange;
    private get whoWins();
    private validate;
    private onSubmit;
}
