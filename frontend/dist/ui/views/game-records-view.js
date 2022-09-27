"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const game_records_table_1 = __importDefault(require("../components/game_records_table"));
class GameRecordsView extends HTMLElement {
    static tag = "game-records-view";
    async connectedCallback() {
        document.title = "RBGo | Partidas";
        this.appendChild(new game_records_table_1.default("Partidas"));
    }
}
exports.default = GameRecordsView;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZS1yZWNvcmRzLXZpZXcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdWkvdmlld3MvZ2FtZS1yZWNvcmRzLXZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwwRkFBZ0U7QUFFaEUsTUFBcUIsZUFBZ0IsU0FBUSxXQUFXO0lBQ3RELE1BQU0sQ0FBVSxHQUFHLEdBQVcsbUJBQW1CLENBQUM7SUFFbEQsS0FBSyxDQUFDLGlCQUFpQjtRQUNyQixRQUFRLENBQUMsS0FBSyxHQUFHLGlCQUFpQixDQUFDO1FBRW5DLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSw0QkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7O0FBUEgsa0NBUUMifQ==