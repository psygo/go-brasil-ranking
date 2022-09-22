export declare type Route = string;
export declare enum RouteEnum {
    home = "/",
    players = "/jogadores",
    gameEvents = "/eventos",
    gameRecords = "/partidas",
    about = "/sobre",
    admin = "/admin",
    unknown = "/404"
}
export declare const getRouter: () => Router;
export declare abstract class Router {
    private _currentRoute;
    get currentRoute(): Route;
    protected constructor();
    private routeSwitcth;
    protected routeDomContentLoadedListener: () => void;
    private routePopstateListener;
    private routeClickListener;
    manualRouting: (route: string) => void;
}
export default class ProdRouter extends Router {
    protected static instance: ProdRouter;
    static singleInstance: () => ProdRouter;
    protected constructor();
}
export declare class DevRouter extends ProdRouter {
    private constructor();
    protected static instance: ProdRouter;
    static singleInstance: () => ProdRouter;
    protected routeDomContentLoadedListener: () => void;
}
