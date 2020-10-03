//generate the description here
const generateDescription = (description) => {
    if (!description) {
        return '';
    }
    return `
    ##Description

    `
};

//generate the license here
const generateLicense = (license) => {
    if (!license) {
        return '';
    }
    return `
    ##License
    `
};



// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
  
  `;
  }