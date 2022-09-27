"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const game_records_table_1 = __importDefault(require("../components/game_records_table"));
const players_table_1 = __importDefault(require("../components/players_table"));
class HomeView extends HTMLElement {
    static tag = "home-view";
    async connectedCallback() {
        document.title = "Ranking Brasileiro de Go";
        this.append(new players_table_1.default("Os 10 Melhores Brasileiros", 10, true), new game_records_table_1.default("Partidas Recentes", 5));
    }
}
exports.default = HomeView;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS12aWV3LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3VpL3ZpZXdzL2hvbWUtdmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLDBGQUFnRTtBQUNoRSxnRkFBdUQ7QUFFdkQsTUFBcUIsUUFBUyxTQUFRLFdBQVc7SUFDL0MsTUFBTSxDQUFVLEdBQUcsR0FBVyxXQUFXLENBQUM7SUFFMUMsS0FBSyxDQUFDLGlCQUFpQjtRQUNyQixRQUFRLENBQUMsS0FBSyxHQUFHLDBCQUEwQixDQUFDO1FBRTVDLElBQUksQ0FBQyxNQUFNLENBQ1QsSUFBSSx1QkFBWSxDQUFDLDRCQUE0QixFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFDeEQsSUFBSSw0QkFBZ0IsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUMsQ0FFN0MsQ0FBQztJQUNKLENBQUM7O0FBWEgsMkJBWUMifQ==