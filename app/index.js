const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [{
    type: 'input',
    name: 'email',
    message: 'Email: enter your email.',
    validate: (answer) => {
        if (answer.length < 1) {
            return console.log("You must enter an email.")
        }
        return true;
    },
}, {
    type: 'input',
    name: 'username',
    message: 'Username: enter your GitHub username.',
    validate: (answer) => {
        if (answer.length < 1) {
            return console.log("You must enter a github username.")
        }
        return true;
    },
}, {
    type: 'input',
    name: 'liveURL',
    message: 'Live URL: enter the deployed URL of your GitHub repository.',
    validate: (answer) => {
        if (answer.length < 1) {
            return console.log("You must a Live URL.")
        }
        return true;
    },
}, {
    type: 'input',
    name: 'title',
    message: 'Title: enter the title of your project.',
    validate: (answer) => {
        if (answer.length < 1) {
            return console.log("You must enter a title.")
        }
        return true;
    },
}, {
    type: 'input',
    name: 'description',
    message: 'Description: enter a description for your project.',
    validate: (answer) => {
        if (answer.length < 1) {
            return console.log("You must enter a description.")
        }
        return true;
    },
}, {
    type: 'input',
    name: 'installation',
    message: 'Installation: if necessary, explain how the user would install the required packages',
    validate: (answer) => {
        if (answer.length < 1) {
            return console.log("You must enter installation instructions or specify that there are no installations required.")
        }
        return true;
    },
}, {
    type: 'input',
    name: 'usage',
    message: 'Usage: enter project instructions (a simple how to use).',
    validate: (answer) => {
        if (answer.length < 1) {
            return console.log("You must enter usage instructions and/or examples.")
        }
        return true;
    },
}, {
    type: 'list',
    name: 'license',
    message: 'License: choose a license for your project.',
    choices: ['MIT License', 'GPLv3 License', 'Mozilla Public License 2.0', 'Other']
}, {
    type: 'input',
    name: 'contributing',
    message: 'Contributing: if necessary, explain how users can contribute to your project.',
    validate: (answer) => {
        if (answer.length < 1) {
            return console.log("You must enter how to contribute to your project.")
        }
        return true;
    },
}, {
    type: 'input',
    name: 'tests',
    message: 'Tests: if necessary, provide tests for your project.',
    validate: (answer) => {
        if (answer.length < 1) {
            return console.log("You must enter any tests for your project or specify that there are no tests.")
        }
        return true;
    },
}, ];

const init = () => {
    inquirer.prompt(questions)
        .then((response) => {
            fs.writeFileSync('README.md', generateMarkdown(response));
        })
        .then(() => {
            console.log("README has been successfully generated.")
        })
        .catch((error) => {
            console.log(error)
        });
};

init();