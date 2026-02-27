const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter first number: ", (a) => {
  rl.question("Enter second number: ", (b) => {
    let sum = Number(a) + Number(b);
    console.log("The addition of the numbers is:", sum);
    rl.close();
  });
});
