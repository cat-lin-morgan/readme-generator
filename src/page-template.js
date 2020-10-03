//generate the description here
const generateDescription = (description) => {
    if (!description) {
        return '';
    }
    return `
## Description

${description}`
};

//generate the license here
const generateLicense = (license) => {
    if (!license) {
        return '';
    }
    return `
## License
![little badge](https://img.shields.io/badge/license-${license}-success.svg)`
};



// function to generate markdown for README
function generateMarkdown(data) {
    console.log('this is the markdown', data);
    return `# ${data.title}
${generateDescription(data.description)}

## Table of Contents 

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Installation 

${data.installation}

## How to Use This Application 

${data.usage}

## Credits

${data.credits}

${generateLicense(data.license)}

## How You Can Contribute

${data.contribution}

## How You Can Test My Application

${data.tests}

## How You Can Reach Me

If you'd like to ask further questions you can reach me via [GitHub](https://github.com/${data.github}/) or email me at ${data.email}!`;

};

module.exports = generateMarkdown;

