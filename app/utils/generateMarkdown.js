// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license) {
        switch (license) {
            case 'MIT License':
                return ' [![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)';
            case 'GPLv3 License':
                return ' [![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](http://perso.crans.org/besson/LICENSE.html)';
            case 'Mozilla Public License 2.0':
                return ' [![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
            default:
                "";
                break;
        }
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    switch (license) {
        case 'MIT License':
            return '\n\n[Learn more about this licence.](https://lbesson.mit-license.org/)';
        case 'GPLv3 License':
            return '\n\n[Learn more about this licence.](http://www.gnu.org/licenses/gpl-3.0.en.html)';
        case 'Mozilla Public License 2.0':
            return '\n\n[Learn more about this licence.](https://www.mozilla.org/en-US/MPL/2.0/)';
        default:
            "";
            break;
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === "Other") {
        "";
    } else {
        let chosenLicense = renderLicenseBadge(license) + renderLicenseLink(license);
        return chosenLicense;
    }
}

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
  * licensed under the ${renderLicenseSection(answers.license)}
  ## Questions
  * For assistance or questions, contact me at ${answers.email}
  * Follow me on Github at [${answers.github}](http://github.com/${answers.github})`;

}

module.exports = generateMarkdown;