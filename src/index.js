console.log("hello node");

// add all files here
// use require
const inquirer = require("inquirer");
const fs = require("fs");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// start sequence of questions
// what role would the user like to select
// push answers into array

// prompt the question to users
const rolesOfTeam = {
  name: "roles",
  type: "list",
  message: "Please select a role",
  choices: ["Engineer", "Intern", "Manager"],
};

const engineerQuestions = [
  {
    name: "name",
    type: "input",
    message: "Please enter employee name",
    // ensure there are only letters entered here
  },
  {
    name: "id",
    type: "input",
    message: "Please enter employee id",
    // ensure there are only number entered here
  },
  {
    name: "email",
    type: "input",
    message: "Please enter employee email address",

    // ensure there is an @.com inside this to validate
  },
  {
    name: "githubUsername",
    type: "input",
    message: "Please enter engineer github username",
  },
];
// intern questions
const internQuestions = [
  {
    name: "name",
    type: "input",
    message: "Please enter employee name",
  },
  {
    name: "id",
    type: "input",
    message: "Please enter employee id",
    // ensure there are only number entered here
  },
  {
    name: "email",
    type: "input",
    message: "Please enter employee email address",
  },
  {
    name: "school",
    type: "input",
    message: "Please enter employee school",
  },
];

// manager questions
const managerQuestions = [
  {
    name: "name",
    type: "input",
    message: "Please enter employee name",
  },
  {
    name: "id",
    type: "input",
    message: "Please enter employee id",
  },
  {
    name: "email",
    type: "input",
    message: "Please enter employee email address",
  },
  {
    name: "officeNumber",
    type: "input",
    message: "Please enter manager officeNumber",
  },
];

const finalQuestion = {
  name: "final",
  type: "confirm",
  message: "Would you like to add any more employees?",
  default: "yes",
};

const init = async () => {
  // set staff array
  // this is where i am going to push all the answers from the inquirer questions
  const teamArr = [];
  // start loop
  let roleInProgress = true;

  while (roleInProgress) {
    //display answers
    const { roles } = await inquirer.prompt(rolesOfTeam);
    console.log(roles);
    //if engineer
    if (roles === "Engineer") {
      //prompt engineer questions and answers
      const engineerAnswers = await inquirer.prompt(engineerQuestions);
      console.log(engineerAnswers);
      // create a new instance of engineer to push into teamArr
      const engineer = new Engineer(engineerAnswers);
      teamArr.push(engineer);
    }
    //if intern
    if (roles === "Intern") {
      //prompt engineer questions and answers
      const internAnswers = await inquirer.prompt(internQuestions);
      console.log(internAnswers);
      const intern = new Engineer(internAnswers);
      teamArr.push(intern);
    }
    // if manager
    if (roles === "Manager") {
      //prompt engineer questions and answers
      const managerAnswers = await inquirer.prompt(managerQuestions);
      console.log(managerAnswers);
      const manager = new Engineer(managerAnswers);
      teamArr.push(managerAnswers);
    }
    const { final } = await inquirer.prompt(finalQuestion);

    if (!final) {
      roleInProgress = false;
    }
  }
};

// when the user finishes building there team they exit the application and there HTML is generated

init();
