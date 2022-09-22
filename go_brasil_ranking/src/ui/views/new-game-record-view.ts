import { onAuthStateChanged, User } from "firebase/auth";

import { Globals as g } from "../../infra/globals";

import { RouteEnum } from "../../routing/router";

import { Color, colorFromString, GameRecord } from "../../models/game_record";

export default class NewGameRecordView extends HTMLElement {
  static readonly tag: string = "new-game-record-view";

  private currentUser: User | null = null;

  constructor() {
    super();

    g.setup.initAuth();
  }

  async connectedCallback() {
    onAuthStateChanged(g.setup.auth!, (user) => {
      if (user) {
        this.currentUser = user;
        this.setNewGameRecordForm();
      } else g.router.manualRouting(RouteEnum.admin);
    });
  }

  private setNewGameRecordForm = (): void => {
    this.innerHTML = /*html*/ `
      <form>
        <fieldset>
          <label for="blackRef">ID Preto</label>
          <input required type="text" name="blackRef"/>
        </fieldset>

        <fieldset>
          <label for="whiteRef">ID Branco</label>
          <input required type="text" name="whiteRef"/>
        </fieldset>

        <fieldset>
          <label for="whoWins">Quem ganhou?</label>
          <select name="whoWins">
            <option value="${Color.Black}">${Color.Black}</option>
            <option value="${Color.White}">${Color.Black}</option>
          </select>
        </fieldset>
        
        <fieldset>
          <label for="sgf">SGF</label>
          <input type="file" name="sgf"/>
        </fieldset>

        <fieldset>
          <label for="date">Data da Partida</label>
          <input type="date" name="date"/>
        </fieldset>

        <button type="submit">Adicionar Partida</buton>
      </form>
    `;

    const sgfInput: HTMLInputElement = this.querySelector("input[name=sgf]")!;
    sgfInput.onchange = this.sgfOnChange;

    const submitButton: HTMLButtonElement = this.querySelector("button")!;
    submitButton.addEventListener("click", this.onSubmit);
  };

  private get blackRef(): string {
    const blackRefInput: HTMLInputElement = this.querySelector(
      "input[name=blackRef]"
    )!;
    return blackRefInput.value;
  }

  private get whiteRef(): string {
    const whiteRefInput: HTMLInputElement = this.querySelector(
      "input[name=whiteRef]"
    )!;
    return whiteRefInput.value;
  }

  private get date(): number {
    const dateInput: HTMLInputElement = this.querySelector("input[name=date]")!;
    return dateInput.valueAsDate?.getTime()!;
  }

  private sgf: string = "";

  private sgfOnChange = () => {
    const sgfInput: HTMLInputElement = this.querySelector("input[name=sgf]")!;
    const file = sgfInput.files?.item(0);
    const fileReader = new FileReader();

    fileReader.onload = () => {
      if (file!.size < 500000) this.sgf = fileReader.result as string;
    };

    if (file) fileReader.readAsText(file);
  };

  private get whoWins(): Color {
    const colorSelect: HTMLSelectElement = this.querySelector(
      "select[name=whoWins]"
    )!;
    return colorFromString(colorSelect.value);
  }

  private onSubmit = async (e: Event) => {
    e.preventDefault();

    const gameRecord: GameRecord = {
      blackRef: this.blackRef,
      whiteRef: this.whiteRef,
      result: {
        whoWins: this.whoWins,
      },
      sgf: this.sgf,
      date: this.date,
      author: {
        uid: this.currentUser?.uid!,
        name: this.currentUser?.displayName!,
        email: this.currentUser?.email!,
      },
    };

    const userIdToken = await this.currentUser?.getIdToken();

    const res = await fetch(`${g.apiUrl}${RouteEnum.gameRecords}/novo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userIdToken}`,
      },
      body: JSON.stringify(gameRecord),
    });

    const json = await res.json();
    const gameRecordFromServer = json["data"]["gameRecord"];

    if (gameRecordFromServer)
      this.innerHTML += /*html*/ `
        <h4>Partida adicionada com sucesso!</h4>
        <h4>
          Para visualizá-la, clique 
          <route-link 
            href="${RouteEnum.gameRecords}/${gameRecordFromServer.firebaseRef}">
              aqui
          </route-link>.
        </h4>
      `;
    else
      this.innerHTML += /*html*/ `
        <h4>Não foi possível adicionar tal partida.</h4>
      `;
  };
}
