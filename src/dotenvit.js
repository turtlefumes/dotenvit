const inquirer = require("inquirer");
console.log("dotenvit has joined your party!");

async function promptUser() {
  const QUESTIONS = [
    {
      type: "input",
      name: "inputThing",
      message: "Type a thing"
    },
    {
      type: "list",
      name: "listThing",
      message: "Choose a thing",
      choices: ["option0", "option1", "option2"]
    }
  ];
  let userAnswers = await inquirer.prompt(QUESTIONS);
  return userAnswers;
}

function insanity() {
  console.log("I'm not crazy...\n\n\n\n...Am I?");
  return true;
}

async function dotenvit(args) {
  let userAnswers = await promptUser();
  console.log("Your args:", args);
  console.log("Your choices:", userAnswers);
}

module.exports = {
  insanity,
  dotenvit
};
