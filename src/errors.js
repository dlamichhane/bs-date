/**
 * @fileoverview Custom Error Classes for BS Date Library
 * Defines specialized error classes for handling date validation and range errors
 * in the Bikram Sambat date conversion library.
 *
 * @author Deepak Lamichhane <lamichhanedeepak@gmail.com>
 * @version 1.0.0
 * @license MIT
 */

/**
 * Error thrown when a Bikram Sambat date is out of the supported range or invalid.
 * This error is thrown when:
 * - BS year is outside the supported range (2000-2090)
 * - BS month is invalid (not 1-12)
 * - BS day is invalid for the given month/year
 * - Required constructor parameters are missing
 *
 * @class BSDateOutOfRangeError
 * @extends Error
 * @example
 * try {
 *   const invalidDate = new BSDate(1999, 1, 1);
 *   invalidDate.toAD();
 * } catch (error) {
 *   if (error instanceof BSDateOutOfRangeError) {
 *     console.log('BS date is out of range:', error.message);
 *   }
 * }
 */
class BSDateOutOfRangeError extends Error {
  /**
   * Creates a new BSDateOutOfRangeError instance.
   *
   * @param {string} message - The error message describing the validation failure
   * @example
   * throw new BSDateOutOfRangeError('Year 1999 is out of valid range (2000-2090)');
   */
  constructor(message) {
    super(message);

    /** @type {string} The name of the error */
    this.name = "BSDateOutOfRangeError";
  }
}

/**
 * Error thrown when an Anno Domini date is out of the supported conversion range.
 * This error is thrown when:
 * - AD date is before the supported epoch (April 14, 1943)
 * - AD date is after the supported range
 *
 * @class DateOutOfRangeError
 * @extends Error
 * @example
 * try {
 *   const earlyDate = new Date('1942-01-01');
 *   earlyDate.toBS();
 * } catch (error) {
 *   if (error instanceof DateOutOfRangeError) {
 *     console.log('AD date is out of range:', error.message);
 *   }
 * }
 */
class DateOutOfRangeError extends Error {
  /**
   * Creates a new DateOutOfRangeError instance.
   *
   * @param {string} message - The error message describing the validation failure
   * @example
   * throw new DateOutOfRangeError('Year is out of range');
   */
  constructor(message) {
    super(message);

    /** @type {string} The name of the error */
    this.name = "DateOutOfRangeError";
  }
}

/**
 * @module Errors
 * @description Export custom error classes for the BS Date library
 */
export { BSDateOutOfRangeError, DateOutOfRangeError };
