// TODO: Include packages needed for this application
import inquirer from "inquirer";
import generateMarkdown from "./utils/generateMarkdown.js";
import fs from 'fs';
// TODO: Create an array of questions for user input
const questions = [
    {type: "input", name: "title", message: "What is the title of your project?"}, 
    {type: "input", name: "description", message: "Describe your project"} ,
    {type: "input", name: "tableOfContents", message: "Provide a table of contents for your project"},
    {type: "input", name: "installation", message: "What needs to be accomplished to install appropriate tools for this project?"},
    {type: "input", name: "usage", message: "What is the usage information?"},
    {type: "list", name: "license", message: "Here are the choices of licenses", choices: ["MIT", "ISC"]},
    {type: "input", name: "contributing", message: "Who contributed to this project?"},
    {type: "input", name: "tests", message: "What types of tests did you employ?"},
    {type: "input", name: "github", message: "What is your github user name?"}


];

// TODO: Create a function to write README file
function writeToFile(fileName, content) {
    

    fs.writeFile(fileName, content, err => {
        if (err) {
            console.log(err)
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt(
    questions
  )
  .then((answers) => {
    console.log(answers)
   const markdown = generateMarkdown(answers)
   writeToFile("README.md", markdown)
   
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
}

// Function call to initialize app
init();

//small change
