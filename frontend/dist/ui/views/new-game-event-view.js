"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("firebase/auth");
const globals_1 = require("../../infra/globals");
const router_1 = require("../../routing/router");
const game_event_1 = require("../../models/game_event");
class NewGameEventView extends HTMLElement {
    static tag = "new-game-event-view";
    currentUser = null;
    constructor() {
        super();
        globals_1.Globals.setup.initAuth();
    }
    async connectedCallback() {
        (0, auth_1.onAuthStateChanged)(globals_1.Globals.setup.auth, (user) => {
            if (user) {
                this.currentUser = user;
                this.setNewGameEventForm();
            }
            else
                globals_1.Globals.router.manualRouting(router_1.RouteEnum.admin);
        });
    }
    type = game_event_1.GameEventTypes.tournament;
    setNewGameEventForm = () => {
        this.innerHTML = `
      <form>
        <fieldset>
          <label for="type">Tipo</label>
          <select name="type">
            <option selected value="${this.type}">Torneio</option>
            <option value="${game_event_1.GameEventTypes.league}">Liga</option>
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
        const typeSelect = this.querySelector("select");
        typeSelect.onchange = this.changeDatesOnForm;
        this.changeDatesType();
        const form = this.querySelector("form");
        form.onsubmit = this.onSubmit;
    };
    changeDatesOnForm = (e) => {
        e.preventDefault();
        const typeSelect = this.querySelector("select[name=type]");
        this.type = (0, game_event_1.gameEventTypeFromString)(typeSelect.value);
        this.changeDatesType();
    };
    changeDatesType = () => {
        const dateFieldset = this.querySelector("fieldset#dates");
        if (this.type === game_event_1.GameEventTypes.league)
            dateFieldset.innerHTML = `
        <label for="date-init">Data de Início</label>
        <input required type="date" name="date-init"/>

        <label for="date-end">Data de Fim (Opcional)</label>
        <input type="date" name="date-end"/>
      `;
        else if (this.type === game_event_1.GameEventTypes.tournament) {
            dateFieldset.innerHTML = `
        <label for="">Datas do Torneio</label>
        
        <div id="dates-select" class="multi-select">
          <input type="date" name="date-1"/>
        </div>
        
        <button id="add-country-select">+</button>
      `;
            const addDateButton = this.querySelector("button#add-country-select");
            addDateButton.onclick = (e) => {
                e.preventDefault();
                const datesDiv = this.querySelector("div#dates-select");
                datesDiv.innerHTML += `
          <input type="date" name="date-${this.numberOfDatesForTournament}"/>
        `;
            };
        }
    };
    numberOfDatesForTournament = 1;
    get tournamentDates() {
        const datesDiv = this.querySelector("div#dates-select");
        const datesInputs = datesDiv.querySelectorAll("input");
        const dates = [];
        for (const input of datesInputs)
            dates.push(input.valueAsDate.getTime());
        return dates;
    }
    get name() {
        const nameInput = this.querySelector("input[name=name]");
        return nameInput.value;
    }
    get link() {
        const linkInput = this.querySelector("input[name=link]");
        return linkInput.value;
    }
    get dateInit() {
        const dateInitInput = this.querySelector("input[name=date-init]");
        return dateInitInput.valueAsDate.getTime();
    }
    get dateEnd() {
        const dateEndInput = this.querySelector("input[name=date-end]");
        return dateEndInput.valueAsDate.getTime();
    }
    onSubmit = async (e) => {
        e.preventDefault();
        let dates;
        if (this.type === game_event_1.GameEventTypes.league)
            dates = {
                type: game_event_1.GameEventTypes.league,
                dateInit: this.dateInit,
                dateEnd: this.dateEnd,
            };
        else if (this.type === game_event_1.GameEventTypes.tournament)
            dates = {
                type: game_event_1.GameEventTypes.tournament,
                dates: this.tournamentDates,
            };
        const gameEvent = {
            ...dates,
            name: this.name,
            link: this.link,
            author: {
                uid: this.currentUser?.uid,
                name: this.currentUser?.displayName,
                email: this.currentUser?.email,
            },
        };
        const userIdToken = await this.currentUser?.getIdToken();
        const res = await fetch(`${globals_1.Globals.apiUrl}${router_1.RouteEnum.gameEvents}/novo`, {
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
            this.innerHTML += `
        <div id="return-msg">
          <p>
            ${gameEventFromServer.name} adicionado(a) com sucesso!
          </p>

          <p>
            Para visualizá-lo, clique 
            <route-link 
              href="${router_1.RouteEnum.gameEvents}/${gameEventFromServer.firebaseRef}">
                aqui.
            </route-link>
          </p>
        </div>
      `;
        else
            this.innerHTML += `
        <div id="return-msg">
          <p>Não foi possível adicionar tal evento.</p>
        </div>
      `;
    };
}
exports.default = NewGameEventView;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3LWdhbWUtZXZlbnQtdmlldy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91aS92aWV3cy9uZXctZ2FtZS1ldmVudC12aWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsd0NBQXlEO0FBRXpELGlEQUFtRDtBQUVuRCxpREFBaUQ7QUFFakQsd0RBR2lDO0FBRWpDLE1BQXFCLGdCQUFpQixTQUFRLFdBQVc7SUFDdkQsTUFBTSxDQUFVLEdBQUcsR0FBVyxxQkFBcUIsQ0FBQztJQUU1QyxXQUFXLEdBQWdCLElBQUksQ0FBQztJQUV4QztRQUNFLEtBQUssRUFBRSxDQUFDO1FBRVIsaUJBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELEtBQUssQ0FBQyxpQkFBaUI7UUFDckIsSUFBQSx5QkFBa0IsRUFBQyxpQkFBQyxDQUFDLEtBQUssQ0FBQyxJQUFLLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUN6QyxJQUFJLElBQUksRUFBRTtnQkFDUixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztnQkFDeEIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7YUFDNUI7O2dCQUFNLGlCQUFDLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxrQkFBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLElBQUksR0FBbUIsMkJBQWMsQ0FBQyxVQUFVLENBQUM7SUFFakQsbUJBQW1CLEdBQUcsR0FBUyxFQUFFO1FBQ3ZDLElBQUksQ0FBQyxTQUFTLEdBQVk7Ozs7O3NDQUtRLElBQUksQ0FBQyxJQUFJOzZCQUNsQiwyQkFBYyxDQUFDLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBMEI3QyxDQUFDO1FBRUYsTUFBTSxVQUFVLEdBQXNCLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFFLENBQUM7UUFDcEUsVUFBVSxD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