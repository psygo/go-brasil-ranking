import {
  DocumentData,
  getDocs,
  Query,
  QueryDocumentSnapshot,
  QuerySnapshot,
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

  protected mergeParallelQueries = async (
    q1: Promise<QuerySnapshot<DocumentData>>,
    q2: Promise<QuerySnapshot<DocumentData>>
  ): Promise<void> => {
    const [snapsAsBlack, snapsAsWhite] = await Promise.all([q1, q2]);

    const [gameRecordsAsBlack, gameRecordsAsWhite] = [
      mapDocsWithFirebaseRef<T>(snapsAsBlack.docs),
      mapDocsWithFirebaseRef<T>(snapsAsWhite.docs),
    ];

    const allGames = [...gameRecordsAsBlack, ...gameRecordsAsWhite];

    allGames.sort((g1, g2) => {
      if ("date" in g1 && "date" in g2) return g2.date - g1.date;
      else return 0;
    });

    const slicedGames = allGames.slice(0, 5);

    slicedGames.reverse();

    for (const docBlack of snapsAsBlack.docs)
      for (const g of slicedGames)
        if (docBlack.id === g.firebaseRef) this._lastVisible1 = docBlack;
    for (const docWhite of snapsAsWhite.docs)
      for (const g of slicedGames)
        if (docWhite.id === g.firebaseRef) this._lastVisible2 = docWhite;

    slicedGames.reverse();

    this.data.push(...slicedGames);
  };

  private declare _lastVisible: QueryDocumentSnapshot<DocumentData>;
  private declare _lastVisible1: QueryDocumentSnapshot<DocumentData>;
  private declare _lastVisible2: QueryDocumentSnapshot<DocumentData>;

  protected get lastVisible(): QueryDocumentSnapshot<DocumentData> | {} {
    return this._lastVisible ? this._lastVisible : {};
  }
  protected get lastVisible1(): QueryDocumentSnapshot<DocumentData> | {} {
    return this._lastVisible1 ? this._lastVisible2 : {};
  }
  protected get lastVisible2(): QueryDocumentSnapshot<DocumentData> | {} {
    return this._lastVisible2 ? this._lastVisible2 : {};
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

  protected abstract getData(): Promise<void>;

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
