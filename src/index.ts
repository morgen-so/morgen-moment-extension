import moment from "moment-timezone";

declare module "moment-timezone" {
  interface Moment {
    /**
     * Format as YYYY-MM-DD
     * @returns
     */
    formatISODate: () => string;
    /**
     * Format as YYYY-MM-DDTHH:mm:ssZ, where Z is "Z" for UTC-equivalent, or "+-hh:mm" otherwise
     * @returns
     */
    formatISODateTime: () => string;
    /**
     * Format as YYYY-MM-DDTHH:mm:ss, thus omitting the time zone offset
     * @returns
     */
    formatISODateTimeFloating: () => string;
  }
}

moment.fn.formatISODate = function formatISODate() {
  return this.toISOString(true).split("T")[0]!;
};

moment.fn.formatISODateTime = function formatISODateTime() {
  const iso = this.toISOString(true); // eg. 2024-10-17T15:05:59.150+00:00
  // Split at the start of the fractional seconds
  const [dateTime, rest] = iso.split(".");
  // Remove the milliseconds and always use Z for UTC-equivalent
  const offset = rest!.substring(3).replace("+00:00", "Z");
  return `${dateTime}${offset}`;
};

moment.fn.formatISODateTimeFloating = function formatISODateTimeFloating() {
  const iso = this.toISOString(true); // eg. 2024-10-17T15:05:59.150+00:00
  // Split at the start of the fractional seconds
  const [dateTime, _] = iso.split(".");
  return dateTime!;
};
