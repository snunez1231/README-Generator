// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === 'None') {
      return '';
    }
    return `## License
  
  This application is covered under the ${license} license.
  
  ${renderLicenseBadge(license)} [License Information](#license)`;

  }
  function renderLicenseBadge(license){
    //if ![Static Badge](https://img.shields.io/badge/License-MIT-brightgreen)
    if (license === 'MIT') {
     return `![Static Badge](https://img.shields.io/badge/License-MIT-brightgreen)`   
    }
  }

  function renderLicenseBadge(license){
    //if ![Static Badge](https://img.shields.io/badge/License-BSD-brightgreen)
    if (license === 'BSD') {
     return `![Static Badge](https://img.shields.io/badge/License-BSD-brightgreen)`   
    }
  }
  function renderLicenseBadge(license){
    //if![Static Badge](https://img.shields.io/badge/License-GPL-brightgreen)
    if (license === 'GPL') {
     return `![Static Badge](https://img.shields.io/badge/License-GPL-brightgreen) `   
    }
  }

  function renderLicenseBadge(license){
    if (license === 'None') {
     return `![Static Badge](https://img.shields.io/badge/License-None-brightgreen)`   
    }
  }
  
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.title}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License Information](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ${renderLicenseSection(data.license)}
  
  ## Contributing
  ${data.contribution}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  For additional questions, you can reach me through:
  
  GitHub: [${data.github}](https://github.com/${data.github})
  
  Email: ${data.email}
    `;
  }
  
  module.exports = generateMarkdown;