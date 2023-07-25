// create shapes and export shapes

class Triangle {
    setColor = function() {
    } 
    render = function() {
        return "A string, nothing else"
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