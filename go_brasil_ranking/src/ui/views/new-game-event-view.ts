import { onAuthStateChanged, User } from "firebase/auth";

import { Globals as g } from "../../infra/globals";

import { auth, initAuth } from "../../infra/firebase_config";

import { RouteEnum } from "../../routing/router";

import { GameEventLeague, GameEventTypes } from "../../models/game_event";

export default class NewGameEventView extends HTMLElement {
  static readonly tag: string = "new-game-event-view";

  private currentUser: User | null = null;

  constructor() {
    super();

    initAuth();
  }

  connectedCallback() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.currentUser = user;
        this.setNewGameEventForm();
      } else g.router.manualRouting(RouteEnum.admin);
    });
    this.setNewGameEventForm();
  }

  private setNewGameEventForm = (): void => {
    this.innerHTML = /*html*/ `
      <form>
        <fieldset>
          <label for="tipo">Tipo</label>
          <select name="tipo">
            <option value="league">Liga</option>
            <option value="tournament">Torneio</option>
          </select>
        </fieldset>

        <fieldset>
          <label for="name">Nome</label>
          <input required type="text" name="name" autofocus/>
        </fieldset>

        <fieldset>
          <label for="date-init">Data de Início</label>
          <input required type="date" name="date-init"/>
        </fieldset>

        <fieldset>
          <label for="date-end">Data de Fim</label>
          <input required type="date" name="date-end"/>
        </fieldset>
        
        <button type="submit">Adicionar Evento</buton>
      </form>
    `;

    const submitButton: HTMLButtonElement = this.querySelector("button")!;
    submitButton.addEventListener("click", this.onSubmit);
  };

  private onSubmit = async (e: Event) => {
    e.preventDefault();

    const nameInput: HTMLInputElement = this.querySelector("input[name=name]")!;
    const dateInitInput: HTMLInputElement = this.querySelector(
      "input[name=date-init]"
    )!;
    const dateEndInput: HTMLInputElement = this.querySelector(
      "input[name=date-end]"
    )!;

    const gameEvent: GameEventLeague = {
      type: GameEventTypes.league,
      name: nameInput.value,
      dateInit: dateInitInput.valueAsDate?.getTime()!,
      dateEnd: dateEndInput.valueAsDate?.getTime()!,
      author: {
        uid: this.currentUser?.uid!,
        name: this.currentUser?.displayName!,
        email: this.currentUser?.email!,
      },
    };

    const userIdToken = await this.currentUser?.getIdToken();

    const res = await fetch(`${g.apiUrl}${RouteEnum.gameEvents}/novo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userIdToken}`,
      },
      body: JSON.stringify(gameEvent),
    });

    const json = await res.json();
    const gameEventFromServer = json["data"]["gameEvent"];

    if (gameEventFromServer)
      this.innerHTML += /*html*/ `
        <h4>Partida adicionada com sucesso!</h4>
        <h4>
          Para visualizá-la, clique 
          <route-link 
            href="${RouteEnum.gameEvents}/${gameEventFromServer.firebaseRef}">
              aqui
          </route-link>.
        </h4>
      `;
    else
      this.innerHTML += /*html*/ `
        <h4>Não foi possível adicionar tal evento.</h4>
      `;
  };
}
