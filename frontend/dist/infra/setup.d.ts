import { Auth } from "firebase/auth";
import { Router } from "../routing/router";
export default class Setup {
    private static instance;
    private readonly _router;
    private app;
    auth: Auth | null;
    private constructor();
    get router(): Router;
    initAuth: () => void;
    private define;
    static getInstance: () => Setup;
}
