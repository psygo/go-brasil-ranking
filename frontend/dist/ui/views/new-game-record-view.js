"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("firebase/auth");
const globals_1 = require("../../infra/globals");
const router_1 = require("../../routing/router");
const game_record_1 = require("../../models/game_record");
const game_event_1 = require("../../models/game_event");
class NewGameRecordView extends HTMLElement {
    static tag = "new-game-record-view";
    currentUser = null;
    constructor() {
        super();
        globals_1.Globals.setup.initAuth();
    }
    async connectedCallback() {
        (0, auth_1.onAuthStateChanged)(globals_1.Globals.setup.auth, (user) => {
            if (user) {
                this.currentUser = user;
                this.setNewGameRecordForm();
            }
            else
                globals_1.Globals.router.manualRouting(router_1.RouteEnum.admin);
        });
    }
    setNewGameRecordForm = () => {
        this.innerHTML = `
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
            <option selected value="${game_record_1.Color.Black}">${game_record_1.Color.Black}</option>
            <option value="${game_record_1.Color.White}">${game_record_1.Color.Black}</option>
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
            <option value="${game_event_1.GameEventTypes.online}">${game_event_1.GameEventTypes.online}</option>
            <option value="${game_event_1.GameEventTypes.live}">${game_event_1.GameEventTypes.live}</option>
            <option value="${game_event_1.GameEventTypes.tournament}">${game_event_1.GameEventTypes.tournament}</option>
            <option value="${game_event_1.GameEventTypes.league}">${game_event_1.GameEventTypes.league}</option>
          </select>

          <div id="game-event-id"></div>
        </fieldset>

        <fieldset>
        </fieldset>

        <button type="submit">Adicionar Partida</buton>
      </form>
    `;
        const sgfInput = this.querySelector("input[name=sgf]");
        sgfInput.onchange = this.sgfOnChange;
        const resignSelect = this.querySelector("select[name=resign]");
        resignSelect.onchange = this.resignSelectOnchange;
        const gameEventTypeSelect = this.querySelector("select[name=game-event-type]");
        gameEventTypeSelect.onchange = this.gameEventTypeSelectOnChange;
        const form = this.querySelector("form");
        form.onsubmit = this.onSubmit;
    };
    get difference() {
        const diffInput = this.querySelector("input[name=difference]");
        if (diffInput)
            return diffInput.valueAsNumber;
        else
            return;
    }
    resignSelectOnchange = () => {
        const resignSelect = this.querySelector("select[name=resign]");
        const diffDiv = this.querySelector("div#difference");
        if (resignSelect.value === "points")
            diffDiv.innerHTML = `
        <input type="number" name="difference" placeholder="diferença"/>
      `;
        else
            diffDiv.innerHTML = "";
    };
    get gameEventRef() {
        const gameEventTypeSelect = this.querySelector("select[name=game-event-type]");
        if (gameEventTypeSelect.value === game_event_1.GameEventTypes.online ||
            gameEventTypeSelect.value === game_event_1.GameEventTypes.league)
            return gameEventTypeSelect.value;
        else {
            const gameEventIdInput = this.querySelector("input[name=game-event-id]");
            return gameEventIdInput.value;
        }
    }
    gameEventTypeSelectOnChange = () => {
        const gameEventTypeSelect = this.querySelector("select[name=game-event-type]");
        const gameEventIdDiv = this.querySelector("div#game-event-id");
        if (gameEventTypeSelect.value === game_event_1.GameEventTypes.tournament ||
            gameEventTypeSelect.value === game_event_1.GameEventTypes.league)
            gameEventIdDiv.innerHTML = `
        <input 
          type="text"
          name="game-event-id"
          placeholder="ID do Torneio ou Liga"/>
      `;
        else
            gameEventIdDiv.innerHTML = "";
    };
    get blackRef() {
        const blackRefInput = this.querySelector("input[name=blackRef]");
        return blackRefInput.value;
    }
    get whiteRef() {
        const whiteRefInput = this.querySelector("input[name=whiteRef]");
        return whiteRefInput.value;
    }
    get date() {
        const dateInput = this.querySelector("input[name=date]");
        return dateInput.valueAsDate?.getTime();
    }
    sgf = "";
    sgfOnChange = () => {
        const sgfInput = this.querySelector("input[name=sgf]");
        const file = sgfInput.files?.item(0);
        const fileReader = new FileReader();
        fileReader.onload = () => {
            if (file.size < 500000)
                this.sgf = fileReader.result;
        };
        if (file)
            fileReader.readAsText(file);
    };
    get whoWins() {
        const colorSelect = this.querySelector("select[name=whoWins]");
        return (0, game_record_1.colorFromString)(colorSelect.value);
    }
    validate = () => {
        if (this.blackRef === this.whiteRef)
            return false;
        else
            return true;
    };
    onSubmit = async (e) => {
        e.preventDefault();
        if (this.validate()) {
            const gameRecord = {
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
                    uid: this.currentUser?.uid,
                    name: this.currentUser?.displayName,
                    email: this.currentUser?.email,
                },
            };
            const userIdToken = await this.currentUser?.getIdToken();
            const res = await fetch(`${globals_1.Globals.apiUrl}${router_1.RouteEnum.gameRecords}/novo`, {
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
                this.innerHTML += `
          <div id="return-msg">
            <p>Partida adicionada com sucesso!</p>
            <p>
              Para visualizá-la, clique 
              <route-link 
                href="${router_1.RouteEnum.gameRecords}/${gameRecordFromServer.firebaseRef}">
                  aqui
              </route-link>.
            </p>
          </div>
        `;
            else
                this.innerHTML += `
          <div id="return-msg">
            <p>Não foi possível adicionar tal partida.</p>
          </div>
        `;
        }
    };
}
exports.default = NewGameRecordView;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3LWdhbWUtcmVjb3JkLXZpZXcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdWkvdmlld3MvbmV3LWdhbWUtcmVjb3JkLXZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBeUQ7QUFFekQsaURBQW1EO0FBRW5ELGlEQUFpRDtBQUVqRCwwREFBOEU7QUFDOUUsd0RBQXVFO0FBRXZFLE1BQXFCLGlCQUFrQixTQUFRLFdBQVc7SUFDeEQsTUFBTSxDQUFVLEdBQUcsR0FBVyxzQkFBc0IsQ0FBQztJQUU3QyxXQUFXLEdBQWdCLElBQUksQ0FBQztJQUV4QztRQUNFLEtBQUssRUFBRSxDQUFDO1FBRVIsaUJBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELEtBQUssQ0FBQyxpQkFBaUI7UUFDckIsSUFBQSx5QkFBa0IsRUFBQyxpQkFBQyxDQUFDLEtBQUssQ0FBQyxJQUFLLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUN6QyxJQUFJLElBQUksRUFBRTtnQkFDUixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztnQkFDeEIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7YUFDN0I7O2dCQUFNLGlCQUFDLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxrQkFBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLG9CQUFvQixHQUFHLEdBQVMsRUFBRTtRQUN4QyxJQUFJLENBQUMsU0FBUyxHQUFZOzs7Ozs7Ozs7Ozs7Ozs7c0NBZVEsbUJBQUssQ0FBQyxLQUFLLEtBQUssbUJBQUssQ0FBQyxLQUFLOzZCQUNwQyxtQkFBSyxDQUFDLEtBQUssS0FBSyxtQkFBSyxDQUFDLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBeUIzQiwyQkFBYyxDQUFDLE1BQU0sS0FBSywyQkFBYyxDQUFDLE1BQU07NkJBQy9D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