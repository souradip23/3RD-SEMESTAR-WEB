// Define the calculator functions using arrow syntax
const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => b === 0 ? 'Error: Division by zero' : a / b;

// Function to perform the operation based on the input string
const performOperation = (operation, a, b) => {
  switch (operation) {
    case 'add':
      return add(a, b);
    case 'subtract':
      return subtract(a, b);
    case 'multiply':
      return multiply(a, b);
    case 'divide':
      return divide(a, b);
    default:
      return 'Error: Invalid operation';
  }
};

// Example usage
const a = 10;
const b = 5;

console.log(`Addition: ${performOperation('add', a, b)}`);        // Addition: 15
console.log(`Subtraction: ${performOperation('subtract', a, b)}`); // Subtraction: 5
console.log(`Multiplication: ${performOperation('multiply', a, b)}`); // Multiplication: 50
console.log(`Division: ${performOperation('divide', a, b)}`);    // Division: 2
console.log(`Invalid: ${performOperation('unknown', a, b)}`);    // Error: Invalid operation
