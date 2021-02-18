var dotenvit = require("../src/index");

describe("dotenvit", () => {
  describe("insanity()", () => {
    test("adds 1 + 2 to equal 3", () => {
      expect(dotenvit.insanity()).toBe(true);
    });
  });
});
