export default class AboutView extends HTMLElement {
    static readonly tag: string;
    connectedCallback(): Promise<void>;
    private static readonly moderatorEmail;
    private get moderatorLinkString();
    private setContent;
    private numberFaqQuestions;
}
