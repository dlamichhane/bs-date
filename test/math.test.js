import { add } from "../src/math.js";

describe("add", () => {
    it("should add two numbers", () => {
        expect(add(1,2)).toBe(3)
    })
})