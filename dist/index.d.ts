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
export {};
//# sourceMappingURL=index.d.ts.map