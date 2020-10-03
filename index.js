//some global variables
const inquirer = require('inquirer');
const generateReadme = require('./src/page-template.js');
const writeFile = require('./utils/generateMarkdown.js');


// array of questions for user
const readmeQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of the project you would like to display?',
            validate: (titleInput) => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Your project must have a title!');
                    return false;
                }
            },
        },
        {
            type: 'confirm',
            name: 'confirmDescription',
            message: 'Would you like to add a description of your project?',
            default: true,
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a description about your project.',
            when: ({ confirmDescription }) => {
                if (confirmDescription) {
                    return true;
                } else {
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Tell other developers how to install your code.',
            validate: (installInput) => {
                if (installInput) {
                    return true;
                } else {
                    console.log('You must explain how to install your code!');
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Explain to other developers how to use your application!',
            validate: (usageInput) => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('You must explain how to use your application!');
                    return false;
                }
            },
        },
        {
            type: 'confirm',
            name: 'confirmLicense',
            message: 'Would you like to add a license?',
            default: true,

        },
        {
            type: 'list',
            name: 'license',
            message: 'Select which license you would like to use.',
            choices: ['MIT', 'BSD-2-Clause', 'GPL-2.0'],
            when: ({ confirmLicense }) => {
                if (confirmLicense) {
                    return true;
                } else {
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'How would you prefer other developers to contribute to your code?',
            validate: (contributionInput) => {
                if (contributionInput) {
                    return true;
                } else {
                    console.log('You must let other developers know how they can help or not help!');
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'tests',
            message: 'How would you like the user to test your application?',
            validate: (contributionInput) => {
                if (contributionInput) {
                    return true;
                } else {
                    console.log('You must tell fellow developers how to test your application!');
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please submit your Github user name.',
            validate: (githubInput) => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Nope! You gotta tell us your user name!');
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please submit your email address.',
            validate: (emailInput) => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Nope! You gotta tell us your email address!');
                    return false;
                }
            }
        }
    ])
};

readmeQuestions()
    .then(readmeAnswers => {
        return generateReadme(readmeAnswers);
    })
    .then(pageMarkdown => {
        return writeFile(pageMarkdown88)
    })
    .catch(err => {
        console.log(err);
    })

// function to write README file
function writeToFile(fileName, data) {

}

// function to initialize program
function init() {

}

// function call to initialize program
init();
