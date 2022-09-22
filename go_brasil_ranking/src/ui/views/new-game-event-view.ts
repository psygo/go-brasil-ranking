import { onAuthStateChanged, User } from "firebase/auth";

import { Globals as g } from "../../infra/globals";

import { RouteEnum } from "../../routing/router";

import {
  gameEventTypeFromString,
  GameEventTypes,
} from "../../models/game_event";

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

  private type: GameEventTypes = GameEventTypes.tournament;

  private setNewGameEventForm = (): void => {
    this.innerHTML = /*html*/ `
      <form>
        <fieldset>
          <label for="type">Tipo</label>
          <select name="type">
            <option selected value="${this.type}">Torneio</option>
            <option value="${GameEventTypes.league}">Liga</option>
          </select>
        </fieldset>

        <fieldset>
          <label for="name">Nome</label>
          <input 
            required 
            type="text" 
            name="name" 
            placeholder="Copa do Mundo de Go"
            autofocus/>
        </fieldset>

        <fieldset id="dates"></fieldset>

        <fieldset>
          <label for="link">Link (Opcional)</label>
          <input 
            type="text" 
            name="link"
            placeholder="https://online-go.com/game/..."/>
        </fieldset>
        
        <button type="submit">Adicionar Evento</buton>
      </form>
    `;

    const typeSelect: HTMLSelectElement = this.querySelector("select")!;
    typeSelect.onchange = this.changeDatesOnForm;
    this.changeDatesType();

    const form: HTMLFormElement = this.querySelector("form")!;
    form.onsubmit = this.onSubmit;
  };

  private changeDatesOnForm = (e: Event) => {
    e.preventDefault();

    const typeSelect: HTMLSelectElement =
      this.querySelector("select[name=type]")!;

    this.type = gameEventTypeFromString(typeSelect.value);

    this.changeDatesType();
  };

  private changeDatesType = (): void => {
    const dateFieldset: HTMLFieldSetElement =
      this.querySelector("fieldset#dates")!;

    if (this.type === GameEventTypes.league)
      dateFieldset.innerHTML = /*html*/ `
        <label for="date-init">Data de Início</label>
        <input required type="date" name="date-init"/>

        <label for="date-end">Data de Fim (Opcional)</label>
        <input type="date" name="date-end"/>
      `;
    else if (this.type === GameEventTypes.tournament) {
      dateFieldset.innerHTML = /*html*/ `
        <label for="">Datas do Torneio</label>
        
        <div id="dates-select" class="multi-select">
          <input type="date" name="date-1"/>
        </div>
        
        <button id="add-country-select">+</button>
      `;

      const addDateButton: HTMLButtonElement = this.querySelector(
        "button#add-country-select"
      )!;
      addDateButton.onclick = (e: Event) => {
        e.preventDefault();

        const datesDiv: HTMLDivElement =
          this.querySelector("div#dates-select")!;

        datesDiv.innerHTML += /*html*/ `
          <input type="date" name="date-${this.numberOfDatesForTournament}"/>
        `;
      };
    }
  };

  private numberOfDatesForTournament: number = 1;

  private get tournamentDates(): number[] {
    const datesDiv: HTMLDivElement = this.querySelector("div#dates-select")!;

    const datesInputs: NodeListOf<HTMLInputElement> =
      datesDiv.querySelectorAll("input")!;

    const dates: number[] = [];
    for (const input of datesInputs) dates.push(input.valueAsDate!.getTime());

    return dates;
  }

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

    let dates;
    if (this.type === GameEventTypes.league)
      dates = {
        type: GameEventTypes.league,
        dateInit: this.dateInit,
        dateEnd: this.dateEnd,
      };
    else if (this.type === GameEventTypes.tournament)
      dates = {
        type: GameEventTypes.tournament,
        dates: this.tournamentDates,
      };

    const gameEvent = {
      ...dates,
      name: this.name,
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
            ${gameEventFromServer.name} adicionado(a) com sucesso!
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
