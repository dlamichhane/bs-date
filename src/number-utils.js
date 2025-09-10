/**
 * @fileoverview Number Utilities for BS Date Library
 * Extends the native Number prototype with Nepali numeral conversion functionality.
 * Provides methods to convert Arabic numerals (0-9) to Devanagari numerals (०-९).
 *
 * @author Deepak Lamichhane <lamichhanedeepak@gmail.com>
 * @version 1.0.0
 * @license MIT
 */

/**
 * Converts a number to its Nepali (Devanagari) numeral representation.
 * Each Arabic digit (0-9) is mapped to its corresponding Devanagari digit (०-९).
 *
 * @memberof Number.prototype
 * @returns {string} The number converted to Nepali numerals
 * @example
 * // Basic usage
 * (123).toNepali(); // "१२३"
 * (2082).toNepali(); // "२०८२"
 * (0).toNepali(); // "०"
 *
 * @example
 * // Usage in BS Date formatting
 * const year = 2082;
 * const month = 5;
 * const day = 25;
 * console.log(`${year.toNepali()}/${month.toNepali()}/${day.toNepali()}`); // "२०८२/५/२५"
 */
Number.prototype.toNepali = function () {
  /**
   * Mapping of Arabic digits to Devanagari (Nepali) digits.
   * @constant
   * @type {Object.<string, string>}
   */
  const NEPALI_DIGITS = {
    0: "०", // U+0966 DEVANAGARI DIGIT ZERO
    1: "१", // U+0967 DEVANAGARI DIGIT ONE
    2: "२", // U+0968 DEVANAGARI DIGIT TWO
    3: "३", // U+0969 DEVANAGARI DIGIT THREE
    4: "४", // U+096A DEVANAGARI DIGIT FOUR
    5: "५", // U+096B DEVANAGARI DIGIT FIVE
    6: "६", // U+096C DEVANAGARI DIGIT SIX
    7: "७", // U+096D DEVANAGARI DIGIT SEVEN
    8: "८", // U+096E DEVANAGARI DIGIT EIGHT
    9: "९", // U+096F DEVANAGARI DIGIT NINE
  };

  // Convert number to string, split into individual digits,
  // map each digit to its Nepali equivalent, and join back
  return this.toString()
    .split("")
    .map((digit) => NEPALI_DIGITS[digit])
    .join("");
};
