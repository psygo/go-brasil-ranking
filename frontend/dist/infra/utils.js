"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginationSlicer = void 0;
const globals_1 = require("./globals");
const paginationSlicer = (startAfter, list) => list.slice(startAfter, startAfter + globals_1.Globals.queryLimit);
exports.paginationSlicer = paginationSlicer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5mcmEvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsdUNBQXlDO0FBRWxDLE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyxVQUFrQixFQUFFLElBQVcsRUFBUyxFQUFFLENBQ3pFLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLFVBQVUsR0FBRyxpQkFBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBRHZDLFFBQUEsZ0JBQWdCLG9CQUN1QiJ9