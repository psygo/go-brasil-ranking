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
        countries: [...this.countries],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21vZGVscy9wbGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBWUEsTUFBYSxNQUFNO0lBRUM7SUFDQTtJQUNBO0lBSGxCLFlBQ2tCLElBQVksRUFDWixTQUF1QyxFQUN2QyxHQUFXO1FBRlgsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLGNBQVMsR0FBVCxTQUFTLENBQThCO1FBQ3ZDLFFBQUcsR0FBSCxHQUFHLENBQVE7SUFDMUIsQ0FBQztJQUVKLFNBQVMsR0FBRyxHQUFxQixFQUFFLENBQUMsQ0FBQztRQUNuQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7UUFDZixTQUFTLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDOUIsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHO0tBQ2QsQ0FBQyxDQUFDO0lBRUgsTUFBTSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQVMsRUFBVSxFQUFFO1FBQ3pDLE9BQU8sSUFBSSxNQUFNLENBQ2YsSUFBSSxDQUFDLElBQWMsRUFDbkIsSUFBSSxDQUFDLFNBQWdDLEVBQ3JDLElBQUksQ0FBQyxHQUFhLENBQ25CLENBQUM7SUFDSixDQUFDLENBQUM7O0FBbkJKLHdCQW9CQztBQUVZLFFBQUEsWUFBWSxHQUF1QjtJQUM5QztRQUNFLElBQUksRUFBRSxpQkFBaUI7UUFDdkIsU0FBUyxFQUFFO1lBQ1Q7Z0JBQ0UsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsSUFBSSxFQUFFLFdBQVc7YUFDbEI7U0FDRjtRQUNELEdBQUcsRUFBRSxJQUFJO0tBQ1Y7Q0FDRixDQUFDIn0=