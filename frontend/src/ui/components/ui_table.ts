import {
  DocumentData,
  getDocs,
  Query,
  QueryDocumentSnapshot,
} from "firebase/firestore";

import { Globals as g } from "../../infra/globals";
import {
  HtmlString,
  mapDocsWithFirebaseRef,
  RankingData,
} from "../../infra/utils";

export default abstract class UiTable<
  T extends RankingData
> extends HTMLElement {
  protected readonly data: T[] = [];

  /**
   * This is used for internal pagination, when the data accumulates,
   * not for pagination on queries.
   */
  protected startAfter: number = 0;

  private declare _lastVisible: QueryDocumentSnapshot<DocumentData>;

  constructor(public readonly title: string) {
    super();
  }

  async connectedCallback(): Promise<void> {
    this.prepareTable();

    this.toggleLoader();

    await this.getData();

    if (this.data.length > 0) {
      this.setLegend();
      this.setCaption();
      this.setCards();
      this.setPagination();
    }
  }

  protected abstract getData(): Promise<void>;

  protected get lastVisible(): QueryDocumentSnapshot<DocumentData> | {} {
    return this._lastVisible ? this._lastVisible : {};
  }

  protected resetLastVisible = (
    docs: QueryDocumentSnapshot<DocumentData>[]
  ): void => {
    this._lastVisible = docs[docs.length - 1];
  };

  protected firestoreQuery = async (q: Query<DocumentData>): Promise<void> => {
    const snaps = await getDocs(q);

    this.resetLastVisible(snaps.docs);

    const docsWithRef = mapDocsWithFirebaseRef<T>(snaps.docs);

    this.data.push(...docsWithRef);
  };

  protected toggleLoader = (): void => {
    const loaderDiv: HTMLDivElement = this.querySelector(".loader-container")!;
    const loaderDivDisplay = loaderDiv.style.display;
    loaderDiv.style.display = loaderDivDisplay === "none" ? "flex" : "none";
  };

  protected abstract get caption(): HtmlString;

  private setCaption = (): void => {
    this.innerHTML = this.caption + this.innerHTML;
  };

  protected abstract get legend(): HtmlString;

  private setLegend = (): void => {
    this.innerHTML = this.legend + this.innerHTML;
  };

  protected prepareTable = (): void => {
    this.innerHTML += /*html*/ `
      <div id="cards"></div>

      <div class="loader-container">
        <span class="loader"></span>
      </div>

      <div class="pagination"></div>
    `;
  };

  protected abstract setCards(): void;

  protected setPagination = (): void => {
    const paginationDiv: HTMLDivElement = this.querySelector(".pagination")!;

    paginationDiv.innerHTML += /*html*/ `
      <button class="next-page">+</button>
    `;

    const nextPageButton: HTMLButtonElement =
      this.querySelector("button.next-page")!;

    nextPageButton.onclick = async (): Promise<void> => {
      this.startAfter += g.queryLimit;

      this.toggleLoader();

      await this.getData();

      this.toggleLoader();

      this.setCards();
    };
  };
}
