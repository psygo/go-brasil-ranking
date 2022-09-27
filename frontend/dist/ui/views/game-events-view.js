"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const game_events_table_1 = __importDefault(require("../components/game_events_table"));
class GameEventsView extends HTMLElement {
    static tag = "game-events-view";
    async connectedCallback() {
        document.title = "RBGo | Eventos";
        this.appendChild(new game_events_table_1.default("Eventos"));
    }
}
exports.default = GameEventsView;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZS1ldmVudHMtdmlldy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91aS92aWV3cy9nYW1lLWV2ZW50cy12aWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsd0ZBQThEO0FBRTlELE1BQXFCLGNBQWUsU0FBUSxXQUFXO0lBQ3JELE1BQU0sQ0FBVSxHQUFHLEdBQVcsa0JBQWtCLENBQUM7SUFFakQsS0FBSyxDQUFDLGlCQUFpQjtRQUNyQixRQUFRLENBQUMsS0FBSyxHQUFHLGdCQUFnQixDQUFDO1FBRWxDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSwyQkFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7QUFQSCxpQ0FRQyJ9