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
![screenshot of badge](https://img.shields.io/static/v1?label=license&message=${license}&color=important)`
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
___

## Installation 

${data.installation}

## Usage

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
___
};

module.exports = generateMarkdown;

