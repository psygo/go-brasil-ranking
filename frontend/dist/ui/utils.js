"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UiUtils = void 0;
const country_1 = require("../models/country");
var UiUtils;
(function (UiUtils) {
    UiUtils.allFlags = (countries) => {
        return countries
            .map((c) => `
          <span title="${c.name}">
            ${(0, country_1.getFlag)(c.name)}
          </span>
        `)
            .reduce((pflag, cflag) => pflag + cflag);
    };
})(UiUtils = exports.UiUtils || (exports.UiUtils = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdWkvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0NBQXFEO0FBRXJELElBQWlCLE9BQU8sQ0FZdkI7QUFaRCxXQUFpQixPQUFPO0lBQ1QsZ0JBQVEsR0FBRyxDQUFDLFNBQTZCLEVBQVUsRUFBRTtRQUNoRSxPQUFPLFNBQVM7YUFDYixHQUFHLENBQ0YsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFVO3lCQUNDLENBQUMsQ0FBQyxJQUFJO2NBQ2pCLElBQUEsaUJBQU8sRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDOztTQUVwQixDQUNGO2FBQ0EsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDO0lBQzdDLENBQUMsQ0FBQztBQUNKLENBQUMsRUFaZ0IsT0FBTyxHQUFQLGVBQU8sS0FBUCxlQUFPLFFBWXZCIn0=