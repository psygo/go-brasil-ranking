"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("firebase/auth");
const globals_1 = require("../../infra/globals");
const router_1 = require("../../routing/router");
const country_1 = require("../../models/country");
class NewPlayerView extends HTMLElement {
    static tag = "new-player-view";
    currentUser = null;
    constructor() {
        super();
        globals_1.Globals.setup.initAuth();
    }
    async connectedCallback() {
        (0, auth_1.onAuthStateChanged)(globals_1.Globals.setup.auth, (user) => {
            if (user) {
                this.currentUser = user;
                this.setNewPlayerForm();
            }
            else
                globals_1.Globals.router.manualRouting(router_1.RouteEnum.admin);
        });
    }
    get countryOptions() {
        let options = "";
        for (const [_, countryString] of Object.entries(country_1.CountryName))
            options += `
        <option value=${countryString}>${countryString}</option>
      `;
        return options;
    }
    addCountrySelect = () => {
        const countriesSelectDiv = this.querySelector("div#countries-select");
        countriesSelectDiv.innerHTML += `
      <select name="countries">
        ${this.countryOptions}
      </select>
    `;
    };
    get brStateOptions() {
        let options = "";
        for (const brStateString of Object.values(country_1.BrazilianState))
            options += `
        <option value=${brStateString}>${brStateString}</option>
      `;
        return options;
    }
    setNewPlayerForm = () => {
        this.innerHTML = `
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
            required 
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
        const pictureInput = this.querySelector("input[name=picture]");
        pictureInput.onchange = this.pictureOnChange;
        const addCountrySelectButton = this.querySelector("button#add-country-select");
        addCountrySelectButton.onclick = this.addCountrySelect;
        this.addCountrySelect();
        const form = this.querySelector("form");
        form.onsubmit = this.onSubmit;
    };
    get name() {
        const nameInput = this.querySelector("input[name=name]");
        return nameInput.value;
    }
    get email() {
        const emailInput = this.querySelector("input[name=email]");
        return emailInput.value;
    }
    picture = "";
    pictureOnChange = () => {
        const output = this.querySelector("img#preview");
        const pictureInput = this.querySelector("input[name=picture]");
        const file = pictureInput.files?.item(0);
        const fileReader = new FileReader();
        fileReader.onload = () => {
            output.src = fileReader.result;
            const kb150 = 1.5 * 10e5;
            if (file.size < kb150)
                this.picture = fileReader.result;
        };
        if (file)
            fileReader.readAsDataURL(file);
    };
    get countries() {
        const countrySelects = this.querySelectorAll("select[name=countries]");
        const countries = [];
        for (const select of countrySelects)
            countries.push((0, country_1.countryNameFromString)(select.value));
        return countries;
    }
    get brState() {
        const brStateSelect = this.querySelector("select[name=br-state]");
        if (brStateSelect.value)
            return (0, country_1.brazilianStateFromString)(brStateSelect.value);
        else
            return null;
    }
    get brCity() {
        const brCityInput = this.querySelector("input[name=br-city]");
        return brCityInput.value;
    }
    get completeCountries() {
        const countries = [];
        for (const countryName of this.countries) {
            if (countryName === country_1.CountryName.brazil) {
                countries.push({
                    name: countryName,
                    state: this.brState,
                    city: this.brCity,
                });
            }
            else
                countries.push({ name: countryName });
        }
        return countries;
    }
    get elo() {
        const eloInput = this.querySelector("input[name=elo]");
        return eloInput.valueAsNumber;
    }
    onSubmit = async (e) => {
        e.preventDefault();
        const player = {
            name: this.name,
            email: this.email,
            picture: this.picture,
            countries: this.completeCountries,
            elo: this.elo,
            author: {
                uid: this.currentUser.uid,
                name: this.currentUser.displayName,
                email: this.currentUser.email,
            },
        };
        const userIdToken = await this.currentUser.getIdToken();
        const res = await fetch(`${globals_1.Globals.apiUrl}${router_1.RouteEnum.players}/novo`, {
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
            this.innerHTML += `
        <div id="return-msg">
          <p>
            ${playerFromServer.name} adicionado com sucesso!
          </p>
          
          <p>
            Para visualizá-lo, clique 
            <route-link 
              href="${router_1.RouteEnum.players}/${playerFromServer.firebaseRef}">
                aqui.
            </route-link>
          </p>
        </div>
      `;
        else
            this.innerHTML += `
        <div id="return-msg">
          <p>Não foi possível adicionar tal jogador.</p>
        </div>
      `;
    };
}
exports.default = NewPlayerView;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3LXBsYXllci12aWV3LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3VpL3ZpZXdzL25ldy1wbGF5ZXItdmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdDQUF5RDtBQUV6RCxpREFBbUQ7QUFFbkQsaURBQWlEO0FBRWpELGtEQU04QjtBQUc5QixNQUFxQixhQUFjLFNBQVEsV0FBVztJQUNwRCxNQUFNLENBQVUsR0FBRyxHQUFXLGlCQUFpQixDQUFDO0lBRXhDLFdBQVcsR0FBZ0IsSUFBSSxDQUFDO0lBRXhDO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUFFUixpQkFBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsS0FBSyxDQUFDLGlCQUFpQjtRQUNyQixJQUFBLHlCQUFrQixFQUFDLGlCQUFDLENBQUMsS0FBSyxDQUFDLElBQUssRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ3pDLElBQUksSUFBSSxFQUFFO2dCQUNSLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO2dCQUN4QixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQzthQUN6Qjs7Z0JBQU0saUJBQUMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGtCQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsSUFBWSxjQUFjO1FBQ3hCLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUVqQixLQUFLLE1BQU0sQ0FBQyxDQUFDLEVBQUUsYUFBYSxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxxQkFBVyxDQUFDO1lBQzFELE9BQU8sSUFBYTt3QkFDRixhQUFhLElBQUksYUFBYTtPQUMvQyxDQUFDO1FBRUosT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVPLGdCQUFnQixHQUFHLEdBQVMsRUFBRTtRQUNwQyxNQUFNLGtCQUFrQixHQUFtQixJ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