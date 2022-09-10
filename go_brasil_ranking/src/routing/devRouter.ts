import ProdRouter from "./prodRouter";

export default class DevRouter extends ProdRouter {
  private constructor() {
    super();
  }

  protected static instance: ProdRouter;

  static singleInstance = (): ProdRouter => {
    if (!DevRouter.instance) DevRouter.instance = new DevRouter();

    return DevRouter.instance;
  };

  protected routeDomContentLoadedListener = (): void => {};
}
