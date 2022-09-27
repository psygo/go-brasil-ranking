"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const players_table_1 = __importDefault(require("../components/players_table"));
class PlayersView extends HTMLElement {
    static tag = "players-view";
    async connectedCallback() {
        document.title = "RBGo | Jogadores";
        this.appendChild(new players_table_1.default("Jogadores", "max"));
    }
}
exports.default = PlayersView;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVycy12aWV3LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3VpL3ZpZXdzL3BsYXllcnMtdmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGdGQUF1RDtBQUV2RCxNQUFxQixXQUFZLFNBQVEsV0FBVztJQUNsRCxNQUFNLENBQVUsR0FBRyxHQUFXLGNBQWMsQ0FBQztJQUU3QyxLQUFLLENBQUMsaUJBQWlCO1FBQ3JCLFFBQVEsQ0FBQyxLQUFLLEdBQUcsa0JBQWtCLENBQUM7UUFFcEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLHVCQUFZLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDekQsQ0FBQzs7QUFQSCw4QkFRQyJ9