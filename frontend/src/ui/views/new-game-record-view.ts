import { onAuthStateChanged, User } from "firebase/auth";

import { apiUrl, router, setup } from "../../infra/globals";
import { RouteEnum } from "../../routing/router";

import { Color, colorFromString, GameRecord } from "../../models/game_record";
import { GameEventRef, GameEventTypes } from "../../models/game_event";

export default class NewGameRecordView extends HTMLElement {
  static readonly tag: string = "new-game-record-view";

  private currentUser: User | null = null;

  constructor() {
    super();

    setup.initAuth();
  }

  async connectedCallback(): Promise<void> {
    onAuthStateChanged(setup.auth!, (user) => {
      if (user) {
        this.currentUser = user;
        this.setNewGameRecordForm();
      } else router.manualRouting(RouteEnum.admin);
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
            <option selected value="${Color.Black}">${Color.Black}</option>
            <option value="${Color.White}">${Color.Black}</option>
          </select>

          <label for="resign">Por desistência ou por pontos?</label>
          <select name="resign">
            <option selected value="resign">Desistência</option>
            <option value="points">Pontos</option>
          </select>
          
          <div id="difference"></div>
        </fieldset>
        
        <fieldset>
          <label for="sgf">SGF</label>
          <input type="file" name="sgf"/>
        </fieldset>

        <fieldset>
          <label for="date">Data da Partida</label>
          <input type="date" name="date"/>
        </fieldset>

        <fieldset id="game-event">
          <label for="game-event-type">Tipo de Evento</label>
          <select name="game-event-type">
            <option value="${GameEventTypes.online}">${GameEventTypes.online}</option>
            <option value="${GameEventTypes.live}">${GameEventTypes.live}</option>
            <option value="${GameEventTypes.tournament}">${GameEventTypes.tournament}</option>
            <option value="${GameEventTypes.league}">${GameEventTypes.league}</option>
          </select>

          <div id="game-event-id"></div>
        </fieldset>

        <fieldset>
        </fieldset>

        <button type="submit">Adicionar Partida</buton>
      </form>
    `;

    const sgfInput: HTMLInputElement = this.querySelector("input[name=sgf]")!;
    sgfInput.onchange = this.sgfOnChange;

    const resignSelect: HTMLSelectElement = this.querySelector(
      "select[name=resign]"
    )!;
    resignSelect.onchange = this.resignSelectOnchange;

    const gameEventTypeSelect: HTMLSelectElement = this.querySelector(
      "select[name=game-event-type]"
    )!;
    gameEventTypeSelect.onchange = this.gameEventTypeSelectOnChange;

    const form: HTMLFormElement = this.querySelector("form")!;
    form.onsubmit = this.onSubmit;
  };

  private get difference(): number | undefined {
    const diffInput: HTMLInputElement | null = this.querySelector(
      "input[name=difference]"
    );
    if (diffInput) return diffInput.valueAsNumber;
    else return;
  }

  private resignSelectOnchange = (): void => {
    const resignSelect: HTMLSelectElement = this.querySelector(
      "select[name=resign]"
    )!;
    const diffDiv: HTMLDivElement = this.querySelector("div#difference")!;
    if (resignSelect.value === "points")
      diffDiv.innerHTML = /*html*/ `
        <input type="number" name="difference" placeholder="diferença"/>
      `;
    else diffDiv.innerHTML = "";
  };

  private get gameEventRef(): GameEventRef {
    const gameEventTypeSelect: HTMLSelectElement = this.querySelector(
      "select[name=game-event-type]"
    )!;
    if (
      gameEventTypeSelect.value === GameEventTypes.online ||
      gameEventTypeSelect.value === GameEventTypes.league
    )
      return gameEventTypeSelect.value;
    else {
      const gameEventIdInput: HTMLInputElement = this.querySelector(
        "input[name=game-event-id]"
      )!;
      return gameEventIdInput.value;
    }
  }

  private gameEventTypeSelectOnChange = (): void => {
    const gameEventTypeSelect: HTMLSelectElement = this.querySelector(
      "select[name=game-event-type]"
    )!;
    const gameEventIdDiv: HTMLDivElement =
      this.querySelector("div#game-event-id")!;
    if (
      gameEventTypeSelect.value === GameEventTypes.tournament ||
      gameEventTypeSelect.value === GameEventTypes.league
    )
      gameEventIdDiv.innerHTML = /*html*/ `
        <input 
          type="text"
          name="game-event-id"
          placeholder="ID do Torneio ou Liga"/>
      `;
    else gameEventIdDiv.innerHTML = "";
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

  private validate = (): boolean => {
    if (this.blackRef === this.whiteRef) return false;
    else return true;
  };

  private onSubmit = async (e: Event) => {
    e.preventDefault();

    if (this.validate()) {
      const gameRecord: GameRecord = {
        blackRef: this.blackRef,
        whiteRef: this.whiteRef,
        date: this.date,
        result: {
          whoWins: this.whoWins,
          difference: this.difference,
        },
        sgf: this.sgf,
        gameEventRef: this.gameEventRef,
        author: {
          uid: this.currentUser?.uid!,
          name: this.currentUser?.displayName!,
          email: this.currentUser?.email!,
        },
      };

      const userIdToken = await this.currentUser?.getIdToken();

      const res = await fetch(`${apiUrl}${RouteEnum.gameRecords}/novo`, {
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
          <div id="return-msg">
            <p>Partida adicionada com sucesso!</p>
            <p>
              Para visualizá-la, clique 
              <route-link 
                href="${RouteEnum.gameRecords}/${gameRecordFromServer.firebaseRef}">
                  aqui
              </route-link>.
            </p>
          </div>
        `;
      else
        this.innerHTML += /*html*/ `
          <div id="return-msg">
            <p>Não foi possível adicionar tal partida.</p>
          </div>
        `;
    }
  };
}
