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
function generateMarkdown(data) {
  let badge = ''
  if(data.license === 'MIT'){
   badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else {
    badge = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
  }
  
  return `
  ${badge}

  # ${data.title} 
  ### Description
  ${data.description}
  ### Table of Contents
  ${data.tableOfContents}
  ### Installation
  ${data.installation}
  ### Usage
  ${data.usage}
  ### Contributing
  ${data.contributing}
  ### Tests
  ${data.tests}
  ### Questions for Developer/s?
  [${data.github}](https://github.com/${data.github})

  
  
  
`;

}

// module.exports = generateMarkdown;
export default generateMarkdown
