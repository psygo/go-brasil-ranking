"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevRouter = exports.Router = exports.getRouter = exports.RouteEnum = void 0;
const env_1 = require("../infra/env");
const switcher_1 = __importDefault(require("./switcher"));
var RouteEnum;
(function (RouteEnum) {
    RouteEnum["home"] = "/";
    RouteEnum["players"] = "/jogadores";
    RouteEnum["gameEvents"] = "/eventos";
    RouteEnum["gameRecords"] = "/partidas";
    RouteEnum["about"] = "/sobre";
    RouteEnum["admin"] = "/admin";
    RouteEnum["unknown"] = "/404";
})(RouteEnum = exports.RouteEnum || (exports.RouteEnum = {}));
const getRouter = () => {
    switch (env_1.envState) {
        case env_1.EnvState.dev:
            const router = DevRouter.singleInstance();
            router.manualRouting("/");
            return router;
        case env_1.EnvState.prod:
            return ProdRouter.singleInstance();
        default:
            throw new Error("Not in any valid state for the application as a whole.");
    }
};
exports.getRouter = getRouter;
class Router {
    _currentRoute = RouteEnum.home;
    get currentRoute() {
        return this._currentRoute;
    }
    constructor() {
        this.routeDomContentLoadedListener();
        this.routeClickListener();
        this.routePopstateListener();
    }
    routeSwitcth = () => {
        new switcher_1.default(this._currentRoute).switch();
    };
    routeDomContentLoadedListener = () => {
        document.addEventListener("DOMContentLoaded", (_) => {
            this._currentRoute = location.pathname;
            this.routeSwitcth();
        });
    };
    routePopstateListener = () => {
        window.addEventListener("popstate", (_) => {
            this._currentRoute = location.pathname;
            this.routeSwitcth();
        });
    };
    routeClickListener = () => {
        document.onclick = (evt) => {
            const routeLink = evt.target.closest("route-link");
            if (routeLink && routeLink.href) {
                this._currentRoute = routeLink.href;
                this.routeSwitcth();
                history.pushState(null, "", this._currentRoute);
            }
        };
    };
    manualRouting = (route) => {
        setTimeout(() => {
            this._currentRoute = route;
            history.pushState(null, "", this._currentRoute);
            this.routeSwitcth();
        }, 1);
    };
}
exports.Router = Router;
class ProdRouter extends Router {
    static instance;
    static singleInstance = () => {
        if (!ProdRouter.instance)
            ProdRouter.instance = new ProdRouter();
        return ProdRouter.instance;
    };
    constructor() {
        super();
    }
}
exports.default = ProdRouter;
class DevRouter extends ProdRouter {
    constructor() {
        super();
    }
    static instance;
    static singleInstance = () => {
        if (!DevRouter.instance)
            DevRouter.instance = new DevRouter();
        return DevRouter.instance;
    };
    routeDomContentLoadedListener = () => { };
}
exports.DevRouter = DevRouter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JvdXRpbmcvcm91dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHNDQUFrRDtBQUVsRCwwREFBa0M7QUFNbEMsSUFBWSxTQVFYO0FBUkQsV0FBWSxTQUFTO0lBQ25CLHVCQUFVLENBQUE7SUFDVixtQ0FBc0IsQ0FBQTtJQUN0QixvQ0FBdUIsQ0FBQTtJQUN2QixzQ0FBeUIsQ0FBQTtJQUN6Qiw2QkFBZ0IsQ0FBQTtJQUNoQiw2QkFBZ0IsQ0FBQTtJQUNoQiw2QkFBZ0IsQ0FBQTtBQUNsQixDQUFDLEVBUlcsU0FBUyxHQUFULGlCQUFTLEtBQVQsaUJBQVMsUUFRcEI7QUFFTSxNQUFNLFNBQVMsR0FBRyxHQUFXLEVBQUU7SUFDcEMsUUFBUSxjQUFRLEVBQUU7UUFDaEIsS0FBSyxjQUFRLENBQUMsR0FBRztZQUNmLE1BQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUMxQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzFCLE9BQU8sTUFBTSxDQUFDO1FBQ2hCLEtBQUssY0FBUSxDQUFDLElBQUk7WUFDaEIsT0FBTyxVQUFVLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDckM7WUFDRSxNQUFNLElBQUksS0FBSyxDQUFDLHdEQUF3RCxDQUFDLENBQUM7S0FDN0U7QUFDSCxDQUFDLENBQUM7QUFYVyxRQUFBLFNBQVMsYUFXcEI7QUFFRixNQUFzQixNQUFNO0lBQ2xCLGFBQWEsR0FBVSxTQUFTLENBQUMsSUFBSSxDQUFDO0lBRTlDLElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDO0lBRUQ7UUFDRSxJQUFJLENBQUMsNkJBQTZCLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUMv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