export default class AdminView extends HTMLElement {
    static readonly tag: string;
    private currentUser;
    constructor();
    connectedCallback(): Promise<void>;
    private alreadySignedIn;
    private signInForm;
    private signIn;
}
