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
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.title}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - ${renderLicenseLink(data.license)}
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