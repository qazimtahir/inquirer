import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

let value = await inquirer.prompt([
  {
    name: "name",
    type: "input",
    message: "What is your name? ",
  },
  {
    name: "operator",
    type: "list",
    message: "Select operator...",
    choices: ["+", "-", "*", "/"],
  },
  {
    name: "number1",
    type: "number",
    message: "Write num 1:  ",
  },
  {
    name: "number2",
    type: "number",
    message: "Write num 2:  ",
  },
]);
// addition function
if (value.operator === "+") {
  let addition = () => {
    return value.number1 + value.number2;
  };
  console.log(
    chalk.red.bold(
      `Mr. ${value.name}, you have selected the ${value.operator} operator so that ${value.number1} + ${value.number2} = ` +
        addition()
    )
  );
} else if (value.operator === "-") {
  let minus = () => {
    return value.number1 - value.number2;
  };
  console.log(
    chalk.red.bold(
      `Mr. ${value.name}, you have selected the ${value.operator} operator so that ${value.number1} - ${value.number2} = ` +
        minus()
    )
  );
} else if (value.operator === "*") {
  let multiply = () => {
    return value.number1 * value.number2;
  };
  console.log(
    chalk.red.bold(
      `Mr. ${value.name}, you have selected the ${value.operator} operator so that ${value.number1} * ${value.number2} = ` +
        multiply()
    )
  );
} else if (value.operator === "/") {
  let divide = () => {
    return value.number1 / value.number2;
  };
  console.log(
    chalk.red.bold(
      `Mr. ${value.name}, you have selected the ${value.operator} operator so that ${value.number1} / ${value.number2} = ` +
        divide()
    )
  );
}
// chalkAnimation.neon("Chalk Animation with neon effect.");
