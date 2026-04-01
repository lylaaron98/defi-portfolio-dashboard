// domain-utils.test.ts
// Domain utility test: For pure functions, no React or service dependencies.
import { formatTokenValue } from "../utils/formatTokenValue";

describe("formatTokenValue", () => {
  it("formats numbers as USD", () => {
    expect(formatTokenValue(1234.56)).toBe("$1,234.56");
  });
  it("handles zero", () => {
    expect(formatTokenValue(0)).toBe("$0.00");
  });
});

// Comments:
// - Component tests: Render UI, check user-visible output, avoid implementation details.
// - Hook tests: Mock service/data dependencies, test observable state/behavior.
// - Domain utility tests: Pure functions, no React, no side effects.
