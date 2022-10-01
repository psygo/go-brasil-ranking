import { Globals as g } from "../../infra/globals";
import { HtmlString } from "../../infra/utils";

import { TournamentOrLeague } from "../../models/game_event";
import { GameRecord } from "../../models/game_record";
import { Player } from "../../models/player";

type TableElement = GameRecord | Player | TournamentOrLeague;

export default abstract class UiTable<
  T extends TableElement
> extends HTMLElement {
  protected readonly data: T[] = [];

  constructor(public readonly title: string, protected startAfter: number = 0) {
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