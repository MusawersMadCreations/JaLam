let burger;
let person;

function setup() {
  createCanvas(windowWidth, windowHeight);

  burger = new Burger(width/2, 100, 100, 100);
  person = new Person();
}

function draw() {
  burger.display();
  burger.movement();
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

  movement() {
    if (keyIsDown(UP_ARROW)) {
      this.y -= 20;
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.y += 20;
    }
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= 20;
    }
    if (keyIsDown(UP_ARROW)) {
      this.x += 20;
    }
  }
}

class Person {
  constructor(x, y) {

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
