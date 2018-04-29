let burger;
let person;

function setup() {
  createCanvas(windowWidth, windowHeight);

  burger = new Burger(width/2, 100, 100, 100, 5);

  person = new Person();
}

function draw() {
  burger.movement();
  burger.display();
}

class Burger {
  constructor(x, y, width, height, velocity) {
    this.x = x;
    this.y = y;
    this.w = width;
    this.h = height;
    this.v = velocity;
  }

  display() {
    background("white");
    ellipse(this.x, this.y, this.w, this.h);
  }

  movement() {
    if (keyIsDown(UP_ARROW)) {
      this.y -= this.v;
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.y += this.v;
    }
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.v;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.v;
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

class Timer {
  constructor(waitTime) {
    this.waitTime = waitTime;
    this.startTime = millis();
    this.finishTime = this.startTime + this.waitTime;
    this.timerIsDone = false;
  }

  reset(newWaitTime) {
    this.waitTime = newWaitTime;
    this.startTime = millis();
    this.finishTime = this.startTime + this.waitTime;
    this.timerIsDone = false;
  }

  isDone() {
    if (millis() >= this.finishTime) {
      return true;
    }
    else {
      return false;
    }
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
