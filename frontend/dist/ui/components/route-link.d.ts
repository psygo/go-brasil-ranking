export default class RouteLink extends HTMLElement {
    href: string;
    static readonly tag: string;
    constructor(href?: string);
    connectedCallback(): void;
}
