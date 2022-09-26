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
            router.manualRouting("/jogadores/novo");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JvdXRpbmcvcm91dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHNDQUFrRDtBQUVsRCwwREFBa0M7QUFNbEMsSUFBWSxTQVFYO0FBUkQsV0FBWSxTQUFTO0lBQ25CLHVCQUFVLENBQUE7SUFDVixtQ0FBc0IsQ0FBQTtJQUN0QixvQ0FBdUIsQ0FBQTtJQUN2QixzQ0FBeUIsQ0FBQTtJQUN6Qiw2QkFBZ0IsQ0FBQTtJQUNoQiw2QkFBZ0IsQ0FBQTtJQUNoQiw2QkFBZ0IsQ0FBQTtBQUNsQixDQUFDLEVBUlcsU0FBUyxHQUFULGlCQUFTLEtBQVQsaUJBQVMsUUFRcEI7QUFFTSxNQUFNLFNBQVMsR0FBRyxHQUFXLEVBQUU7SUFDcEMsUUFBUSxjQUFRLEVBQUU7UUFDaEIsS0FBSyxjQUFRLENBQUMsR0FBRztZQUNmLE1BQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUMxQyxNQUFNLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDeEMsT0FBTyxNQUFNLENBQUM7UUFDaEIsS0FBSyxjQUFRLENBQUMsSUFBSTtZQUNoQixPQUFPLFVBQVUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNyQztZQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMsd0RBQXdELENBQUMsQ0FBQztLQUM3RTtBQUNILENBQUMsQ0FBQztBQVhXLFFBQUEsU0FBUyxhQVdwQjtBQUVGLE1BQXNCLE1BQU07SUFDbEIsYUFBYSxHQUFVLFNBQVMsQ0FBQyxJQUFJLENBQUM7SUFFOUMsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7SUFFRDtRQUNFLElBQUksQ0FBQyw2QkFBNkIsRUFBRSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lB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