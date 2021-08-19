// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')



// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'githubAccount',
        message: "What is your Github username?"
    },
    {
        type: 'input',
        name: 'userEmail',
        message: 'What is your email address' 
    },
    {
        type: 'input',
        name: 'Title',
        message: 'What is your projects name?'
    },
    {
        type: 'input',
        name: "projectDesc",
        message: 'Please provide a short desc of your project:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ["MIT","APACHE 2.0", "GPL 3.0", "BSD 3", "None" ]

    }, 
    {
        type: "input",
        name: "install",
        message: "What command should be run to install dependancies?"
    },
    {
        type: "input",
        name: "test",
        message: "What command should be run to run tests?"
    },
    {
        type: 'input',
        name: 'needtoknow',
        message: "What does the user need to know about using the repo"
    },
    {
        type: 'input',
        name: 'contributions',
        message: "What does the user need to know about contributing to the repo?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then ((data) => console.log(data))
}

// Function call to initialize app
init();
