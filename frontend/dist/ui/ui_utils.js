"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UiUtils = void 0;
const date_utils_1 = require("../infra/date_utils");
const router_1 = require("../routing/router");
const country_1 = require("../models/country");
var UiUtils;
(function (UiUtils) {
    UiUtils.allFlags = (countries) => countries
        .map((c) => `
          <span title="${c.name}">
            ${(0, country_1.getFlag)(c.name)}
          </span>
        `)
        .reduce((pflag, cflag) => pflag + cflag);
    UiUtils.lastGameLink = (player) => {
        if (player.lastGame) {
            const lastGameDate = date_utils_1.DateUtils.formatDate(new Date(player.lastGame.date));
            return `
        <route-link 
          class="centered" 
          href="${router_1.RouteEnum.gameRecords}/${player.lastGame.firebaseRef}">
            <span>${lastGameDate}</span>
        </route-link>
      `;
        }
        else
            return `<span class="centered">&mdash;</span>`;
    };
    UiUtils.playerPicture = (picture) => !picture
        ? `<span class="centered" id="picture-placeholder">&mdash;</span>`
        : `<img id="picture" src="${picture}"/>`;
})(UiUtils = exports.UiUtils || (exports.UiUtils = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWlfdXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdWkvdWlfdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsb0RBQWdEO0FBRWhELDhDQUE4QztBQUU5QywrQ0FBcUQ7QUFHckQsSUFBaUIsT0FBTyxDQThCdkI7QUE5QkQsV0FBaUIsT0FBTztJQUNULGdCQUFRLEdBQUcsQ0FBQyxTQUE2QixFQUFVLEVBQUUsQ0FDaEUsU0FBUztTQUNOLEdBQUcsQ0FDRixDQUFDLENBQUMsRUFBRSxFQUFFLENBQVU7eUJBQ0MsQ0FBQyxDQUFDLElBQUk7Y0FDakIsSUFBQSxpQkFBTyxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7O1NBRXBCLENBQ0Y7U0FDQSxNQUFNLENBQUMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUM7SUFFaEMsb0JBQVksR0FBRyxDQUFDLE1BQWMsRUFBVSxFQUFFO1FBQ3JELElBQUksTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUNuQixNQUFNLFlBQVksR0FBRyxzQkFBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFFMUUsT0FBZ0I7OztrQkFHSixrQkFBUyxDQUFDLFdBQVcsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVc7b0JBQ2xELFlBQVk7O09BRXpCLENBQUM7U0FDSDs7WUFBTSxPQUFnQix1Q0FBdUMsQ0FBQztJQUNqRSxDQUFDLENBQUM7SUFFVyxxQkFBYSxHQUFHLENBQUMsT0FBMkIsRUFBVSxFQUFFLENBQ25FLENBQUMsT0FBTztRQUNOLENBQUMsQ0FBVSxnRUFBZ0U7UUFDM0UsQ0FBQyxDQUFVLDBCQUEwQixPQUFPLEtBQUssQ0FBQztBQUN4RCxDQUFDLEVBOUJnQixPQUFPLEdBQVAsZUFBTyxLQUFQLGVBQU8sUUE4QnZCIn0=