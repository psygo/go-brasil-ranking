import { Globals as g } from "./globals";

export const paginationSlicer = (startAfter: number, list: any[]): any[] =>
  list.slice(startAfter, startAfter + g.queryLimit);
