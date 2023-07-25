// create shapes and export shapes

class Triangle {
    constructor(text, textcolor, shapecolor){
    this.text = text
    this.textcolor = textcolor
    this.setColor = function() {
            } `style=fill:${shapecolor}`
    this.render = function() {
            return `<svg height="200px" width="300px">
                        <polygon points="150,00 00,200 300,200" style="fill:${shapecolor}" />
                        <text x=80 y=150 fill="${textcolor}" font-size="70px">${text}</text>
                    </svg>`
         
        }
    }
}

// example of making a new triangle, and then calling render method onto it
// const triangle1 = new Triangle()

// triangle1.render()

class Circle {
       render = function() {
        return "A string, nothing else"
    }
}

class Square {
       render = function() {
        return "A string, nothing else"
    }
}

module.exports = {Triangle, Circle, Square}