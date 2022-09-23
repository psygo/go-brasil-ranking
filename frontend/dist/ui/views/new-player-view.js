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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3LXBsYXllci12aWV3LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3VpL3ZpZXdzL25ldy1wbGF5ZXItdmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdDQUF5RDtBQUV6RCxpREFBbUQ7QUFFbkQsaURBQWlEO0FBRWpELGtEQU04QjtBQUc5QixNQUFxQixhQUFjLFNBQVEsV0FBVztJQUNwRCxNQUFNLENBQVUsR0FBRyxHQUFXLGlCQUFpQixDQUFDO0lBRXhDLFdBQVcsR0FBZ0IsSUFBSSxDQUFDO0lBRXhDO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUFFUixpQkFBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsS0FBSyxDQUFDLGlCQUFpQjtRQUNyQixJQUFBLHlCQUFrQixFQUFDLGlCQUFDLENBQUMsS0FBSyxDQUFDLElBQUssRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ3pDLElBQUksSUFBSSxFQUFFO2dCQUNSLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO2dCQUN4QixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQzthQUN6Qjs7Z0JBQU0saUJBQUMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGtCQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsSUFBWSxjQUFjO1FBQ3hCLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUVqQixLQUFLLE1BQU0sQ0FBQyxDQUFDLEVBQUUsYUFBYSxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxxQkFBVyxDQUFDO1lBQzFELE9BQU8sSUFBYTt3QkFDRixhQUFhLElBQUksYUFBYTtPQUMvQyxDQUFDO1FBRUosT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVPLGdCQUFnQixHQUFHLEdBQVMsRUFBRTtRQUNwQyxNQUFNLGtCQUFrQixHQUFtQixJQUFJLENBQUMsYUFBYSxDQUMzRCxzQkFBc0IsQ0FDdEIsQ0FBQztRQUNILGtCQUFrQixDQUFDLFNBQVMsSUFBYTs7VUFFbkMsSUFBSSxDQUFDLGNBQWM7O0tBRXhCLENBQUM7SUFDSixDQUFDLENBQUM7SUFFRixJQUFZLGNBQWM7UUFDeEIsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBRWpCLEtBQUssTUFBTSxhQUFhLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyx3QkFBYyxDQUFDO1lBQ3ZELE9BQU8sSUFBYTt3QkFDRixhQUFhLElBQUksYUFBYTtPQUMvQyxDQUFDO1FBRUosT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVPLGdCQUFnQixHQUFHLEdBQVMsRUFBRTtRQUNwQyxJQUFJLENBQUMsU0FBUyxHQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztjQXlDaEIsSUFBSSxDQUFDLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXdCNUIsQ0FBQztRQUVGLE1BQU0sWUFBWSxHQUFxQixJQUFJLENBQUMsYUFBYSxDQUN2RCxxQkFBcUIsQ0FDckIsQ0FBQztRQUNILFlBQVksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUU3QyxNQUFNLHNCQUFzQixHQUFzQixJQUFJLENBQUMsYUFBYSxDQUNsRSwyQkFBMkIsQ0FDM0IsQ0FBQztRQUNILHNCQUFzQixDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDdkQsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFFeEIsTUFBTSxJQUFJLEdBQW9CLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFFLENBQUM7UUFDMUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ2hDLENBQUMsQ0FBQztJQUVGLElBQVksSUFBSTtRQUNkLE1BQU0sU0FBUyxHQUFxQixJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFFLENBQUM7UUFDNUUsT0FBTyxTQUFTLENBQUMsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxJQUFZLEtBQUs7UUFDZixNQUFNLFVBQVUsR0FDZCxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFFLENBQUM7UUFDM0MsT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFFTyxPQUFPLEdBQVcsRUFBRSxDQUFDO0lBRXJCLGVBQWUsR0FBRyxHQUFHLEVBQUU7UUFDN0IsTUFBTSxNQUFNLEdBQXFCLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFFLENBQUM7UUFDcEUsTUFBTSxZQUFZLEdBQXFCLElBQUksQ0FBQyxhQUFhLENBQ3ZELHFCQUFxQixDQUNyQixDQUFDO1FBQ0gsTUFBTSxJQUFJLEdBQUcsWUFBWSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekMsTUFBTSxVQUFVLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztRQUVwQyxVQUFVLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRTtZQUN2QixNQUFNLENBQUMsR0FBRyxHQUFHLFVBQVUsQ0FBQyxNQUFnQixDQUFDO1lBQ3pDLElBQUksSUFBSyxDQUFDLElBQUksR0FBRyxNQUFNO2dCQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLE1BQWdCLENBQUM7UUFDdEUsQ0FBQyxDQUFDO1FBRUYsSUFBSSxJQUFJO1lBQUUsVUFBVSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQyxDQUFDLENBQUM7SUFFRixJQUFZLFNBQVM7UUFDbkIsTUFBTSxjQUFjLEdBQWtDLElBQUksQ0FBQyxnQkFBZ0IsQ0FDekUsd0JBQXdCLENBQ3hCLENBQUM7UUFFSCxNQUFNLFNBQVMsR0FBa0IsRUFBRSxDQUFDO1FBQ3BDLEtBQUssTUFBTSxNQUFNLElBQUksY0FBYztZQUNqQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUEsK0JBQXFCLEVBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFFdEQsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUVELElBQVksT0FBTztRQUNqQixNQUFNLGFBQWEsR0FBc0IsSUFBSSxDQUFDLGFBQWEsQ0FDekQsdUJBQXVCLENBQ3ZCLENBQUM7UUFFSCxJQUFJLGFBQWEsQ0FBQyxLQUFLO1lBQ3JCLE9BQU8sSUFBQSxrQ0FBd0IsRUFBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7O1lBQ2xELE9BQU8sSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFFRCxJQUFZLE1BQU07UUFDaEIsTUFBTSxXQUFXLEdBQXFCLElBQUksQ0FBQyxhQUFhLENBQ3RELHFCQUFxQixDQUNyQixDQUFDO1FBQ0gsT0FBTyxXQUFXLENBQUMsS0FBSyxDQUFDO0lBQzNCLENBQUM7SUFFRCxJQUFZLGlCQUFpQjtRQUMzQixNQUFNLFNBQVMsR0FBYyxFQUFFLENBQUM7UUFFaEMsS0FBSyxNQUFNLFdBQVcsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ3hDLElBQUksV0FBVyxLQUFLLHFCQUFXLENBQUMsTUFBTSxFQUFFO2dCQUN0QyxTQUFTLENBQUMsSUFBSSxDQUFVO29CQUN0QixJQUFJLEVBQUUsV0FBVztvQkFDakIsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPO29CQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU07aUJBQ2xCLENBQUMsQ0FBQzthQUNKOztnQkFBTSxTQUFTLENBQUMsSUFBSSxDQUFVLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUM7U0FDdkQ7UUFFRCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBRUQsSUFBWSxHQUFHO1FBQ2IsTUFBTSxRQUFRLEdBQXFCLElBQUksQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUUsQ0FBQztRQUMxRSxPQUFPLFFBQVEsQ0FBQyxhQUFhLENBQUM7SUFDaEMsQ0FBQztJQUVPLFFBQVEsR0FBRyxLQUFLLEVBQUUsQ0FBUSxFQUFFLEVBQUU7UUFDcEMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRW5CLE1BQU0sTUFBTSxHQUFXO1lBQ3JCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsU0FBUyxFQUFFLElBQUksQ0FBQyxpQkFBaUI7WUFDakMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHO1lBQ2IsTUFBTSxFQUFFO2dCQUNOLEdBQUcsRUFBRSxJQUFJLENBQUMsV0FBWSxDQUFDLEdBQUk7Z0JBQzNCLElBQUksRUFBRSxJQUFJLENBQUMsV0FBWSxDQUFDLFdBQVk7Z0JBQ3BDLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBWSxDQUFDLEtBQU07YUFDaEM7U0FDRixDQUFDO1FBRUYsTUFBTSxXQUFXLEdBQUcsTUFBTSxJQUFJLENBQUMsV0FBWSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBRXpELE1BQU0sR0FBRyxHQUFHLE1BQU0sS0FBSyxDQUFDLEdBQUcsaUJBQUMsQ0FBQyxNQUFNLEdBQUcsa0JBQVMsQ0FBQyxPQUFPLE9BQU8sRUFBRTtZQUM5RCxNQUFNLEVBQUUsTUFBTTtZQUNkLE9BQU8sRUFBRTtnQkFDUCxjQUFjLEVBQUUsa0JBQWtCO2dCQUNsQyxhQUFhLEVBQUUsVUFBVSxXQUFXLEVBQUU7YUFDdkM7WUFDRCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7U0FDN0IsQ0FBQyxDQUFDO1FBRUgsTUFBTSxJQUFJLEdBQUcsTUFBTSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDOUIsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFaEQsSUFBSSxnQkFBZ0I7WUFDbEIsSUFBSSxDQUFDLFNBQVMsSUFBYTs7O2NBR25CLGdCQUFnQixDQUFDLElBQUk7Ozs7OztzQkFNYixrQkFBUyxDQUFDLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxXQUFXOzs7OztPQUtoRSxDQUFDOztZQUVGLElBQUksQ0FBQyxTQUFTLElBQWE7Ozs7T0FJMUIsQ0FBQztJQUNOLENBQUMsQ0FBQzs7QUEzUUosZ0NBNFFDIn0=