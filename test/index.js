var assert = require("assert");
var dotenvit = require("../src/index");

describe("dotenvit", () => {
  describe("insanity()", () => {
    it("It should always be true", () => {
      assert.strictEqual(dotenvit.insanity(), true);
    });
  });
});
