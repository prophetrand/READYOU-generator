// Packages required for this application
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generate = require("./utils/generateMarkdown.js");

const writeFileAsync = util.promisify(fs.writeFile);

// Array of questions for user input to be passed to inquirer.prompt()
const questions = [
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Please write a brief description of this project:',
        name: 'description'
    },
    {
        type: 'list',
        message: 'What kind of open-source license should this project have?',
        choices: ['MIT', 'Apache 2.0', 'GNU GPLv3'],
        name: 'license'
    },
    {
        type: 'input',
        message: 'What command should be run in the terminal to install dependencies?',
        name: 'command'
    },
    {
        type: 'input',
        message: 'What instructions should be included to run tests?',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'What usage information would you like to provide to the user?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'What contribution guidelines would you like to include?',
        name: 'guide'
    }
];

// The function called to initialize the 'READYOU.md' generator
function init() {
    inquirer.prompt(questions)
    .then((answers) => writeFileAsync('READYOU.md', generate.generateMarkdown(answers)))
    .then(() => console.log('Successfully wrote contents of READYOU.md'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();