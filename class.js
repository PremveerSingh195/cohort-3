class Rectangle {
  constructor(width, height, color) {
    (this.width = width), (this.height = height), (this.color = color);
  }
  area() {
    const area = this.width * this.height;
    return area;
  }
  paint() {
    console.log(`painting with color ${this.color}`);
  }
}

const rect = new Rectangle(10, 11, "red");

console.log(rect.width);
console.log(rect.area());
rect.paint();
