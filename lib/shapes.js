// create shapes and export shapes
class Shapes {
    constructor(text, textColor, fillColor, shape) {
        this.text = text;
        this.textColor = textColor;
        this.fillColor = fillColor;
        this.shape = shape;
        }
    render() {
        // return `<svg height="200px" width="300px" xmlns="http://www.w3.org/2000/svg">
        // <polygon points="150,00 00,200 300,200" fill="${this.fillColor}"/>
        // <text x='73' y='150' fill="${this.textColor}" font-size="75px">${this.text}</text>
        // </svg>`
        }
    setColor(fillColor) {
        return fillColor
        } 
}

class Triangle extends Shapes {
    constructor(text, textColor, fillColor) {
        super(text, textColor, fillColor)
        }  
            render() {  
                return `<svg height="200px" width="300px" xmlns="http://www.w3.org/2000/svg"><polygon points="150,00 00,200 300,200" fill="${this.fillColor}"/><text x='73' y='150' fill="${this.textColor}" font-size="75px">${this.text}</text></svg>`.trim()
                }
}          

// example of making a new triangle, and then calling render method onto it
// const triangle1 = new Triangle()

// triangle1.render()

class Circle extends Shapes {
    constructor(text, textColor, fillColor) {
        super(text, textColor, fillColor) 
        }
            render() {
                return `<svg height="200" width="300" xmlns="http://www.w3.org/2000/svg"><circle cx="120" cy="100" r="100" fill='${this.fillColor}'/><text x='45' y='120' fill='${this.textColor}' font-size="75px">${this.text}</text></svg>`.trim()    
                }
}

class Square extends Shapes {
    constructor(text, textColor, fillColor) {
        super(text, textColor, fillColor)
        } 
            render() {
                return `<svg height="200" width="300" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="${this.fillColor}"/><text x='25' y='100' fill='${this.textColor}' font-size="75">${this.text}</text></svg>`.trim()
                } 
}

module.exports = {Triangle, Circle, Square}