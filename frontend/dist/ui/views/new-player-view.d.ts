export default class NewPlayerView extends HTMLElement {
    static readonly tag: string;
    private currentUser;
    constructor();
    connectedCallback(): Promise<void>;
    private get countryOptions();
    private addCountrySelect;
    private get brStateOptions();
    private setNewPlayerForm;
    private get name();
    private get email();
    private picture;
    private pictureOnChange;
    private get countries();
    private get brState();
    private get brCity();
    private get completeCountries();
    private get elo();
    private onSubmit;
}
