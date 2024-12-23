// Basic Arrow Function
const add = (a, b) => a + b;

// Using Arrow Function in a Callback
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);

// Arrow Function with Single Parameter (parentheses can be omitted)
const square = x => x * x;

// Arrow Function with Multiple Parameters
const multiply = (a, b) => a * b;

// Arrow Function with No Parameters
const greet = () => 'Hello, World!';

// Arrow Function with Block Body (return statement required)
const sumAndSquare = (a, b) => {
    const sum = a + b;
    return sum * sum;
};

// Using Arrow Function in an Object Method
const person = {
    name: 'Alice',
    greet: () => `Hello, my name is ${this.name}` // Note: `this` in arrow functions refers to the lexical scope
};

// Testing the functions
console.log(add(5, 3)); // 8
console.log(doubled); // [2, 4, 6, 8]
console.log(square(4)); // 16
console.log(multiply(6, 7)); // 42
console.log(greet()); // "Hello, World!"
console.log(sumAndSquare(2, 3)); // 25
console.log(person.greet()); // "Hello, my name is undefined" (because `this` is not bound as expected)
