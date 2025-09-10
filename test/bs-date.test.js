import BSDate from "../src/bs-date.js";
import { BSDateOutOfRangeError } from "../src/errors.js";
import { jest } from "@jest/globals";

describe("BSDate", () => {
  it("should convert to AD", () => {
    const date = new BSDate(2082, 5, 25).toAD();
    expect(date).toStrictEqual(new Date("2025-09-10T00:00:00.000Z"));
  });

  it("should throw error if date is invalid", () => {
    expect(() => new BSDate(1999, 5, 25).toAD()).toThrow(BSDateOutOfRangeError);
    expect(() => new BSDate(2091, 5, 25).toAD()).toThrow(BSDateOutOfRangeError);
    expect(() => new BSDate(2000, 13, 25).toAD()).toThrow(
      BSDateOutOfRangeError
    );
    expect(() => new BSDate(2000, 1, 33).toAD()).toThrow(BSDateOutOfRangeError);
  });

  it("should throw error if year, month, or day is not provided", () => {
    expect(() => new BSDate()).toThrow(Error);
    expect(() => new BSDate(2000)).toThrow(Error);
    expect(() => new BSDate(2000, 1)).toThrow(Error);
  });

  it("should return localized nepali date", () => {
    const bsDate = new BSDate(2082, 5, 18);
    expect(bsDate.toNepali()).toStrictEqual("भाद्र १८, २०८२");
  });

  it("should return month name", () => {
    const bsDate = new BSDate(2082, 5, 18);
    expect(bsDate.monthName()).toStrictEqual("भाद्र");
  });

  it("should return romanized month name", () => {
    const bsDate = new BSDate(2082, 5, 18);
    expect(bsDate.monthName({ romanized: true })).toStrictEqual("Bhadra");
  });

  it("should return day name", () => {
    const bsDate = new BSDate(2082, 5, 18);
    expect(bsDate.dayName()).toStrictEqual("बुधबार");
  });

  it("should return romanized day name", () => {
    const bsDate = new BSDate(2082, 5, 18);
    expect(bsDate.dayName({ romanized: true })).toStrictEqual("Budhbar");
  });

  it("should return localized day name", () => {
    const bsDate = new BSDate(2082, 5, 18);
    expect(bsDate.dayName({ localized: true })).toStrictEqual("Wednesday");
  });

  it("should raise error if both romanized and localized are provided", () => {
    const bsDate = new BSDate(2082, 5, 18);

    expect(() => bsDate.dayName({ romanized: true, localized: true })).toThrow(
      Error
    );
  });
});
