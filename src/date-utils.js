/**
 * @fileoverview Date Utilities for BS Date Library
 * Extends the native Date prototype with Bikram Sambat conversion functionality.
 * Provides methods to convert Anno Domini dates to Bikram Sambat dates with
 * proper validation and error handling.
 *
 * @author Deepak Lamichhane <lamichhanedeepak@gmail.com>
 * @version 1.0.0
 * @license MIT
 */

import BSDate from "./bs-date.js";
import { DateOutOfRangeError } from "./errors.js";
import { epochADStart, epochADEnd } from "./config.js";

/**
 * Converts an Anno Domini Date to a Bikram Sambat date.
 * This method extends the native Date prototype to provide seamless conversion
 * from Gregorian calendar dates to Bikram Sambat calendar dates.
 *
 * @memberof Date.prototype
 * @returns {BSDate} A new BSDate instance representing the equivalent BS date
 * @throws {DateOutOfRangeError} When the date is outside the supported range (1943-04-14 to 2034-04-13)
 * @example
 * // Basic usage
 * const adDate = new Date('2025-09-10');
 * const bsDate = adDate.toBS(); // BSDate { year: 2082, month: 5, day: 25 }
 *
 * @example
 * // Working with current date
 * const today = new Date();
 * const todayBS = today.toBS();
 * console.log(`Today in BS: ${todayBS.year}/${todayBS.month}/${todayBS.day}`);
 *
 * @example
 * // Error handling for out-of-range dates
 * try {
 *   const earlyDate = new Date('1942-01-01');
 *   const bsDate = earlyDate.toBS(); // Throws DateOutOfRangeError
 * } catch (error) {
 *   if (error instanceof DateOutOfRangeError) {
 *     console.log('Date is out of supported range');
 *   }
 * }
 */
Date.prototype.toBS = function () {
  // Validate that the date is within the supported conversion range
  if (
    this.getTime() < epochADStart.getTime() ||
    this.getTime() > epochADEnd.getTime()
  ) {
    throw new DateOutOfRangeError("Date is out of range");
  }

  // Convert the AD date to BS using the BSDate factory method
  return BSDate.fromAD(this);
};
