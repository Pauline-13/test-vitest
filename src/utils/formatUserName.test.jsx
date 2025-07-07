import { describe, it, expect } from "vitest";
import { formatUserName } from "./formatUserName";

describe("formatUserName", () => {
  it("formate correctement un nom et prénom", () => {
    const result = formatUserName("alice", "dupont");
    expect(result).toBe("Alice Dupont");
  });
});


describe("formatUserName", () => {
  it("supprime les espaces superflus autour du prénom et du nom", () => {
    const result = formatUserName("   alice   ", "dupont");
    expect(result).toBe("Alice Dupont");
  });
});


describe("formatUserName", () => {
  it("lève une erreur si le prénom est manquant", () => {
  expect(() => formatUserName("", "Dupont")).toThrow("Les deux champs sont requis");
});

it("lève une erreur si le nom est manquant", () => {
  expect(() => formatUserName("Alice", "")).toThrow("Les deux champs sont requis");
});
});


it("met correctement en majuscule la première lettre du prénom et du nom, quel que soit la casse d'origine", () => {
  const result = formatUserName("aLiCe", "dUpoNT");
  expect(result).toBe("Alice Dupont");
});
