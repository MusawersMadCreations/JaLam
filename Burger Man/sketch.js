// Eat Eat Revolution
// Roger Lam
// April 20, 2018

let gameTimer;
let burger, burgerImg;

let person;
let orderIsDone;

let tableImg;

let lettuce, tomato, cheese, ketchup, onion;
let lettuceImg, tomatoImg, cheeseImg, ketchupImg, onionImg, trashImg;
let lettuceTaken, tomatoTaken, cheeseTaken, ketchupTaken, onionTaken;
let lettuceD, tomatoD, cheeseD, ketchupD, onionD;
let foodList;
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
  trashImg = loadImage("assets/images/trash.png");
  sexyBeast = loadImage("assets/images/d.png");
}

// executes once after preload
function setup() {
  createCanvas(windowWidth, windowHeight);

  state = "startScreen";

  gameTimer = new Timer(7000, width - 80, 275);

  button = new Button("START", width / 2 - 175, height / 2 + 80, 320, 80, [51, 25, 0], [126, 74, 16], [255, 178, 102], 30, 160, 75);

  cellSize = windowHeight / 8;

  burger = new Burger(width / 2, 100, 80, 80);

  // person = new Person();
  orderIsDone = false; // if person has been fulfilled in time

  foodWidth = 80;
  foodHeight = 80;

  radius = foodWidth / 2;

  lettuce = new Lettuce(random(cellSize * 1.5, windowWidth - cellSize * 2), random(cellSize * 1.5, windowHeight - cellSize * 2), foodWidth, foodHeight);
  tomato = new Tomato(random(cellSize * 1.5, windowWidth - cellSize * 2), random(cellSize * 1.5, windowHeight - cellSize * 2), foodWidth, foodHeight);
  cheese = new Cheese(random(cellSize * 1.5, windowWidth - cellSize * 2), random(cellSize * 1.5, windowHeight - cellSize * 2), foodWidth, foodHeight);
  ketchup = new Ketchup(random(cellSize * 1.5, windowWidth - cellSize * 2), random(cellSize * 1.5, windowHeight - cellSize * 3), foodWidth, foodHeight + 70);
  onion = new Onions(random(cellSize * 1.5, windowWidth - cellSize * 2), random(cellSize * 1.5, windowHeight - cellSize * 2), foodWidth, foodHeight);
  foodList = [lettuce, tomato, cheese, ketchup, onion];

  inventory = createInventoryBar();

  lettuceTaken = false;
  tomatoTaken = false;
  cheeseTaken = false;
  ketchupTaken = false;
  onionTaken = false;
}

// the function that loops as fast as fps
function draw() {
  gameLoop();
  gameTimer.display();
  if (gameTimer.isDone()) {
   print("It Works")
   //state = "gameOver";
  if (orderIsDone) { // WHEN GUY WHO ORDERS RECIEVES HIS ORDER
    gameTimer.reset(7000);
    // makeOrder()       // make new order
    }
  }
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

  checkDist() {
    // foodList = [lettuce, tomato]
    this.x = randomXLocation();
    this.y = randomYLocation();
    for (let i = 0; i < foodList.length; i++) {
      if (foodList[i] !== this) {
        if (dist(this.x, this.y, foodList[i].x, foodList[i].y) < 200) {
          this.x = randomXLocation();
          this.y = randomYLocation();
        }
      }
    }
    lettuceTaken = false;
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
  checkDist() {
    this.x = randomXLocation();
    this.y = randomYLocation();
    for (let i = 0; i < foodList.length; i++) {
      if (foodList[i] !== this) {
        if (dist(this.x, this.y, foodList[i].x, foodList[i].y) < 200) {
          this.x = randomXLocation();
          this.y = randomYLocation();
        }
      }
    }
    tomatoTaken = false;
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
  checkDist() {
    this.x = randomXLocation();
    this.y = randomYLocation();
    for (let i = 0; i < foodList.length; i++) {
      if (foodList[i] !== this) {
        if (dist(this.x, this.y, foodList[i].x, foodList[i].y) < 200) {
          this.x = randomXLocation();
          this.y = randomYLocation();
        }
      }
    }
    cheeseTaken = false;
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
  checkDist() {
    this.x = randomXLocation();
    this.y = randomYLocation();
    for (let i = 0; i < foodList.length; i++) {
      if (foodList[i] !== this) {
        if (dist(this.x, this.y, foodList[i].x, foodList[i].y) < 200) {
          this.x = randomXLocation();
          this.y = randomYLocation();
        }
      }
    }
    ketchupTaken = false;
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
  checkDist() {
    this.x = randomXLocation();
    this.y = randomYLocation();
    for (let i = 0; i < foodList.length; i++) {
      if (foodList[i] !== this) {
        if (dist(this.x, this.y, foodList[i].x, foodList[i].y) < 200) {
          this.x = randomXLocation();
          this.y = randomYLocation();
        }
      }
    }
    onionTaken = false;
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
    // inventory.unshift("lettuce");
  }
  if (tomatoD < radius * 1.2) {
    tomatoTaken = true;
    // inventory.unshift("tomato");
  }
  if (cheeseD < radius * 1.2) {
    cheeseTaken = true;
    // inventory.unshift("cheese");
  }
  if (ketchupD < radius * 1.2) {
    ketchupTaken = true;
    // inventory.unshift("ketchup");
  }
  if (onionD < radius * 1.2) {
    onionTaken = true;
    // inventory.unshift("onion");
  }
}

class Timer {
  constructor(waitTime,textX,textY) {
    this.waitTime = waitTime;
    this.startTime = millis();
    this.finishTime = this.startTime + this.waitTime;
    this.timerIsDone = false;

    this.textX = textX;
    this.textY = textY;
  }

  display(){
    textSize(50);
    text("Time",this.textX - 5 ,this.textY - 90)
    fill(51, 25, 0);
    rect(this.textX - 80,this.textY - 85, 155,100,25);
    fill(255, 178, 102);
    textSize(100);
    text(int(millis()/1000),this.textX,this.textY);

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

function createInventoryBar() {
  let newInventory = [];
  for (let i = 1; i < 6; i++) {
    newInventory.push("empty");
  }
  return newInventory;
}

function displayInventoryBar() {
  fill(149, 86, 25);
  for (let i = 1; i < inventory.length + 2; i++) {
    if (inventory[i - 1] === "empty" && lettuceTaken === true) {
      rect(10, i * cellSize, cellSize, cellSize);
      // lettuceTaken = false;
      // inventory[i - 1] = "lettuce";
    }
    rect(10, i * cellSize, cellSize, cellSize);
    // inventory.push(0);
    // if (inventory[i - 1] === "lettuce") {
    //   image(lettuceImg, 10, i * cellSize, cellSize, cellSize);
    // }
  }
}

// if burger picks up lettuce, the lettuce gets assigned the first square
// burger then picks up onion, the onion gets assigned the second square
// if square "empty", allow food to get assigned to square

function randomXLocation() {
  return random(cellSize * 1.5, windowWidth - cellSize * 2.5);
}

function randomYLocation() {
  return random(cellSize *1.25, windowHeight - cellSize * 3);
}

function newFoodLocations() {
  if (lettuceTaken === true) {
    lettuce.checkDist();
    // lettuceTaken = false;
  }
  if (tomatoTaken === true) {
    tomato.checkDist();
  }
  if (cheeseTaken === true) {
    cheese.checkDist();
  }
  if (ketchupTaken === true) {
    ketchup.checkDist();
  }
  if (onionTaken === true) {
    onion.checkDist();
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
  background(255);
  if (state === "startScreen") {
    startScreen();
    button.display();
    if (button.isClicked()) {
      state = "game";
    }
  } else if (state === "game") {
    image(tableImg, 0, 0, width, height);
    // image(sexyBeast, 0, 0, width, height);
    spawnFood();
    trash();
    burger.display();
    burger.movement();
    collisionDetection();
    displayInventoryBar();
    newFoodLocations();
  }
}

function trash(){
  let trashX = width - 160;
  let trashY = height/2;
  let trashSize = 155;
  fill(126, 74, 16);
  textSize(50);
  text("Trash", trashX + 75 ,trashY - 10);
  fill(62,37,15);
  rect(trashX ,trashY ,trashSize,trashSize,25);
  image(trashImg,trashX,trashY,trashSize,trashSize);
  if (burger.x >= trashX && burger.y >= trashY){
    burger.x = width / 2;
    burger.y =  100;
  }
}

// Roger:
// 1. inventory
// 2. minimum distance between foods
// 3. burger - person interaction

// Musawer:
// 1. generic-ize the button class DONE
// 2. garbage bin 75% DONE
// 3. timer system
// 4. person
