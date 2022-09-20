import { onAuthStateChanged, User } from "firebase/auth";

import { Globals as g } from "../../infra/globals";

import { RouteEnum } from "../../routing/router";

import { Color, GameRecord } from "../../models/game_record";

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
          <input type="text" name="sgf"/>
        </fieldset>

        <fieldset>
          <label for="date">Data</label>
          <input type="date" name="date"/>
        </fieldset>

        <button type="submit">Adicionar Partida</buton>
      </form>
    `;

    const submitButton: HTMLButtonElement = this.querySelector("button")!;
    submitButton.addEventListener("click", this.onSubmit);
  };

  private onSubmit = async (e: Event) => {
    e.preventDefault();

    // TODO2: Fix incomplete input capture...
    const blackRef: HTMLInputElement = this.querySelector(
      "input[name=blackRef]"
    )!;
    const whiteRef: HTMLInputElement = this.querySelector(
      "input[name=whiteRef]"
    )!;
    // const sgf: HTMLInputElement = this.querySelector("input[name=sgf]")!;
    const date: HTMLInputElement = this.querySelector("input[name=date]")!;

    const gameRecord: GameRecord = {
      blackRef: blackRef.value,
      whiteRef: whiteRef.value,
      result: {
        whoWins: Color.Black,
      },
      // sgf: sgf.value,
      date: date.valueAsDate!.getTime(),
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
