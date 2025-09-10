/**
 * @fileoverview Configuration Constants for BS Date Library
 * Contains all the essential calendar data, month/day mappings, and epoch definitions
 * required for accurate Bikram Sambat to Anno Domini date conversions.
 *
 * @author Deepak Lamichhane <lamichhanedeepak@gmail.com>
 * @version 1.0.0
 * @license MIT
 */

/**
 * Bikram Sambat calendar data containing the number of days in each month for each supported year.
 * The BS calendar has variable month lengths that change from year to year, unlike the Gregorian calendar.
 * Each array contains 12 elements representing days in months from Baisakh (1st) to Chaitra (12th).
 *
 * @constant
 * @type {Object.<number, Array<number>>}
 * @example
 * // Get days in each month for BS year 2082
 * const daysIn2082 = monthDaysInBSYear[2082]; // [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30]
 *
 * // Get days in Baisakh (1st month) of BS year 2082
 * const baisakhDays = monthDaysInBSYear[2082][0]; // 30
 */
export const monthDaysInBSYear = {
  2000: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  2001: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2002: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2003: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2004: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  2005: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2006: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2007: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2008: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
  2009: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2010: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2011: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2012: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
  2013: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2014: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2015: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2016: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
  2017: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2018: [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2019: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  2020: [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
  2021: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2022: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
  2023: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  2024: [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
  2025: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2026: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2027: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  2028: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2029: [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30],
  2030: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2031: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  2032: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2033: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2034: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2035: [30, 32, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
  2036: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2037: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2038: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2039: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
  2040: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2041: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2042: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2043: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
  2044: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2045: [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2046: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2047: [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
  2048: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2049: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
  2050: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  2051: [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
  2052: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2053: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
  2054: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  2055: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2056: [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30],
  2057: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2058: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  2059: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2060: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2061: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2062: [30, 32, 31, 32, 31, 31, 29, 30, 29, 30, 29, 31],
  2063: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2064: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2065: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2066: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
  2067: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2068: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2069: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2070: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
  2071: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2072: [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2073: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2074: [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
  2075: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2076: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
  2077: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  2078: [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
  2079: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2080: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
  2081: [31, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30],
  2082: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
  2083: [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30],
  2084: [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30],
  2085: [31, 32, 31, 32, 30, 31, 30, 30, 29, 30, 30, 30],
  2086: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
  2087: [31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30],
  2088: [30, 31, 32, 32, 30, 31, 30, 30, 29, 30, 30, 30],
  2089: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
  2090: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
};

/**
 * Mapping of Bikram Sambat month names in Devanagari script to their romanized equivalents.
 * Contains all 12 months of the BS calendar with their proper pronunciation in English.
 *
 * @constant
 * @type {Object.<string, string>}
 * @example
 * // Get romanized name of a Nepali month
 * console.log(months["बैशाख"]); // "Baisakh"
 * console.log(months["भाद्र"]); // "Bhadra"
 *
 * // Get all Nepali month names
 * const nepaliMonths = Object.keys(months); // ["बैशाख", "जेठ", "असार", ...]
 *
 * // Get all romanized month names
 * const romanizedMonths = Object.values(months); // ["Baisakh", "Jeth", "Asar", ...]
 */
export const months = {
  बैशाख: "Baisakh",
  जेठ: "Jeth",
  असार: "Asar",
  श्रावण: "Shrawan",
  भाद्र: "Bhadra",
  आश्विन: "Ashwin",
  कार्तिक: "Kartik",
  मंसिर: "Mangsir",
  पुष: "Poush",
  माघ: "Magh",
  फाल्गुण: "Falgun",
  चैत: "Chaitra",
};

/**
 * Mapping of Bikram Sambat weekday names in Devanagari script to their romanized equivalents.
 * Contains all 7 days of the week with their proper pronunciation in English.
 * The order corresponds to JavaScript's Date.getDay() where Sunday = 0, Monday = 1, etc.
 *
 * @constant
 * @type {Object.<string, string>}
 * @example
 * // Get romanized name of a Nepali weekday
 * console.log(weekdays["आइतबार"]); // "Aaitabar" (Sunday)
 * console.log(weekdays["सोमबार"]); // "Sombar" (Monday)
 *
 * // Get all Nepali weekday names
 * const nepaliWeekdays = Object.keys(weekdays); // ["आइतबार", "सोमबार", "मंगलवार", ...]
 *
 * // Get all romanized weekday names
 * const romanizedWeekdays = Object.values(weekdays); // ["Aaitabar", "Sombar", "Mangalbar", ...]
 */
export const weekdays = {
  आइतबार: "Aaitabar",
  सोमबार: "Sombar",
  मंगलवार: "Mangalbar",
  बुधबार: "Budhbar",
  बिहीबार: "Bihibar",
  शुक्रबार: "Shukrabar",
  शनिवार: "Shanibar",
};

/**
 * Array of English weekday names in standard order.
 * Used for localized day name output. The order corresponds to JavaScript's Date.getDay()
 * where index 0 = Sunday, 1 = Monday, ..., 6 = Saturday.
 *
 * @constant
 * @type {Array<string>}
 * @example
 * // Get English weekday name by index
 * console.log(weekdaysLocal[0]); // "Sunday"
 * console.log(weekdaysLocal[1]); // "Monday"
 *
 * // Usage with Date.getDay()
 * const today = new Date();
 * const dayName = weekdaysLocal[today.getDay()]; // e.g., "Wednesday"
 */
export const weekdaysLocal = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

/**
 * Bikram Sambat epoch date representing the starting point for BS calendar calculations.
 * This corresponds to BS year 2000, month 1 (Baisakh), day 1.
 *
 * @constant
 * @type {Array<number>}
 * @example
 * const [year, month, day] = epochBS; // [2000, 1, 1]
 */
export const epochBS = [2000, 1, 1];

/**
 * Anno Domini epoch start date representing the earliest supported AD date for conversion.
 * This date corresponds to BS 2000/01/01 and marks the beginning of the supported date range.
 *
 * @constant
 * @type {Date}
 * @example
 * console.log(epochADStart); // 1943-04-14T00:00:00.000Z
 */
export const epochADStart = new Date("1943-04-14");

/**
 * Anno Domini epoch end date representing the latest supported AD date for conversion.
 * This date marks the end of the supported date range for BS calendar conversions.
 *
 * @constant
 * @type {Date}
 * @example
 * console.log(epochADEnd); // 2034-04-13T00:00:00.000Z
 */
export const epochADEnd = new Date("2034-04-13");

/**
 * Julian day number corresponding to the BS epoch start date (1943-04-14).
 * This value is used internally for accurate date calculations and conversions
 * between BS and AD calendar systems.
 *
 * @constant
 * @type {number}
 * @example
 * // This represents the Julian day for April 14, 1943
 * console.log(epochJulianDays); // 2430828.5
 */
export const epochJulianDays = 2430828.5;
