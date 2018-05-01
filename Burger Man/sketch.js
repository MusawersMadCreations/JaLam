// Eat Eat Revolution
// Roger Lam
// April 20, 2018

let burger, burgerImg;

let person;

let tableImg;

let lettuce, tomato, cheese, ketchup, onion;
let lettuceImg, tomatoImg, cheeseImg, ketchupImg, onionImg;
let lettuceTaken, tomatoTaken, cheeseTaken, ketchupTaken, onionTaken;
let lettuceD, tomatoD, cheeseD, ketchupD, onionD;
let foodWidth, foodHeight;

let inventory;

let radius;
let cellSize;

let state;
let button;

let sexyBeast;

// preloads our images and audio
function preload() {
  lettuceImg = loadImage("assets/images/lettuce.png");
  tomatoImg = loadImage("assets/images/tomato.png");
  cheeseImg = loadImage("assets/images/cheese.png");
  ketchupImg = loadImage("assets/images/ketchup.png");
  onionImg = loadImage("assets/images/onion.png");
  burgerImg = loadImage("assets/images/burger.png");
  tableImg = loadImage("assets/images/table.png");
  sexyBeast = loadImage("assets/images/d.png");
}

// executes once after preload
function setup() {
  createCanvas(windowWidth, windowHeight);

  state = "startScreen";

  button = new Button("START", width / 2 - 175, height / 2 + 75, 300, 75, [51, 25, 0], [126, 74, 16], [255, 178, 102], 30);

  cellSize = windowHeight / 8;

  burger = new Burger(width / 2, 100, 80, 80);

  // person = new Person();

  foodWidth = 80;
  foodHeight = 80;

  radius = foodWidth / 2;

  lettuce = new Lettuce(random(cellSize * 2, windowWidth - cellSize * 2), random(cellSize * 2, windowHeight - cellSize * 2), foodWidth, foodHeight);
  tomato = new Tomato(random(cellSize * 2, windowWidth - cellSize * 2), random(cellSize * 2, windowHeight - cellSize * 2), foodWidth, foodHeight);
  cheese = new Cheese(random(cellSize * 2, windowWidth - cellSize * 2), random(cellSize * 2, windowHeight - cellSize * 2), foodWidth, foodHeight);
  ketchup = new Ketchup(random(cellSize * 2, windowWidth - cellSize * 2), random(cellSize * 2, windowHeight - cellSize * 2), foodWidth, foodHeight + 70);
  onion = new Onions(random(cellSize * 2, windowWidth - cellSize * 2), random(cellSize * 2, windowHeight - cellSize * 2), foodWidth, foodHeight);

  inventory = [];

  lettuceTaken = false;
  tomatoTaken = false;
  cheeseTaken = false;
  ketchupTaken = false;
  onionTaken = false;
}

// the function that loops as fast as fps
function draw() {
  gameLoop();
}

// the burger class
class Burger {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.w = width;
    this.h = height;
  }

  display() {
    image(burgerImg, this.x, this.y, this.w, this.h);
  }

  movement() {
    if (keyIsDown(UP_ARROW)) {
      this.y -= 5;
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.y += 5;
    }
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= 5;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += 5;
    }
  }
}

// the person class
class Person {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.w = width;
    this.h = height;
  }
}

// the lettuce class
class Lettuce {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.w = width;
    this.h = height;
  }
  spawn() {
    image(lettuceImg, this.x, this.y, this.w, this.h);
  }
}

// the tomato class
class Tomato {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.w = width;
    this.h = height;
  }
  spawn() {
    image(tomatoImg, this.x, this.y, this.w, this.h);
  }
}

// the cheese class
class Cheese {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.w = width;
    this.h = height;
  }
  spawn() {
    image(cheeseImg, this.x, this.y, this.w, this.h);
  }
}

// the ketchup class
class Ketchup {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.w = width;
    this.h = height;
  }
  spawn() {
    image(ketchupImg, this.x, this.y, this.w, this.h);
  }
}

// the onions class
class Onions {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.w = width;
    this.h = height;
  }
  spawn() {
    image(onionImg, this.x, this.y, this.w, this.h);
  }
}

// function that spawns the food on the map
function spawnFood() {
  lettuce.spawn();
  tomato.spawn();
  cheese.spawn();
  ketchup.spawn();
  onion.spawn();
}

// burger to food collision detection
function collisionDetection() {
  // calculates distance between food and burger
  lettuceD = dist(lettuce.x, lettuce.y, burger.x, burger.y);
  tomatoD = dist(tomato.x, tomato.y, burger.x, burger.y);
  cheeseD = dist(cheese.x, cheese.y, burger.x, burger.y);
  ketchupD = dist(ketchup.x, ketchup.y, burger.x, burger.y);
  onionD = dist(onion.x, onion.y, burger.x, burger.y);

  // if the food to burger distance is less than their radius, they are touching
  // if touched, changes the "food touched" state to true, otherwise the "food touched" is false
  if (lettuceD < radius * 1.2) {
    lettuceTaken = true;
    inventory.unshift("lettuce");
  } else {
    lettuceTaken = false;
  }

  if (tomatoD < radius * 1.2) {
    tomatoTaken = true;
    inventory.unshift("tomato");
  } else {
    tomatoTaken = false;
  }

  if (cheeseD < radius * 1.2) {
    cheeseTaken = true;
    inventory.unshift("cheese");
  } else {
    cheeseTaken = false;
  }

  if (ketchupD < radius * 1.2) {
    ketchupTaken = true;
    inventory.unshift("ketchup");
  } else {
    ketchupTaken = false;
  }

  if (onionD < radius * 1.2) {
    onionTaken = true;
    inventory.unshift("onion");
  } else {
    onionTaken = false;
  }
}

// the button class
class Button {
  constructor(text, x, y, buttonWidth, buttonHeight, [r, g, b], [hoverR, hoverG, hoverB], [textR, textG, textB], textSize) {
    this.text = text;
    this.buttonWidth = buttonWidth;
    this.buttonHeight = buttonHeight;
    this.leftSide = x;
    this.topSide = y;
    this.rightSide = this.leftSide + this.buttonWidth;
    this.bottomSide = this.topSide + this.buttonHeight;

    this.r = r;
    this.g = g;
    this.b = b;

    this.hoverR = hoverR;
    this.hoverG = hoverG;
    this.hoverB = hoverB;

    this.textR = textR;
    this.textG = textG;
    this.textB = textB;

    this.textSize = textSize;
  }

  display() {
    fill(this.r, this.g, this.b);
    if (mouseX >= this.leftSide && mouseX <= this.rightSide && mouseY >= this.topSide && mouseY <= this.bottomSide) {
      fill(this.hoverR, this.hoverG, this.hoverB);
    }
    rect(this.leftSide, this.topSide, this.buttonWidth, this.buttonHeight);
    fill(this.textR, this.textG, this.textB);
    textSize(textSize);
    text(this.text, this.leftSide + 150, this.topSide + 55);
  }

  isClicked() {
    if (mouseIsPressed && mouseX >= this.leftSide && mouseX <= this.rightSide && mouseY >= this.topSide && mouseY <= this.bottomSide) {
      return true;
    } else {
      return false;
    }
  }
}

function inventoryBar() {
  fill(149, 86, 25);
  for (let i = 1; i < 6; i++) {
    rect(10, i * cellSize, cellSize, cellSize);
    if (inventory[i - 1] === "lettuce") {
      image(lettuceImg, 10, i * cellSize, cellSize, cellSize);
    }
  }
}

function randomXLocation() {
  return random(cellSize * 2, windowWidth - cellSize * 2);
}

function randomYLocation() {
  return random(cellSize * 2, windowHeight - cellSize * 2);
}

function newFoodLocations() {
  if (lettuceTaken === true) {
    lettuce.x = random(cellSize * 2, windowWidth - cellSize * 2);
    lettuce.y = random(cellSize * 2, windowHeight - cellSize * 2);
  }
  if (tomatoTaken === true) {
    tomato.x = random(cellSize * 2, windowWidth - cellSize * 2);
    tomato.y = random(cellSize * 2, windowHeight - cellSize * 2);
  }
  if (cheeseTaken === true) {
    cheese.x = random(cellSize * 2, windowWidth - cellSize * 2);
    cheese.y = random(cellSize * 2, windowHeight - cellSize * 2);
  }
  if (ketchupTaken === true) {
    ketchup.x = random(cellSize * 2, windowWidth - cellSize * 2);
    ketchup.y = random(cellSize * 2, windowHeight - cellSize * 2);
  }
  if (onionTaken === true) {
    onion.x = random(cellSize * 2, windowWidth - cellSize * 2);
    onion.y = random(cellSize * 2, windowHeight - cellSize * 2);
  }
}

function startScreen() {
  if (state === "startScreen") {
    image(tableImg, 0, 0, width, height);
    textAlign(CENTER);
    textSize(100);
    fill(51, 25, 0);
    text("EAT EAT REVOLUTION", width / 2, height / 2);
  }
}

function gameLoop() {
  if (state === "startScreen") {
    startScreen();
    button.display();
    if (button.isClicked()) {
      state = "game";
    }
  } else if (state === "game") {
    image(tableImg, 0, 0, width, height);
    image(sexyBeast, 0, 0, width, height);
    spawnFood();
    burger.display();
    burger.movement();
    collisionDetection();
    inventoryBar();
    newFoodLocations();
  }
}

// if burger touches garbage can, clean inventory

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
