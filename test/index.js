import assert from "assert";
import dotenvit from "../src/index";

describe("dotenvit", () => {
  describe("insanity()", () => {
    it("It should always be true", () => {
      assert.strictEqual(dotenvit.insanity(), true);
    });
  });
});
