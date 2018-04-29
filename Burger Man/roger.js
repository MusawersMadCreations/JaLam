let burger;
let person;

function setup() {
  createCanvas(windowWidth, windowHeight);

  burger = new Burger(width/2, 100, 100, 100, 3);
  person = new Person();
}

function draw() {
  burger.display();
  burger.movement();
}

class Burger {
  constructor(x, y, width, height, acceleration) {
    this.x = x;
    this.y = y;
    this.w = width;
    this.h = height;
    this.a = acceleration;
  }

  display() {
    background("white");
    ellipse(this.x, this.y, this.w, this.h);
  }

  movement() {
    if (keyIsDown(UP_ARROW)) {
      this.y -= this.a;
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.y += this.a;
    }
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.a;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.a;
    }
  }
}

class Person {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.w = width;
    this.h = height;
  }
}

class Lettuce {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.w = width;
    this.h = height;
  }
}

class Tomato {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.w = width;
    this.h = height;
  }
}

class Cheese {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.w = width;
    this.h = height;
  }
}

class Ketchup {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.w = width;
    this.h = height;
  }
}

class Onions {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.w = width;
    this.h = height;
  }
}


// needs
// burger movement

// randomized food spawn
// one of each item is scattered around the map
// when item is picked up, inventory expands,

// food - burger interaction
// burger inventory array
// burger disposable
// person to burger interaction
// timer / countdown
