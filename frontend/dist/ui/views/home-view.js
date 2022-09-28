"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const game_events_table_1 = __importDefault(require("../components/game_events_table"));
const game_records_table_1 = __importDefault(require("../components/game_records_table"));
const players_table_1 = __importDefault(require("../components/players_table"));
class HomeView extends HTMLElement {
    static tag = "home-view";
    async connectedCallback() {
        document.title = "Ranking Brasileiro de Go";
        this.append(new players_table_1.default("Os 10 Melhores Brasileiros", true), new game_records_table_1.default("Partidas Recentes"), new game_events_table_1.default("Eventos Recentes"));
    }
}
exports.default = HomeView;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS12aWV3LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3VpL3ZpZXdzL2hvbWUtdmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHdGQUE4RDtBQUM5RCwwRkFBZ0U7QUFDaEUsZ0ZBQXVEO0FBRXZELE1BQXFCLFFBQVMsU0FBUSxXQUFXO0lBQy9DLE1BQU0sQ0FBVSxHQUFHLEdBQVcsV0FBVyxDQUFDO0lBRTFDLEtBQUssQ0FBQyxpQkFBaUI7UUFDckIsUUFBUSxDQUFDLEtBQUssR0FBRywwQkFBMEIsQ0FBQztRQUU1QyxJQUFJLENBQUMsTUFBTSxDQUNULElBQUksdUJBQVksQ0FBQyw0QkFBNEIsRUFBRSxJQUFJLENBQUMsRUFDcEQsSUFBSSw0QkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQyxFQUN6QyxJQUFJLDJCQUFlLENBQUMsa0JBQWtCLENBQUMsQ0FDeEMsQ0FBQztJQUNKLENBQUM7O0FBWEgsMkJBWUMifQ==