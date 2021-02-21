// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [{

    type: 'input',
    name: 'username',
    message: 'Username: enter your GitHub username.',
    // validate: (answer) => {
    //     if (answer.length < 1) {
    //         return console.log("You must enter a github username.")
    //     }
    //     return true;
    // },
}, {
    type: 'input',
    name: 'repository',
    message: 'Repo name: enter the name of your GitHub repository.',
    // validate: (answer) => {
    //     if (answer.length < 1) {
    //         return console.log("You must a GitHub repository name.")
    //     }
    //     return true;
    // },
}, {
    type: 'input',
    name: 'title',
    message: 'Title: enter the title of your project.',
    // validate: (answer) => {
    //     if (answer.length < 1) {
    //         return console.log("You must enter a title.")
    //     }
    //     return true;
    // },
}, {
    type: 'input',
    name: 'description',
    message: 'Description: enter a description for your project.',
    // validate: (answer) => {
    //     if (answer.length < 1) {
    //         return console.log("You must enter a description.")
    //     }
    //     return true;
    // },
}, {
    type: 'input',
    name: 'installation',
    message: 'Installation: if necessary, explain how the user would install the required packages',
    //   no validation here, if no installation is needed they can enter nothing and skip this question.
}, {
    type: 'input',
    name: 'usage',
    message: 'Usage: enter your project instructions and some examples of it in use.',
    // validate: (answer) => {
    //     if (answer.length < 1) {
    //         return console.log("You must enter usage instructions and/or examples.")
    //     }
    //     return true;
    // },
}, {
    type: 'list',
    name: 'license',
    message: 'License: choose a license for your project.',
    choices: []
}, {
    type: 'input',
    name: 'contributing',
    message: 'Contributing: if necessary, explain how users can contribute to your project.',
    //   no validation here, if no explanation is desired they can enter nothing and skip this question.
}, {
    type: 'input',
    name: 'tests',
    message: 'Tests: if necessary, provide tests for your project..',
    //   no validation here, if no tests are desired they can enter nothing and skip this question.
}, ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();