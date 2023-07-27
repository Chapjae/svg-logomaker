const {Triangle, Circle, Square} = require('./shapes.js')

// README file gave this example to test
// test suite
    // contains multiple tests
    // each shape needs a test - triangle, circle, square
        // const shape = new Triangle();
        // shape.setColor("blue");
        // expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

describe("Shapes", () => {
    describe("Triangle Instance", () => {
        it("Should make an instance of a triangle", () => {
            const triangle = new Triangle("SVG", "green", "blue");
            triangle.setColor("blue");
            expect(triangle.render().replaceAll(/>\s</g, "><")).toEqual(`<svg height="200px" width="300px" xmlns="http://www.w3.org/2000/svg"><polygon points="150,00 00,200 300,200" fill="blue"/><text x='73' y='150' fill="green" font-size="75px">SVG</text></svg>`.trim());
            })
        })   
        
        
    })
    
    // '<polygon points="150, 18 244, 182 56, 182" fill="blue"/>');
describe("Circle", () => {
    describe("Circle Instance", () => {
        it("Should make an instance of a circle", () => {
            const circle = new Circle("SVG", "blue", "green", "Circle");
            expect(circle.render().replaceAll(/>\s</g, "><")).toEqual( `<svg height="200" width="300" xmlns="http://www.w3.org/2000/svg"><circle cx="120" cy="100" r="100" fill='green'/><text x='45' y='120' fill='blue' font-size="75px">SVG</text></svg>`);
        });                           
    });
});

describe("Square", () => {
    describe("Square Instance", () => {
        it("Should make an instance of a square", () => {
            const square = new Square("SVG", "red", "orange");
            expect(square.render().replaceAll(/>\s</g, "><")).toEqual(`<svg height="200" width="300" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="orange"/><text x='25' y='100' fill='red' font-size="75">SVG</text></svg>`.trim());
        });
    });
});