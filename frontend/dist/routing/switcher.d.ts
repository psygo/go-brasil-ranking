import { Route, Router } from "./router";
export default class Switcher {
    readonly currentRoute: Route;
    protected readonly router: Router;
    constructor(currentRoute?: Route);
    protected get mainElement(): HTMLElement;
    switch: () => void;
    private get prefixRoute();
    private get splitPrefixRoute();
    protected get isNewRoute(): boolean;
}
