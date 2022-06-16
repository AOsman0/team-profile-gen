console.log("hello node");

// add all files here
// use require
const inquirer = require("inquirer");
const fs = require("fs");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// generate cards with arrays

// instances of manager print manager

// for each of the objects generate HTML
const generateHTML = (array) => {
  const generateCard = (each) => {
    if (each instanceof Engineer) {
      return ` <div class="card-content-2">
      <div class="media">
        <div class="media-left">
            <p class="title-1">${each.name}</p>
        </div>
        <div class="media-content">

          <p class="subtitle is-6">
            <a href="mailto:"> ${each.email} </a>
          </p>
          <p class="id">Engineer ID</p>
          <p class="subtitle is-6">
            <a href="https://github.com/${each.githubUsername}"> ${each.githubUsername} </a>
          </p>
        </div>
      </div>
      <br />
    </div>`;
    }
    if (each instanceof Intern) {
      return ` <div class="card-content-3">
    <div class="media">
      <div class="media-left">
          <p class="title-1">${each.name}</p>
      </div>
      <div class="media-content">
        <p class="subtitle is-6">
          <a href="mailto:"> ${each.email} </a>
        </p>
        <p class="id">${each.id}</p>
        <p class="subtitle is-6">${each.school}</p>
      </div>
    </div>
    <br />
  </div>
`;
    }
    if (each instanceof Manager) {
      return ` <div class="card-content-1">
      <div class="media">
        <div class="media-left">
            <p class="title-1">${each.name}</p>
        </div>
        <div class="media-content">
          <p class="subtitle is-6">
            <a href="mailto:"> ${each.email}</a>
          </p>
          <p class="id">${each.id}</p>
          <p class="subtitle is-6">${each.officeNumber}</p>
        </div>
      </div>
      <br />
    </div>`;
    }
  };
  const teamCards = array.map(generateCard).join("");

  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="./assets/css/styles.css" />
      <title>Team Profile Generator</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
    </head>
    <body>
      <header class="header">My Team</header>
      <main>
        <div class="cards-container">${teamCards}</div>
      </main>
    </body>
  </html>`;
};

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
  const teamsArray = [];
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
      // create a new instance of engineer to push into teamArr
      console.log(engineerAnswers);
      const engineer = new Engineer(engineerAnswers);
      teamsArray.push(engineer);
      console.log(teamsArray);
    }
    //if intern
    if (roles === "Intern") {
      //prompt engineer questions and answers
      const internAnswers = await inquirer.prompt(internQuestions);
      console.log(internAnswers);
      const intern = new Intern(internAnswers);
      teamsArray.push(intern);
      console.log(teamsArray);
    }
    // if manager
    if (roles === "Manager") {
      //prompt engineer questions and answers
      const managerAnswers = await inquirer.prompt(managerQuestions);
      console.log(managerAnswers);
      const manager = new Manager(managerAnswers);
      teamsArray.push(manager);
      console.log(teamsArray);
    }
    const { final } = await inquirer.prompt(finalQuestion);
    // when the user finishes building there team they exit the application and there HTML is generated
    if (!final) {
      roleInProgress = false;
      console.log(teamsArray);
    }
  }
  const finalCards = generateHTML(teamsArray);
  console.log(finalCards);

  fs.writeFileSync("./dist/osman.html", finalCards);
};

init();
