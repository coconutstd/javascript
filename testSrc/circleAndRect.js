export class Circle {
  #radius;

  constructor(radius){
    this.#radius = radius;
  }

  get radius() {
    return this.#radius;
  }

  area() {
    return this.#radius * this.#radius;
  }
}

let circle = new Circle(5);
console.log(circle.area());