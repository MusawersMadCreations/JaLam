let runner;
let runner2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  runner = new Runner(100,100);
  runner2 = new Runner(200,200);
}

function draw() {
  runner.move();
  runner2.move();
  runner.display();
  runner2.display();
}

class Runner {
  constructor(x,y,r = 255,g = 0,b = 0){
    this.x = x;
    this.y = y;
    this.w = 100;
    this.h = 100;
    this.color = color(r,g,b);
  }
  display(){
    let choice = random(100);
    if(choice > 25){
      this.x + 5;
    }
    else if(choice < 25){
      this.x - 5;
    }
    else if(choice < 75){
      this.y + 5;
    }
    else{
      this.y - 5;
    }
  }

  move(){
    ellipse(this.x,this.y,this.w,this.h);
  }
}
