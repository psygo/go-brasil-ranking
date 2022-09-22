"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateUtils = void 0;
var DateUtils;
(function (DateUtils) {
    const defaultDateFormat = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
    };
    DateUtils.formatDate = (date, locale = "pt-BR", format = defaultDateFormat) => date.toLocaleString(locale, format);
})(DateUtils = exports.DateUtils || (exports.DateUtils = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZV91dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmZyYS9kYXRlX3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLElBQWlCLFNBQVMsQ0FZekI7QUFaRCxXQUFpQixTQUFTO0lBQ3hCLE1BQU0saUJBQWlCLEdBQStCO1FBQ3BELElBQUksRUFBRSxTQUFTO1FBQ2YsS0FBSyxFQUFFLFNBQVM7UUFDaEIsR0FBRyxFQUFFLFNBQVM7S0FDZixDQUFDO0lBRVcsb0JBQVUsR0FBRyxDQUN4QixJQUFVLEVBQ1YsU0FBaUIsT0FBTyxFQUN4QixNQUFNLEdBQUcsaUJBQWlCLEVBQ2xCLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNuRCxDQUFDLEVBWmdCLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBWXpCIn0=