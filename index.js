// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// const util = require('util');

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

// function generateREADME(answers) {
//     return `# ${questions.title}
//     - ${questions.description}

//     ## Link
//     Launch the app ---> [here](${questions.repository})

//     ## User Story

//     - AS A traveler
//     - I WANT to see the weather outlook for multiple cities
//     - SO THAT I can plan a trip accordingly


//     ## Acceptance Criteria
//     - GIVEN a weather dashboard with form inputs
//     - WHEN I search for a city
//     - THEN I am presented with current and future conditions for that city and that city is added to the search history
//     - WHEN I view current weather conditions for that city
//     - THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
//     - WHEN I view the UV index
//     - THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
//     - WHEN I view future weather conditions for that city
//     - THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
//     - WHEN I click on a city in the search history
//     - THEN I am again presented with current and future conditions for that city
//     - WHEN I open the weather dashboard
//     - THEN I am presented with the last searched city forecast


//     ## Languages Used
//     - HTML 
//     - CSS 
//     - JavaScript 
//     - jQuery
//     - Ajax

//     ## Screenshots
//     How the app should look when loaded --->

//     ![image](assets/images/screenshot.png)`;

// }

// TODO: Create a function to initialize app
const init = () => {
    inquirer.prompt(questions);
}

// Function call to initialize app
init();