class rectangle {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  area() {
    const area1 = this.width * this.height;
    const area2 = () =>
      console.log(`area2 ------- ${this.width + this.height}`);
    return area1;
  }

  paint() {
    console.log(`Painting with color ${this.color}`);
  }
}

const rect = new rectangle(3, 5, "red");

const now = new Date();

console.log(now);
