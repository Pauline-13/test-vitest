import { describe, it, expect } from "vitest";
import { formatUserName } from "./formatUserName";

describe("formatUserName", () => {
  it("formate correctement un nom et prénom", () => {
    const result = formatUserName("alice", "dupont");
    expect(result).toBe("Alice Dupont");
  });
});

