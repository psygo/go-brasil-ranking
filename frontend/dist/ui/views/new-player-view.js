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
    picture = "";
    pictureOnChange = () => {
        const output = this.querySelector("img#preview");
        const pictureInput = this.querySelector("input[name=picture]");
        const file = pictureInput.files?.item(0);
        const fileReader = new FileReader();
        fileReader.onload = () => {
            output.src = fileReader.result;
            if (file.size < 500000)
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