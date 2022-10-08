import { onAuthStateChanged, User } from "firebase/auth";

import { Globals as g } from "../../infra/globals";

import { RouteEnum } from "../../routing/router";

import {
  BrazilianState,
  brazilianStateFromString,
  Country,
  CountryName,
  countryNameFromString,
} from "../../models/country";
import { Player } from "../../models/player";

export default class NewPlayerView extends HTMLElement {
  static readonly tag: string = "new-player-view";

  private currentUser: User | null = null;

  constructor() {
    super();

    g.setup.initAuth();
  }

  async connectedCallback(): Promise<void> {
    onAuthStateChanged(g.setup.auth!, (user) => {
      if (user) {
        this.currentUser = user;
        this.setNewPlayerForm();
      } else g.router.manualRouting(RouteEnum.admin);
    });
  }

  private get countryOptions(): string {
    let options = "";

    for (const [_, countryString] of Object.entries(CountryName))
      options += /*html*/ `
        <option value=${countryString}>${countryString}</option>
      `;

    return options;
  }

  private addCountrySelect = (): void => {
    const countriesSelectDiv: HTMLDivElement = this.querySelector(
      "div#countries-select"
    )!;
    countriesSelectDiv.innerHTML += /*html*/ `
      <select name="countries">
        ${this.countryOptions}
      </select>
    `;
  };

  private get brStateOptions(): string {
    let options = "";

    for (const brStateString of Object.values(BrazilianState))
      options += /*html*/ `
        <option value=${brStateString}>${brStateString}</option>
      `;

    return options;
  }

  private setNewPlayerForm = (): void => {
    this.innerHTML = /*html*/ `
      <form>
        <fieldset>
          <label for="name">Nome</label>
          <input 
            required 
            type="text" 
            name="name" 
            autofocus 
            placeholder="João da Silva"/>
        </fieldset>

        <fieldset>
          <label for="email">Email</label>
          <input 
            type="text" 
            name="email" 
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            placeholder="joao@mail.com"/>
        </fieldset>

        <fieldset>
          <label for="picture">Foto (opcional, < 500KB)</label>
          <input type="file" name="picture"/>
          <img id="preview"/>
        </fieldset>
        
        <fieldset id="countries">
          <label for="countries">Países</label>
          
          <div id="countries-select" class="multi-select"></div>
          
          <button id="add-country-select">+</button>
        </fieldset>
        
        <fieldset>
          <label for="br-state">Estado Brasileiro (opcional)</label>
          
          <select name="br-state">
            <option selected value="">Selecione um Estado</option>
            ${this.brStateOptions}
          </select>
        </fieldset>

        <fieldset>
          <label for="br-city">Cidade Brasileira (opcional)</label>
          
          <input 
            type="text" 
            name="br-city" 
            placeholder="Onde Judas Perdeu as Botas"/>
        </fieldset>

        <fieldset>
          <label for="elo">Elo</label>
          <input 
            required 
            type="number" 
            name="elo"
            placeholder="Ex.: 10 kyu = 1100"/>
        </fieldset>
        
        <button id="add-player" type="submit">Adicionar Jogador</buton>
      </form>
    `;

    const pictureInput: HTMLInputElement = this.querySelector(
      "input[name=picture]"
    )!;
    pictureInput.onchange = this.pictureOnChange;

    const addCountrySelectButton: HTMLButtonElement = this.querySelector(
      "button#add-country-select"
    )!;
    addCountrySelectButton.onclick = this.addCountrySelect;
    this.addCountrySelect();

    const form: HTMLFormElement = this.querySelector("form")!;
    form.onsubmit = this.onSubmit;
  };

  private get name(): string {
    const nameInput: HTMLInputElement = this.querySelector("input[name=name]")!;
    return nameInput.value;
  }

  private get email(): string {
    const emailInput: HTMLInputElement =
      this.querySelector("input[name=email]")!;
    return emailInput.value;
  }

  private picture: string = "";

  private pictureOnChange = () => {
    const output: HTMLImageElement = this.querySelector("img#preview")!;
    const pictureInput: HTMLInputElement = this.querySelector(
      "input[name=picture]"
    )!;
    const file = pictureInput.files?.item(0);
    const fileReader = new FileReader();

    fileReader.onload = () => {
      output.src = fileReader.result as string;
      const kb150 = 1.5 * 10e5;
      if (file!.size < kb150) {
        this.picture = fileReader.result as string;
        console.log("here");
        localStorage.setItem(`${this.name}`, this.picture);
        console.log(localStorage);
      }
    };

    if (file) fileReader.readAsDataURL(file);
  };

  private get countries(): CountryName[] {
    const countrySelects: NodeListOf<HTMLSelectElement> = this.querySelectorAll(
      "select[name=countries]"
    )!;

    const countries: CountryName[] = [];
    for (const select of countrySelects)
      countries.push(countryNameFromString(select.value));

    return countries;
  }

  private get brState(): BrazilianState | null {
    const brStateSelect: HTMLSelectElement = this.querySelector(
      "select[name=br-state]"
    )!;

    if (brStateSelect.value)
      return brazilianStateFromString(brStateSelect.value);
    else return null;
  }

  private get brCity(): string {
    const brCityInput: HTMLInputElement = this.querySelector(
      "input[name=br-city]"
    )!;
    return brCityInput.value;
  }

  private get completeCountries(): Country[] {
    const countries: Country[] = [];

    for (const countryName of this.countries) {
      if (countryName === CountryName.brazil) {
        countries.push(<Country>{
          name: countryName,
          state: this.brState,
          city: this.brCity,
        });
      } else countries.push(<Country>{ name: countryName });
    }

    return countries;
  }

  private get elo(): number {
    const eloInput: HTMLInputElement = this.querySelector("input[name=elo]")!;
    return eloInput.valueAsNumber;
  }

  private onSubmit = async (e: Event) => {
    e.preventDefault();

    const player: Player = {
      name: this.name,
      email: this.email,
      picture: this.picture,
      countries: this.completeCountries,
      currentElo: this.elo,
      author: {
        uid: this.currentUser!.uid!,
        name: this.currentUser!.displayName!,
        email: this.currentUser!.email!,
      },
    };

    const userIdToken = await this.currentUser!.getIdToken();

    const res = await fetch(`${g.apiUrl}${RouteEnum.players}/novo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userIdToken}`,
      },
      body: JSON.stringify(player),
    });

    const json = await res.json();
    const playerFromServer = json["data"]["player"];

    if (playerFromServer)
      this.innerHTML += /*html*/ `
        <div id="return-msg">
          <p>
            ${playerFromServer.name} adicionado com sucesso!
          </p>
          
          <p>
            Para visualizá-lo, clique 
            <route-link 
              href="${RouteEnum.players}/${playerFromServer.firebaseRef}">
                aqui.
            </route-link>
          </p>
        </div>
      `;
    else
      this.innerHTML += /*html*/ `
        <div id="return-msg">
          <p>Não foi possível adicionar tal jogador.</p>
        </div>
      `;
  };
}
