import { describe, expect, it } from "vitest";
import { TestDriver } from "testdriverai/vitest/hooks";

describe("Sample Web Test", () => {
  it("should load example.com and verify content", async (context) => {
    const testdriver = TestDriver(context);

    await testdriver.provision.chrome({ url: "https://example.com" });

    const assertResult = await testdriver.assert(
      "the Example Domain webpage is displayed with documentation text"
    );
    expect(assertResult).toBeTruthy();
  });
});
