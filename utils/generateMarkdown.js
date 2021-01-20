// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba source of images below.
function renderLicenseBadge(license) {
  if (license == 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license == 'Apache 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license == 'GNU GPLv3') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'MIT') {
    return '[MIT](https://choosealicense.com/licenses/mit/)';
  } else if (license == 'Apache 2.0') {
    return '[Apache 2.0](https://choosealicense.com/licenses/apache-2.0/)';
  } else if (license == 'GNU GPLv3') {
    return '[GNU General Public License](https://choosealicense.com/licenses/gpl-3.0/)';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === null) {
    return '';
  } else {
    return 'This project utilizes the ' + renderLicenseLink(license) + ' license for usage and reproduction permissions.';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Testing](#testing)
* [Contribution](#contribution)
* [License](#license)
* [Questions](#questions)

---------
## Installation
To install the node dependencies necessary to run this file, run the command: '${data.command}' in the terminal.

## Usage
${data.usage}

## Testing
${data.tests}

## Contribution
${data.guide}

---------
## License
${renderLicenseSection(data.license)}

## Questions
My GitHub username is: [${data.github}](https://github.com/${data.github})
Reach out to me at <${data.email}> with any and all questions regarding this project.
`;
}

module.exports = {
  generateMarkdown,
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection
};