/**
 * @fileoverview BS Date - Bikram Sambat Date Library
 * A comprehensive JavaScript library for converting between Anno Domini (AD/Gregorian)
 * and Bikram Sambat (BS/Nepali) calendar dates.
 *
 * @author Deepak Lamichhane <lamichhanedeepak@gmail.com>
 * @version 1.0.0
 * @license MIT
 */

import julian from "julian";
import { BSDateOutOfRangeError } from "./errors.js";
import "./number-utils.js";
import {
  monthDaysInBSYear,
  epochJulianDays,
  epochBS,
  months,
  weekdays,
  weekdaysLocal,
} from "./config.js";

/**
 * BSDate class for handling Bikram Sambat calendar dates.
 * Provides conversion between BS and AD dates, formatting, and localization features.
 *
 * @class BSDate
 * @example
 * // Create a new BS date
 * const bsDate = new BSDate(2082, 5, 25);
 *
 * // Convert to AD
 * const adDate = bsDate.toAD();
 *
 * // Format in Nepali
 * const nepaliDate = bsDate.toNepali(); // "भाद्र २५, २०८२"
 */
class BSDate {
  /**
   * Creates a new BSDate instance.
   *
   * @param {number} year - BS year (2000-2090)
   * @param {number} month - BS month (1-12)
   * @param {number} day - BS day (1-32, varies by month and year)
   * @throws {Error} When year, month, or day is not provided
   * @example
   * const bsDate = new BSDate(2082, 5, 25);
   */
  constructor(year, month, day) {
    if (!year || !month || !day) {
      throw new Error("Year, month, and day are required");
    }

    /** @type {number} The BS year */
    this.year = year;

    /** @type {number} The BS month (1-12) */
    this.month = month;

    /** @type {number} The BS day */
    this.day = day;
  }

  /**
   * Converts the BS date to an Anno Domini (Gregorian) Date object.
   *
   * @returns {Date} The equivalent AD date
   * @throws {BSDateOutOfRangeError} When the BS date is invalid or out of range
   * @example
   * const bsDate = new BSDate(2082, 5, 25);
   * const adDate = bsDate.toAD(); // 2025-09-10T00:00:00.000Z
   */
  toAD() {
    this.#validateBSDate();
    return julian.toDate(this.#bsToJulianDays());
  }

  /**
   * Formats the BS date in Nepali script.
   *
   * @returns {string} The formatted date in Nepali (e.g., "भाद्र २५, २०८२")
   * @example
   * const bsDate = new BSDate(2082, 5, 25);
   * const nepaliDate = bsDate.toNepali(); // "भाद्र २५, २०८२"
   */
  toNepali() {
    return `${this.monthName()} ${this.day.toNepali()}, ${this.year.toNepali()}`;
  }

  /**
   * Gets the month name in Nepali or romanized format.
   *
   * @param {Object} [options={}] - Formatting options
   * @param {boolean} [options.romanized=false] - If true, returns romanized month name
   * @returns {string} The month name
   * @example
   * const bsDate = new BSDate(2082, 5, 25);
   * bsDate.monthName(); // "भाद्र"
   * bsDate.monthName({ romanized: true }); // "Bhadra"
   */
  monthName({ romanized = false } = {}) {
    return romanized
      ? Object.values(months)[this.month - 1]
      : Object.keys(months)[this.month - 1];
  }

  /**
   * Gets the day name in various formats.
   *
   * @param {Object} [options={}] - Formatting options
   * @param {boolean} [options.romanized=false] - If true, returns romanized day name
   * @param {boolean} [options.localized=false] - If true, returns English day name
   * @returns {string} The day name
   * @throws {Error} When both romanized and localized are true
   * @example
   * const bsDate = new BSDate(2082, 5, 18);
   * bsDate.dayName(); // "बुधबार"
   * bsDate.dayName({ romanized: true }); // "Budhbar"
   * bsDate.dayName({ localized: true }); // "Wednesday"
   */
  dayName({ romanized = false, localized = false } = {}) {
    if (romanized && localized) {
      throw new Error(
        "You must provide exactly one of :romanized or :localized"
      );
    }
    const adDate = this.toAD();
    if (localized) {
      return weekdaysLocal[adDate.getDay()];
    }

    return romanized
      ? Object.values(weekdays)[adDate.getDay()]
      : Object.keys(weekdays)[adDate.getDay()];
  }

  /**
   * Creates a BSDate instance from an Anno Domini (Gregorian) Date object.
   *
   * @static
   * @param {Date} adDate - The AD date to convert
   * @returns {BSDate} A new BSDate instance
   * @example
   * const adDate = new Date('2025-09-10');
   * const bsDate = BSDate.fromAD(adDate); // BSDate { year: 2082, month: 5, day: 25 }
   */
  static fromAD(adDate) {
    const [year, month, day] = this.#julianDaysToBS(julian(adDate));
    return new BSDate(year, month, day);
  }

  /**
   * Validates the BS date against supported ranges and calendar data.
   *
   * @private
   * @throws {BSDateOutOfRangeError} When the date is invalid or out of range
   * @returns {boolean} True if the date is valid
   */
  #validateBSDate() {
    if (!this.#validDate()) {
      throw new BSDateOutOfRangeError(
        `Year ${this.year} is out of valid range (${Object.keys(monthDaysInBSYear)[0]}-${Object.keys(monthDaysInBSYear)[Object.keys(monthDaysInBSYear).length - 1]})`
      );
    }
    return true;
  }

  /**
   * Checks if the current BS date is valid according to calendar data.
   *
   * @private
   * @returns {boolean} True if the date is valid, false otherwise
   */
  #validDate() {
    if (
      Object.hasOwn(monthDaysInBSYear, this.year) &&
      this.month > 0 &&
      this.month <= 12 &&
      this.day > 0 &&
      this.day <= monthDaysInBSYear[this.year][this.month - 1]
    ) {
      return true;
    }
    return false;
  }

  /**
   * Converts the BS date to Julian days for calendar calculations.
   *
   * @private
   * @returns {number} The number of Julian days
   */
  #bsToJulianDays() {
    let julianDays = epochJulianDays;

    // Add days for all complete years before the target year
    for (let year = epochBS[0]; year < this.year; year++) {
      julianDays += monthDaysInBSYear[year].reduce(
        (acc, curr) => acc + curr,
        0
      );
    }

    // Add days for all complete months before the target month
    julianDays += monthDaysInBSYear[this.year]
      .slice(0, this.month - 1)
      .reduce((acc, curr) => acc + curr, 0);

    // Add the remaining days (subtract 1 because we count from day 0)
    julianDays += this.day - 1;
    return julianDays;
  }

  /**
   * Converts Julian days to BS date components.
   *
   * @private
   * @static
   * @param {number} julianDays - The Julian day number
   * @returns {Array<number>} An array containing [year, month, day] in BS calendar
   */
  static #julianDaysToBS(julianDays) {
    let year = epochBS[0];
    let remainingDays = julianDays - epochJulianDays;

    // Find the correct year by subtracting full years
    while (
      remainingDays >
      monthDaysInBSYear[year].reduce((acc, curr) => acc + curr, 0)
    ) {
      remainingDays -= monthDaysInBSYear[year].reduce(
        (acc, curr) => acc + curr,
        0
      );
      year++;
    }

    // Find the correct month by subtracting full months
    let month = 1;
    while (remainingDays > monthDaysInBSYear[year][month - 1]) {
      remainingDays -= monthDaysInBSYear[year][month - 1];
      month++;
    }

    // Calculate the day (add 1 because we count from day 1)
    let day = Math.ceil(remainingDays + 1);

    return [year, month, day];
  }
}

/**
 * @module BSDate
 * @description Export the BSDate class as the default export and named export
 */
export default BSDate;

/**
 * Named export for tree-shaking and explicit imports
 */
export { BSDate };

/**
 * Export error classes for comprehensive error handling
 */
export { BSDateOutOfRangeError, DateOutOfRangeError } from "./errors.js";
