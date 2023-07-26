// import statements at the top (fs, inquirer etc etc)
// import the shapes module
// import one item: const {Triangle} = require(./lib/shapes.js)
const {Circle, Triangle, Square} = require("./lib/shapes");
const inquirer = require("inquirer");
const fs = require("fs");
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
        name: 'textColor',
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
        name: "fillColor",
        message: "Please enter a color for your shape (or a hexadecimal number)"
    }
]


function createShape(answers) {
    switch (answers.shape) {
        case "Circle" :
            const circle = new Circle(answers.text, answers.textColor, answers.fillColor, answers.shape);
            const circleSVG = circle.render()
            return circleSVG
        case "Triangle" :
            const triangle = new Triangle(answers.text, answers.textColor, answers.fillColor, answers.shape);
            const triangleSVG = triangle.render()
            return triangleSVG
        case "Square" :
            const square = new Square(answers.text, answers.textColor, answers.fillColor, answers.shape)
            const squareSVG = square.render()
            return squareSVG
        }       
}

function init() {
    inquirer
        .prompt(questions)
            .then((answers) => {       
    // call function to generate markdown file. Pass answers to it

        fs.writeFile("logo.svg", createShape(answers), (err) => 
        err ? console.error(err) : console.log("success"))
    })
}   

init()