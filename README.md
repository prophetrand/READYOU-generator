# READYOU Markdown Generator

## Description
This Javascript application generates a professional project markdown file based on user input submitted in the terminal console. It utilizes Node.js and the inquirer node package module to prompt the user with a series of questions about their project, and to then write to the file `READYOU.md` using their responses. An example file of the same name, created by this application, is included in the root directory of this repository.

A video of the application in action is included via link in the [Screenshots](#screenshots) section further in this document.

## Table of Contents
* [Technologies Used](#technologies-used)
* [How to Access](#how-to-access)
* [What I Did](#what-i-did)
* [Code Snippets](#code-snippets)
* [Screenshots](#screenshots)
* [Acknowledgments](#acknowledgments*)
* [Who I Am](#who-i-am)

---

## Technologies Used
* [Javascript](https://www.javascript.com/) to develop the algorithms included in this web application.
* [Node.js](https://nodejs.org/en/docs/) to run this Javascript program in the terminal/Git Bash console.
* [Git](https://git-scm.com/) for distributed version control, tracking changes over time and making them visible to collaborators.
* [Github](https://github.com/) for version control in the cloud, saving my changes and presenting them clearly to myself and others.

## How to Access
1. Download the contents of this repository to your local machine. 
2. Using the terminal/Git Bash Navigate to the directory containing the contents of this repository, named READYOU-generator by default.
3. Run the command `npm install` in the terminal to install the **inquirer** node package module dependency.
4. Run the command `node index.js` in the terminal to launch the program.
5. Enter your responses as prompted in the terminal, and your READYOU.md file will be written for you using your responses. The file will be located in the root of the READYOU-generator directory.

---

## What I Did
This Javascript application utilizes a series of callback functions from the node modules **File System** (a module native to Node.js), **inquirer** (a popular 3rd party node package module), and the functions declared in **generateMarkdown.js** to write the READYOU markdown file. I included the necessary node packages with the require() method at the top of index.js. I used the inquirer.prompt() function to ask the user a series of questions in the terminal, and their responses are run through the promisified fs.writeFile() function. The contents of that file are written using a template literal that populates specific values with their respective user responses, and otherwise includes the template structure for the markdown file. After the new file is written, a success message is displayed in the terminal, and a catch() method is included to display an error in the terminal should one occur.

## Code Snippets 

```
function init() {
    inquirer.prompt(questions)
    .then((answers) => writeFileAsync('READYOU.md', generate.generateMarkdown(answers)))
    .then(() => console.log('Successfully wrote contents of READYOU.md'))
    .catch((err) => console.error(err));
}
```

## Screenshots
The image below represents the application in action, within an instance of Git Bash. The user is prompted with questions one-by-one to help write their markdown file. Once the user has completed every question, the file is written and a success message displays.

![example](./assets/example-app.PNG)

[Click here](https://drive.google.com/file/d/1RnMnsCUIBk7voBZovoD00qZKOGgqQ59z/view) to see a short video demonstrating usage of the application.

---

## Acknowledgments
* [W3Schools](https://www.w3schools.com/) has been my go-to for descriptive tutorials on HTML, CSS, and Javascript syntax and best practices. I am eternally grateful for their massive store of documentation.
* [MDN Web Docs](https://developer.mozilla.org/en-US/) is another resource for documentation on HTML, CSS, and Javascript that I find myself using more and more often as I work through deeper Javascript.
* [Inquirer](https://www.npmjs.com/package/inquirer) is an open source node package that I used to provide interactive command line prompts in this project.


## Who I Am
My name is Rand Hale, and I am an aspiring programmer/web developer based in California.

* [LinkedIn](https://www.linkedin.com/in/rand-hale-83ba389b/)
* [GitHub](https://github.com/prophetrand)