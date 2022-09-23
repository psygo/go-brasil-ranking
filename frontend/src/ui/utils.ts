import { Country, getFlag } from "../models/country";

export namespace UiUtils {
  export const allFlags = (countries: readonly Country[]): string => {
    return countries
      .map(
        (c) => /*html*/ `
          <span title="${c.name}">
            ${getFlag(c.name)}
          </span>
        `
      )
      .reduce((pflag, cflag) => pflag + cflag);
  };
}
