import { onAuthStateChanged, User } from "firebase/auth";

import { Globals as g } from "../../infra/globals";

import { RouteEnum } from "../../routing/router";

import { GameEventLeague, GameEventTypes } from "../../models/game_event";

export default class NewGameEventView extends HTMLElement {
  static readonly tag: string = "new-game-event-view";

  private currentUser: User | null = null;

  constructor() {
    super();

    g.setup.initAuth();
  }

  async connectedCallback() {
    onAuthStateChanged(g.setup.auth!, (user) => {
      if (user) {
        this.currentUser = user;
        this.setNewGameEventForm();
      } else g.router.manualRouting(RouteEnum.admin);
    });
  }

  private setNewGameEventForm = (): void => {
    this.innerHTML = /*html*/ `
      <form>
        <fieldset>
          <label for="type">Tipo</label>
          <select name="type">
            <option value="${GameEventTypes.league}">Liga</option>
            <option value="${GameEventTypes.tournament}">Torneio</option>
          </select>
        </fieldset>

        <fieldset>
          <label for="name">Nome</label>
          <input required type="text" name="name" autofocus/>
        </fieldset>

        <fieldset>
          <label for="date-init">Data de Início</label>
          <input required type="date" name="date-init"/>

          <label for="date-end">Data de Fim (Opcional)</label>
          <input type="date" name="date-end"/>
        </fieldset>

        <fieldset>
          <label for="link">Link (Opcional)</label>
          <input type="text" name="link"/>
        </fieldset>
        
        <button type="submit">Adicionar Evento</buton>
      </form>
    `;
    
    const typeSelect: HTMLSelectElement = this.querySelector('select')!
    typeSelect.onchange = (e) => {
      e.preventDefault();
      console.log(typeSelect.value)
    }

    const form: HTMLFormElement = this.querySelector("form")!;
    form.onsubmit = this.onSubmit;
  };

  private get name(): string {
    const nameInput: HTMLInputElement = this.querySelector("input[name=name]")!;
    return nameInput.value;
  }

  private get link(): string {
    const linkInput: HTMLInputElement = this.querySelector("input[name=link]")!;
    return linkInput.value;
  }

  private get dateInit(): number {
    const dateInitInput: HTMLInputElement = this.querySelector(
      "input[name=date-init]"
    )!;
    return dateInitInput.valueAsDate!.getTime();
  }

  private get dateEnd(): number {
    const dateEndInput: HTMLInputElement = this.querySelector(
      "input[name=date-end]"
    )!;
    return dateEndInput.valueAsDate!.getTime();
  }

  private onSubmit = async (e: Event) => {
    e.preventDefault();

    const gameEvent: GameEventLeague = {
      type: GameEventTypes.league,
      name: this.name,
      dateInit: this.dateInit,
      dateEnd: this.dateEnd,
      link: this.link,
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
        <div id="return-msg">
          <p>
            Evento adicionado (${gameEventFromServer.firebaseRef}) 
            com sucesso!
          </p>

          <p>
            Para visualizá-lo, clique 
            <route-link 
              href="${RouteEnum.gameEvents}/${gameEventFromServer.firebaseRef}">
                aqui.
            </route-link>
          </p>
        </div>
      `;
    else
      this.innerHTML += /*html*/ `
        <div id="return-msg">
          <p>Não foi possível adicionar tal evento.</p>
        </div>
      `;
  };
}
