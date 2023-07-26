// create shapes and export shapes
class Shapes {
    constructor(text, textColor, fillColor, shape) {
        this.text = text;
        this.textColor = textColor;
        this.fillColor = fillColor;
        this.shape = shape;
        }
    render(shape) {
        return shape
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
                return `<svg height="200px" width="300px">
                            <polygon points="150,00 00,200 300,200" style="fill:${this.fillColor}"/>
                            <text x=73 y=150 fill="${this.textColor}" font-size="75px">${this.text}</text>
                        </svg>`
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
                return  `<svg height="200" width="300">
                            <circle cx="120" cy="100" r="100" fill=${this.fillColor}/>
                            <text x=45 y=120 fill=${this.textColor} font-size="75px">${this.text}</text>
                        </svg> `    
                }
}

class Square extends Shapes {
    constructor(text, textColor, fillColor) {
    super(text, textColor, fillColor)
    } 
        render() {
            return  `<svg height="200" width="300">
                        <rect width="200" height="200" style="fill=${this.fillColor}"/>
                        <text x=25 y=100 fill=${this.textColor} font-size="75">${this.text}</text>
                    </svg>`
            } 
}

module.exports = {Triangle, Circle, Square}