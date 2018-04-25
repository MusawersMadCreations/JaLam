let burger;
let person;

function setup() {
  createCanvas(windowWidth, windowHeight);
  burger = new Burger(width/2, 100);
  person = new Person();
}

function draw() {
  burger.display();
  burger.keyPressed();
}

class Burger {
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.w = 50;
    this.h = 50;
  }
  display(){
    ellipse(this.x,this.y,this.w,this.h);
  }
  keyPressed(){
    if (key === "w" || key === "W") {
      this.x - 5;
    }
    if (key === "s" || key === "S") {
      this.x + 5;
    }
    if (key === "a" || key === "A") {
      this.y - 5;
    }
    if (key === "d" || key === "D") {
      this.y + 5;
    }
  }
}

class Person{
  constructor(x,y){

  }
}
function keyPressed(){
  if (key === "w" || key === "W") {
    this.x - 5;
  }
  if (key === "s" || key === "S") {
    this.x + 5;
  }
  if (key === "a" || key === "A") {
    this.y - 5;
  }
  if (key === "d" || key === "D") {
    this.y + 5;
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
