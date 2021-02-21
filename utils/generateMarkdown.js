// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (answers) => {
    return `# ${answers.title}

  ## Link
  Launch the app ---> [here](${answers.liveURL})

  #### Table of Contents
  1. [Project Description](#project-description)
  2. [Installation Instructions](#installation-instructions)
  3. [Usage Information](#usage-information)
  4. [Contributor Guidelines](#contributor-guidelines)
  5. [Test Instructions](#test-instructions)
  6. [License](#license)
  7. [Questions](#questions)

  ## Project Description
  * ${answers.description}
  ## Installation Instructions
  * ${answers.install}
  ## Usage Information
  * ${answers.usage}
  ## Contributor Guidelines
  * ${answers.contributing}
  ## Test Instructions
  * ${answers.tests}
  ## License
  * licensed under the ${answers.license}
  ## Questions
  * For assistance or questions, contact me at ${answers.email}
  * Follow me on Github at [${answers.github}](http://github.com/${answers.github})`;

}

module.exports = generateMarkdown;