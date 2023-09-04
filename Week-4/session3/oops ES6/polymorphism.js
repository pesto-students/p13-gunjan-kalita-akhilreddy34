class Shape {
  calculateArea(base, height) {
    return base + height;
  }
}

class Triangle extends Shape {
  calculateArea(base, height) {
    return Math.round((base * height) / 2);
  }
}

class Rectangle extends Shape {
  calculateArea(width, height) {
    return width * height;
  }
}

class Circle extends Shape {
  calculateArea(radius) {
    return Math.PI * radius * radius;
  }
}

const shapeInstance = new Shape();
const triangleInstance = new Triangle();
const rectangleInstance = new Rectangle();
const circleInstance = new Circle();

console.log(shapeInstance.calculateArea(2, 4));
console.log(triangleInstance.calculateArea(2, 4));
console.log(rectangleInstance.calculateArea(2, 4));
console.log(circleInstance.calculateArea(2));
