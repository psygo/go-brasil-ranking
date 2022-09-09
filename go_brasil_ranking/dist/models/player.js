"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dummyPlayers = exports.Player = void 0;
class Player {
    name;
    countries;
    elo;
    constructor(name, countries, elo) {
        this.name = name;
        this.countries = countries;
        this.elo = elo;
    }
    serialize = () => ({
        name: this.name,
        countries: this.countries,
        elo: this.elo,
    });
    static deserialize = (json) => {
        return new Player(json.name, json.countries, json.elo);
    };
}
exports.Player = Player;
exports.dummyPlayers = [
    {
        name: "Philippe Fanaro",
        countries: [
            {
                name: "Brazil",
                state: "SP",
                city: "São Paulo",
            },
        ],
        elo: 2100,
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21vZGVscy9wbGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBWUEsTUFBYSxNQUFNO0lBRUM7SUFDQTtJQUNBO0lBSGxCLFlBQ2tCLElBQVksRUFDWixTQUF1QyxFQUN2QyxHQUFXO1FBRlgsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLGNBQVMsR0FBVCxTQUFTLENBQThCO1FBQ3ZDLFFBQUcsR0FBSCxHQUFHLENBQVE7SUFDMUIsQ0FBQztJQUVKLFNBQVMsR0FBRyxHQUFxQixFQUFFLENBQUMsQ0FBQztRQUNuQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7UUFDZixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQWdDO1FBQ2hELEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztLQUNkLENBQUMsQ0FBQztJQUVILE1BQU0sQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFTLEVBQVUsRUFBRTtRQUN6QyxPQUFPLElBQUksTUFBTSxDQUNmLElBQUksQ0FBQyxJQUFjLEVBQ25CLElBQUksQ0FBQyxTQUFnQyxFQUNyQyxJQUFJLENBQUMsR0FBYSxDQUNuQixDQUFDO0lBQ0osQ0FBQyxDQUFDOztBQW5CSix3QkFvQkM7QUFFWSxRQUFBLFlBQVksR0FBdUI7SUFDOUM7UUFDRSxJQUFJLEVBQUUsaUJBQWlCO1FBQ3ZCLFNBQVMsRUFBRTtZQUNUO2dCQUNFLElBQUksRUFBRSxRQUFRO2dCQUNkLEtBQUssRUFBRSxJQUFJO2dCQUNYLElBQUksRUFBRSxXQUFXO2FBQ2xCO1NBQ0Y7UUFDRCxHQUFHLEVBQUUsSUFBSTtLQUNWO0NBQ0YsQ0FBQyJ9