import PlayersTable from "../components/players_table";

export default class SearchView extends HTMLElement {
  static readonly tag: string = "search-view";

  constructor() {
    super();
  }

  connectedCallback(): void {
    document.title = "Procurar";

    this.innerHTML = /*html*/ `
      <form>
        <fieldset>
          <input 
            name="search" 
            required 
            place
            autofocus/>
            
          <select name="search-type">
            <option value="playerName" selected>Nome do Jogador</option>
            <option value="date">Dia da Partida(s)</option>
            <option value="eventName">Nome do Evento</option>
          </select>
          
          <button id="search" type="submit">Procurar</buton>
        </fieldset>
      </form>

      <div id="search-result"></div>
    `;

    this.select.onclick = this.selectType;
    this.form.onsubmit = (evt: Event): void => {
      evt.preventDefault();

      const searchResultDiv: HTMLDivElement =
        this.querySelector("div#search-result")!;

      searchResultDiv.replaceChildren(
        new PlayersTable("", false, "", this.searchInput.value)
      );
    };
  }

  private get form(): HTMLFormElement {
    return this.querySelector("form")!;
  }

  private get select(): HTMLSelectElement {
    return this.querySelector("select")!;
  }

  private get searchInput(): HTMLInputElement {
    return this.querySelector('input[name="search"]')!;
  }

  private selectType = (evt: Event): void => {
    evt.preventDefault();

    const searchInput = this.searchInput;

    switch (this.select.value) {
      case "playerName":
        searchInput.placeholder = "João da Silva";
        searchInput.type = "text";
        break;
      case "date":
        searchInput.placeholder = "01-01-2022";
        searchInput.type = "date";
        break;
      case "eventName":
        searchInput.placeholder = "Copa do Brasil 2022";
        searchInput.type = "text";
        break;
      default:
        throw new Error("No value for this selection.");
    }
  };
}
