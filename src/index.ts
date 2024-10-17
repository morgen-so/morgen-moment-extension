import moment from "moment-timezone";

declare module "moment-timezone" {
  interface Moment {
    formatISODate: () => string;
    formatISODateTime: () => string;
  }
}

moment.fn.formatISODate = function formatISODate() {
  return this.toISOString(true).split("T")[0]!;
};

moment.fn.formatISODateTime = function formatISODateTime() {
  return `${this.toISOString(true).substring(0, 19)}Z`;
};
