export namespace DateUtils {
  const defaultDateFormat = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };

  export const formatDate = (
    date: Date,
    locale: string = "pt-BR",
    format = defaultDateFormat
  ): string => date.toLocaleString(locale, format);
}
