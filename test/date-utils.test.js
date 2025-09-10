import { DateOutOfRangeError } from "../src/errors.js";
import "../src/date-utils.js";
import BSDate from "../src/bs-date.js";

describe("AD to BS", () => {
  it("should throw error if date is invalid", () => {
    const date = new Date(1999, 5, 25);
    expect(date.toBS()).toStrictEqual(new BSDate(2056, 3, 11));
  });

  it("should throw error if date is invalid", () => {
    const date = new Date(1942, 5, 25);
    expect(() => date.toBS()).toThrow(DateOutOfRangeError);
  });

  it("should throw error if date is invalid", () => {
    const date = new Date(2035, 5, 25);
    expect(() => date.toBS()).toThrow(DateOutOfRangeError);
  });
});
