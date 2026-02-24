function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) throw new Error("Cannot divide by zero");
  return a / b;
}

function greet(name) {
  if (!name || name.trim() === "") throw new Error("Name is required");
  return `Hello, ${name.trim()}!`;
}

module.exports = { add, subtract, multiply, divide, greet };
