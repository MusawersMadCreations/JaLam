// Eat Eat Revolution
// Musawer and Roger
// April 20, 2018

// Musawer's contribution: start screen, timer, trash, class creation, game loop creation, table
// Roger's contribution: inventory, burger movement, collision detection, food spawn, game over, burger to person interaction, the person

let burger, burgerImg;

let person, personImg;
let orderIsDone;
let gameTimer;

let tableImg;

let lettuce, tomato, cheese, ketchup, onion;
let lettuceImg, tomatoImg, cheeseImg, ketchupImg, onionImg, trashImg;
let lettuceTaken, tomatoTaken, cheeseTaken, ketchupTaken, onionTaken;
let lettuceD, tomatoD, cheeseD, ketchupD, onionD;
let lettuceCount, tomatoCount, cheeseCount, ketchupCount, onionCount;
let lettuceRequest, tomatoRequest, cheeseRequest, ketchupRequest, onionRequest;
let foodWidth, foodHeight;

let inventory;

let radius;
let cellSize;

let state;
let button;

let trashX;
let trashY;
let trashSize;

let points;

// preloads our images and audio
function preload() {
  lettuceImg = loadImage("assets/images/lettuce.png");
  tomatoImg = loadImage("assets/images/tomato.png");
  cheeseImg = loadImage("assets/images/cheese.png");
  ketchupImg = loadImage("assets/images/ketchup.png");
  onionImg = loadImage("assets/images/onion.png");
  burgerImg = loadImage("assets/images/burger.png");
  tableImg = loadImage("assets/images/table.png");
  trashImg = loadImage("assets/images/trash.png");
  personImg = loadImage("assets/images/pacMan.png");
}

// executes once after preload
function setup() {
  createCanvas(windowWidth, windowHeight);

  state = "startScreen";

  gameTimer = new Timer(7000, width - 80, 220);

  button = new Button("START", width / 2 - 175, height / 2 + 80, 320, 80, [51, 25, 0], [126, 74, 16], [255, 178, 102], 30, 160, 75);

  cellSize = windowHeight / 8;

  burger = new Burger(width / 2, 100, 80, 80);

  person = new Person(680, 630, 130, 130);
  person.randomBurgerRequest();

  orderIsDone = false; // if person has been fulfilled in time

  foodWidth = 80;
  foodHeight = 80;

  radius = foodWidth / 2;

  lettuce = new Lettuce(random(125, windowWidth - 300), random(60, 550), foodWidth, foodHeight);
  tomato = new Tomato(random(125, windowWidth - 300), random(60, 550), foodWidth, foodHeight);
  cheese = new Cheese(random(125, windowWidth - 300), random(60, 550), foodWidth, foodHeight);
  ketchup = new Ketchup(random(125, windowWidth - 300), random(60, 500), foodWidth, foodHeight + 60);
  onion = new Onions(random(125, windowWidth - 300), random(60, 550), foodWidth, foodHeight);

  inventory = createInventoryBar();

  lettuceTaken = false;
  tomatoTaken = false;
  cheeseTaken = false;
  ketchupTaken = false;
  onionTaken = false;

  lettuceCount = 0;
  tomatoCount = 0;
  cheeseCount = 0;
  ketchupCount = 0;
  onionCount = 0;

  points = 0;
}

// the function that loops as fast as fps
function draw() {
  gameLoop();
}

function mouseClicked() {
  print([mouseX, mouseY]);
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
    if (this.y > 30) {
      if (keyIsDown(UP_ARROW)) {
        this.y -= 5;
      }
    } else {
      this.y += 5;
    }

    if (this.y < 510) {
      if (keyIsDown(DOWN_ARROW)) {
        this.y += 5;
      }
    } else if (this.x > 660 && this.x < 760 && keyIsDown(DOWN_ARROW)) {
      this.y += 5;
    } else {
      this.y -= 5;
    }

    if (this.x > 120) {
      if (keyIsDown(LEFT_ARROW)) {
        this.x -= 5;
      }
    } else {
      this.x += 5;
    }

    if (this.x < 1280) {
      if (keyIsDown(RIGHT_ARROW)) {
        this.x += 5;
      }
    } else if (this.y > height / 2 - 45 && this.y < height / 2 + 105 && keyIsDown(RIGHT_ARROW)) {
      this.x += 5;
    } else {
      this.x -= 5;
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
  display() {
    image(personImg, this.x, this.y, this.w, this.h);
  }
  randomBurgerRequest() {
    lettuceRequest = int(random(4));
    tomatoRequest = int(random(4));
    ketchupRequest = int(random(4));
    cheeseRequest = int(random(4));
    onionRequest = int(random(4));
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

class Timer {
  constructor(waitTime, textX, textY) {
    this.waitTime = waitTime;
    this.startTime = millis();
    this.finishTime = this.startTime + this.waitTime;
    this.timerIsDone = false;

    this.textX = textX;
    this.textY = textY;
  }

  display() {
    textSize(22);
    fill(126, 74, 16);
    text("Time Available:", this.textX, this.textY - 40);
    textSize(32);
    text(int(millis() / 1000), this.textX, this.textY);
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
    } else {
      return false;
    }
  }
}

// the button class
class Button {
  constructor(text, x, y, buttonWidth, buttonHeight, [r, g, b], [hoverR, hoverG, hoverB], [textR, textG, textB], textSize, textX, textY) {
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
    this.textX = textX;
    this.textY = textY;
  }
  display() {
    fill(this.r, this.g, this.b);
    if (mouseX >= this.leftSide && mouseX <= this.rightSide && mouseY >= this.topSide && mouseY <= this.bottomSide) {
      fill(this.hoverR, this.hoverG, this.hoverB);
    }
    rectMode(CORNER);
    rect(this.leftSide, this.topSide, this.buttonWidth, this.buttonHeight);
    fill(this.textR, this.textG, this.textB);
    textSize(textSize);

    text(this.text, this.leftSide + this.textX, this.topSide + this.textY);
  }

  isClicked() {
    if (mouseIsPressed && mouseX >= this.leftSide && mouseX <= this.rightSide && mouseY >= this.topSide && mouseY <= this.bottomSide) {
      return true;
    } else {
      return false;
    }
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
  // if touched, sets the "food touched" state to true, otherwise the "food touched" is false
  if (lettuceD < radius * 1.2) {
    lettuceTaken = true;
    lettuceCount += 1;
  }
  if (tomatoD < radius * 1.2) {
    tomatoTaken = true;
    tomatoCount += 1;
  }
  if (cheeseD < radius * 1.2) {
    cheeseTaken = true;
    cheeseCount += 1;
  }
  if (ketchupD < radius * 1.2) {
    ketchupTaken = true;
    ketchupCount += 1;
  }
  if (onionD < radius * 1.2) {
    onionTaken = true;
    onionCount += 1;
  }
}

// function that checks what happens when burger gets eaten
function burgerPersonInteraction() {
  if (dist(burger.x, burger.y, person.x + 10, person.y) < 65 && matchRequestWithInventory() === true) {
    addPointsAndReset();
  }
  else if (dist(burger.x, burger.y, person.x + 10, person.y) < 65) {
    lose();
  }
}

// if the request and inventory match up, then points increase
function addPointsAndReset() {
  burger.x = width / 2;
  burger.y = 100;
  inventory = createInventoryBar();
  resetFoodCounts();
  points += 100;
}

// if the request and the inventory do not match up, then you lose
function lose() {
  state = "gameOver";
}

// function that creates an empty inventory bar
function createInventoryBar() {
  let newInventory = [];
  for (let i = 1; i < 6; i++) {
    newInventory.push("empty");
  }
  return newInventory;
}

// function that displays the inventory bar
function displayInventoryBar() {
  fill(149, 86, 25);
  for (let i = 1; i < inventory.length + 1; i++) {
    rect(10, i * cellSize, cellSize, cellSize);
  }
  for (let j = 0; j < inventory.length; j++) {
    textSize(28);
    fill("black");
    if (inventory[j] === "lettuce") {
      image(lettuceImg, 10, j * cellSize + cellSize, cellSize * 0.75, cellSize * 0.75);
      text(lettuceCount, 75, j * cellSize + cellSize * 2 - 10);
      break;
    }
  }
  for (let j = 0; j < inventory.length; j++) {
    if (inventory[j] === "tomato") {
      image(tomatoImg, 10, j * cellSize + cellSize, cellSize * 0.75, cellSize * 0.75);
      text(tomatoCount, 75, j * cellSize + cellSize * 2 - 10);
      break;
    }
  }
  for (let j = 0; j < inventory.length; j++) {
    if (inventory[j] === "ketchup") {
      image(ketchupImg, 10, j * cellSize + cellSize, cellSize * 0.75, cellSize * 0.75);
      text(ketchupCount, 75, j * cellSize + cellSize * 2 - 10);
      break;
    }
  }
  for (let j = 0; j < inventory.length; j++) {
    if (inventory[j] === "cheese") {
      image(cheeseImg, 10, j * cellSize + cellSize, cellSize * 0.75, cellSize * 0.75);
      text(cheeseCount, 75, j * cellSize + cellSize * 2 - 10);
      break;
    }
  }
  for (let j = 0; j < inventory.length; j++) {
    if (inventory[j] === "onion") {
      image(onionImg, 10, j * cellSize + cellSize, cellSize * 0.75, cellSize * 0.75);
      text(onionCount, 75, j * cellSize + cellSize * 2 - 10);
      break;
    }
  }
}

// when any food is picked up, it alters the inventory list and the display inventory bar function reacts to draw the food picked up in the inventory
function alterInventoryBar() {
  if (lettuceTaken === true) {
    for (let i = 0; i < inventory.length; i++) {
      if (inventory[i] === "empty") {
        if (inventory.includes("lettuce") === true) {
          break;
        }
        inventory[i] = "lettuce";
        break;
      }
    }
  }
  if (tomatoTaken === true) {
    for (let i = 0; i < inventory.length; i++) {
      if (inventory[i] === "empty") {
        if (inventory.includes("tomato") === true) {
          break;
        }
        inventory[i] = "tomato";
        break;
      }
    }
  }
  if (cheeseTaken === true) {
    for (let i = 0; i < inventory.length; i++) {
      if (inventory[i] === "empty") {
        if (inventory.includes("cheese") === true) {
          break;
        }
        inventory[i] = "cheese";
        break;
      }
    }
  }
  if (ketchupTaken === true) {
    for (let i = 0; i < inventory.length; i++) {
      if (inventory[i] === "empty") {
        if (inventory.includes("ketchup") === true) {
          break;
        }
        inventory[i] = "ketchup";
        break;
      }
    }
  }
  if (onionTaken === true) {
    for (let i = 0; i < inventory.length; i++) {
      if (inventory[i] === "empty") {
        if (inventory.includes("onion") === true) {
          break;
        }
        inventory[i] = "onion";
        break;
      }
    }
  }
}

// gives any food picked up a new location
function newFoodLocations() {
  if (lettuceTaken === true) {
    lettuce.x = random(125, windowWidth - 300);
    lettuce.y = random(60, 550);
    alterInventoryBar();
    lettuceTaken = false;
  }
  if (tomatoTaken === true) {
    tomato.x = random(125, windowWidth - 300);
    tomato.y = random(60, 550);
    alterInventoryBar();
    tomatoTaken = false;
  }
  if (cheeseTaken === true) {
    cheese.x = random(125, windowWidth - 300);
    cheese.y = random(60, 550);
    alterInventoryBar();
    cheeseTaken = false;
  }
  if (ketchupTaken === true) {
    ketchup.x = random(125, windowWidth - 300);
    ketchup.y = random(60, 500);
    alterInventoryBar();
    ketchupTaken = false;
  }
  if (onionTaken === true) {
    onion.x = random(125, windowWidth - 300);
    onion.y = random(60, 550);
    alterInventoryBar();
    onionTaken = false;
  }
}

// function that displays the start screen
function startScreen() {
  if (state === "startScreen") {
    image(tableImg, 0, 0, width, height);
    textAlign(CENTER);
    textSize(100);
    fill(51, 25, 0);
    text("EAT EAT REVOLUTION", width / 2, height / 2);
  }
}

// function regarding all interaction with the trash can
function trash() {
  trashX = width - 153;
  trashY = height / 2;
  trashSize = 155;
  fill(62, 37, 15);
  textSize(50);
  text("Trash", trashX + 75, trashY - 10);
  rectMode(CORNER);
  rect(trashX, trashY, trashSize, trashSize, 25);
  image(trashImg, trashX, trashY, trashSize, trashSize);
  if (burger.x >= trashX && burger.y >= trashY - 45) {
    burger.x = width / 2;
    burger.y = 100;
    inventory = createInventoryBar();
    resetFoodCounts();
  }
}

// this changes the amount of foods picked up to zero, occurs when burger goes into trash
function resetFoodCounts() {
  lettuceCount = 0;
  tomatoCount = 0;
  cheeseCount = 0;
  ketchupCount = 0;
  onionCount = 0;
}

// displays the request that the person asked for
function displayRequest() {
  textSize(24);
  fill("black");
  text("GIMME " + lettuceRequest + " lettuce(s), " + tomatoRequest + " tomato(s)", person.x + 335, person.y + 55);
  text(ketchupRequest + " ketchup(s), " + cheeseRequest + " cheese(s), and " + onionRequest + " onion(s)", person.x + 385, person.y + 95);
}

// checks if person request matches with the inventory
function matchRequestWithInventory() {
  if (lettuceRequest === lettuceCount && tomatoRequest === tomatoCount && ketchupRequest === ketchupCount && cheeseRequest === cheeseCount && onionRequest === onionCount) {
    return true;
  }
}

// function that displays the points on the side
function displayPoints() {
  textSize(32);
  text("Points:", windowWidth - 100, 70);
  text(points, windowWidth - 100, 100);
}

// the main game loop that wraps everything up nicely
function gameLoop() {
  background(255);
  if (state === "startScreen") {
    startScreen();
    button.display();
    if (button.isClicked()) {
      state = "game";
    }
  } else if (state === "game") {
    image(tableImg, 0, 0, width, height);
    gameTimer.display();
    if (gameTimer.isDone()) {
      // print("It Works");
      //state = "gameOver";
      if (orderIsDone) { // WHEN GUY WHO ORDERS RECIEVES HIS ORDER
        gameTimer.reset(7000);
        // makeOrder()       // make new order
      }
    }
    spawnFood();
    trash();
    person.display();
    burger.display();
    burger.movement();
    collisionDetection();
    displayInventoryBar();
    newFoodLocations();
    displayRequest();
    burgerPersonInteraction();
    displayPoints();
  }
  else {
    textSize(50);
    text("you lost bro, pac man is a picky eater", 700, 400);
    text("at least you got " + points + " points", 700, 480);
  }
}

// Musawer:
// timer system
