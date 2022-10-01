export default abstract class UiTable<T> extends HTMLElement {
  protected abstract startAfter: number;
  protected abstract readonly data: T[];

  constructor() {
    super();
  }

  protected abstract getData(): Promise<void>;

  protected toggleLoader = (): void => {
    const loaderDiv: HTMLDivElement = this.querySelector(".loader-container")!;
    const loaderDivDisplay = loaderDiv.style.display;
    loaderDiv.style.display = loaderDivDisplay === "none" ? "flex" : "none";
  };
}
