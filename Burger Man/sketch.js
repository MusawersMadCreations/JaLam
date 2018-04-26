let burger;
let person;
let burgerX, burgerY;

function setup() {
  createCanvas(windowWidth, windowHeight);

  burgerX = width / 2;
  burgerY = 100;
  burger = new Burger(burgerX, burgerY, 100, 100);
  person = new Person();
}

function draw() {
  burger.display();
}

class Burger {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.w = width;
    this.h = height;
  }

  display() {
    ellipse(this.x, this.y, this.w, this.h);
  }

  moveLeft(amount) {
    this.x -= amount;
  }

}

class Person {
  constructor(x, y) {

  }
}

function keyPressed() {
  if (key === "w" || key === "W") {
    burgerY = burgerY - 50;
  }
  if (key === "s" || key === "S") {
    burgerY = burgerY + 50;
  }
  if (key === "a" || key === "A") {
    burger.moveLeft(50);
  }
  if (key === "d" || key === "D") {
    burgerX = burgerX + 50;
  }
}

// needs
// burger movement
// randomized food spawn
// food - burger interaction
// burger inventory array
// burger disposable
// person to burger interaction
// timer / countdown
