const { add, subtract, multiply, divide, greet } = require("../src/math");

describe("Math Functions", () => {
  describe("add()", () => {
    test("adds two positive numbers", () => {
      expect(add(2, 3)).toBe(5);
    });
    test("adds negative numbers", () => {
      expect(add(-1, -2)).toBe(-3);
    });
    test("adds zero", () => {
      expect(add(5, 0)).toBe(5);
    });
  });

  describe("subtract()", () => {
    test("subtracts two numbers", () => {
      expect(subtract(10, 4)).toBe(6);
    });
    test("returns negative when b > a", () => {
      expect(subtract(3, 7)).toBe(-4);
    });
  });

  describe("multiply()", () => {
    test("multiplies two numbers", () => {
      expect(multiply(3, 4)).toBe(12);
    });
    test("multiplies by zero", () => {
      expect(multiply(5, 0)).toBe(0);
    });
  });

  describe("divide()", () => {
    test("divides two numbers", () => {
      expect(divide(10, 2)).toBe(5);
    });
    test("throws when dividing by zero", () => {
      expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
    });
    test("returns decimal result", () => {
      expect(divide(7, 2)).toBe(3.5);
    });
  });

  describe("greet()", () => {
    test("greets a person", () => {
      expect(greet("Alice")).toBe("Hello, Alice!");
    });
    test("trims whitespace from name", () => {
      expect(greet("  Bob  ")).toBe("Hello, Bob!");
    });
    test("throws if name is empty", () => {
      expect(() => greet("")).toThrow("Name is required");
    });
    test("throws if name is only spaces", () => {
      expect(() => greet("   ")).toThrow("Name is required");
    });
    test("throws if name is undefined", () => {
      expect(() => greet()).toThrow("Name is required");
    });
  });
});
