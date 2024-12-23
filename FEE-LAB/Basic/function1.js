const greeter = 'CodeQuotient';

const sayHi = function greetings() {
  console.log(`${greeter} says, 'Hi!'`);
  
  var greeter = 'CQ';

  console.log(`${greeter} says, 'Hi!'`);
}

sayHi();