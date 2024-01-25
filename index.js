// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./Utils/generateMarkdown');

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project:',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions:',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information:',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Enter contribution guidelines:',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Enter test instructions:',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application:',
        choices: ['MIT', 'BSD', 'GPL', 'None'],
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
      },
    ]
// Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(`Error writing ${fileName}:`, err);
    } else {
      console.log(`${fileName} has been generated successfully!`);
    }
  });
}

// Create a function to initialize app
function init() {
  // Prompt user for information
  inquirer
    .prompt(questions)
    .then((answers) => {
      // Generate README content using the provided answers
      const readmeContent = generateMarkdown(answers);

      // Write README content to a file
      writeToFile('generateREADME.md', readmeContent);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

// Function call to initialize app
init();
