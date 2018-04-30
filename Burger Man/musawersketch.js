let burger, burgerImg;
let person;
let lettuce, tomato, cheese, ketchup, onion;
let lettuceImg, tomatoImg, cheeseImg, ketchupImg, onionImg, tableImg;
let foodWidth, foodHeight;
let inventory;
let button;
let state;

function preload() {
  lettuceImg = loadImage("assets/images/lettuce.png");
  tomatoImg = loadImage("assets/images/tomato.png");
  cheeseImg = loadImage("assets/images/cheese.png");
  ketchupImg = loadImage("assets/images/ketchup.png");
  onionImg = loadImage("assets/images/onion.png");
  burgerImg = loadImage("assets/images/burger.png");
  tableImg = loadImage("assets/images/table.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  state = "startScreen";

  button = new Button(width/2 - 175, height/2 + 75, 300, 75);
  burger = new Burger(width / 2, 100, 100, 100);

  person = new Person();

  foodWidth = 40;
  foodHeight = 40;

  lettuce = new Lettuce(random(width - lettuceImg.width), random(height - lettuceImg.height), foodWidth, foodHeight);
  tomato = new Tomato(random(width - tomatoImg.width), random(height - tomatoImg.height), foodWidth, foodHeight);
  cheese = new Cheese(random(width - cheeseImg.width), random(height - cheeseImg.height), foodWidth, foodHeight);
  ketchup = new Ketchup(random(width - ketchupImg.width), random(height - ketchupImg.height), foodWidth, foodHeight);
  onion = new Onions(random(width - onionImg.width), random(height - onionImg.height), foodWidth, foodHeight);

  inventory = [];

}

function draw() {
  if (state === "startScreen"){
    startScreen();
    button.display();
    if (button.isClicked()) {
     state = "game";
    }
  }
  else if(state === "game"){
    background(255);
    spawnFood();
    burger.display();
    burger.movement();
  }
}

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
  spawn() {
    image(lettuceImg, this.x, this.y);
  }
  taken() {
    if (burger.x + burger.w / 2 < lettuce.x - lettuce.w / 2) {
      print("yo");
    }
  }
  // if burger x +-radius  === lettucs +-radius
  // && burger y +-radius === lettuce +-radius
}

class Tomato {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.w = width;
    this.h = height;
  }
  spawn() {
    image(tomatoImg, this.x, this.y);
  }
}

class Cheese {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.w = width;
    this.h = height;
  }
  spawn() {
    image(cheeseImg, this.x, this.y);
  }
}

class Ketchup {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.w = width;
    this.h = height;
  }
  spawn() {
    image(ketchupImg, this.x, this.y);
  }
}

class Onions {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.w = width;
    this.h = height;
  }
  spawn() {
    image(onionImg, this.x, this.y);
  }
}


function spawnFood() {
  lettuce.spawn();
  tomato.spawn();
  cheese.spawn();
  ketchup.spawn();
  onion.spawn();
}

function gameOver() {
//
}

function startScreen() {
  if (state === "startScreen") {
    image(tableImg,0,0,width,height);
    textAlign(CENTER);
    textSize(100);
    fill(51,25,0);
    text("EAT EAT REVOLUTION", width / 2, height / 2);

  }
}



// if food touches a food, food disappears, inventory array gets food
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
