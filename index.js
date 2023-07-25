// import statements at the top (fs, inquirer etc etc)
// import the shapes module
// impoort one item: const {Triangle} = require(./lib/shapes.js)
const {Triangle, Circle, Square} = require("./lib/shapes");
const inquirer = require("inquirer");
const fs = require("fs")
// prompt the users for color, shape, text (3 characters max), shape color
// create the svg
    //  
    // 2.9? - write the file

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'What Letters do you want for your Logo? (Must be 3 characters or less)',
        validate: function (input) { 
            return input.length <= 3
            },
    },
    {
        type: 'input',
        name: 'textcolor',
        message: 'Please enter a color for your text (or a hexadecimal number)',
    },
    {
        type: 'list',
        name: "shape",
        message: "Please pick a shape for your logo",
        choices: ["Circle", "Triangle", "Square"]
    },
    {
        type: "input",
        name: "shapecolor",
        message: "Please enter a color for your shape (or a hexadecimal number)"
    }

]


inquirer
  .prompt(questions)
    .then()
