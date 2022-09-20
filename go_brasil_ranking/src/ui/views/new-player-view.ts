import { onAuthStateChanged, User } from "firebase/auth";

import { Globals as g } from "../../infra/globals";

import { auth, initAuth } from "../../infra/firebase_config";

import { RouteEnum } from "../../routing/router";

import { CountryName } from "../../models/country";
import { Player } from "../../models/player";

export default class NewPlayerView extends HTMLElement {
  static readonly tag: string = "new-player-view";

  private currentUser: User | null = null;

  constructor() {
    super();

    initAuth();
  }

  connectedCallback() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.currentUser = user;
        this.setNewPlayerForm();
      } else g.router.manualRouting(RouteEnum.admin);
    });
    this.setNewPlayerForm();
  }

  private setNewPlayerForm = (): void => {
    this.innerHTML = /*html*/ `
      <form>
        <fieldset>
          <label for="name">Nome</label>
          <input required type="text" name="name" autofocus/>
        </fieldset>
        
        <fieldset>
          <label for="countries">Países</label>
          <select name="countries">
            <option value="Brazil">Brasil</option>
          </select>
        </fieldset>

        <fieldset>
          <label for="elo">Elo</label>
          <input required type="number" name="elo"/>
        </fieldset>
        
        <button type="submit">Adicionar Jogador</buton>
      </form>
    `;

    const submitButton: HTMLButtonElement = this.querySelector("button")!;
    submitButton.addEventListener("click", this.onSubmit);
  };

  private onSubmit = async (e: Event) => {
    e.preventDefault();

    const nameInput: HTMLInputElement = this.querySelector("input[name=name]")!;
    // const countriesInput: HTMLInputElement = this.querySelector(
    //   "input[name=countries]"
    // )!;
    const eloInput: HTMLInputElement = this.querySelector("input[name=elo]")!;

    const player: Player = {
      name: nameInput.value,
      countries: [
        {
          name: CountryName.brazil,
        },
      ],
      elo: eloInput.valueAsNumber,
      author: {
        uid: this.currentUser?.uid!,
        name: this.currentUser?.displayName!,
        email: this.currentUser?.email!,
      },
    };

    const userIdToken = await this.currentUser?.getIdToken();

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
        <h4>Jogador adicionado com sucesso!</h4>
        <h4>
          Para visualizá-lo, clique 
          <route-link 
            href="${RouteEnum.players}/${playerFromServer.firebaseRef}">
              aqui
          </route-link>.
        </h4>
      `;
    else
      this.innerHTML += /*html*/ `
        <h4>Não foi possível adicionar tal jogador.</h4>
      `;
  };
}
