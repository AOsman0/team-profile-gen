console.log("hello node");

// add all files here
// use require
const inquirer = require("inquirer");
const fs = require("fs");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// set staff array
// this is where i am going to push all the answers from the inquirer questions
const teamArr = [];

// start sequence of questions
// what role would the user like to select
// push answers into array

// prompt the question to users
const roleofTeam = inquirer.prompt([
  {
    type: "list",
    message: "Please select a role",
    name: "role",
    choices: ["Engineer", "Intern", "Manager"],
  },

  // then if role of Team === Engineer render the engineer questions
]);

// make sure the user

// then if role of Team === Engineer render the engineer questions
//then if role of Team === Intern render the intern questions
//then if role of Team === Manager render the manager questions

const engineerQuestions = [
  {
    type: "input",
    message: "Please enter employee name",
    name: "name",

    // ensure there are only letters entered here
  },
  {
    type: "input",
    message: "Please enter employee id",
    name: "id",

    // ensure there are only number entered here
  },
  {
    type: "input",
    message: "Please enter employee email address",
    name: "email",

    // ensure there is an @.com inside this to validate
  },
  {
    type: "input",
    message: "Please enter engineer github username",
    name: "githubUsername",
    // after i get the answers for each question i put the answers in its own array
  },
];

// intern questions

const internQuestions = [
  {
    type: "input",
    message: "Please enter employee name",
    name: "name",
    // ensure there are only letters entered here
  },
  {
    type: "input",
    message: "Please enter employee id",
    name: "id",

    // ensure there are only number entered here
  },
  {
    type: "input",
    message: "Please enter employee email address",
    name: "email",
    // ensure there is an @.com inside this to validate
  },
  {
    type: "input",
    message: "Please enter employee school",
    name: "school",
    // ensure only letters in this school answer
    // after i get the answers for each question i put the answers in its own array
  },
];

// manager questions
const managerQuestions = [
  {
    type: "input",
    message: "Please enter employee name",
    name: "name",
    // ensure there are only letters entered here
  },
  {
    type: "input",
    message: "Please enter employee id",
    name: "id",
    // ensure there are only number entered here
  },
  {
    type: "input",
    message: "Please enter employee email address",
    name: "email",
    // ensure there is an @.com inside this to validates
  },
  {
    type: "input",
    message: "Please enter manager officeNumber",
    name: "officeNumber",
    // ensure only numbers are in the answers
  },

  // after i get the answers for each question i put the answers in its own array
];

// when the user finishes building there team they exit the application and there HTML is generated

//

// then write file to sync
