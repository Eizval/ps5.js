let allCirclesX = [];
let allCirclesY = [];
let allCirclesR = [];
const circles = [];

const MAX_NUMBER_OF_CIRCLES = 1000;
const MIN_RADIUS = 5;

class Color {
  constructor(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
  }
  static randomColor() {
    return new Color(random(255), random(255), random(255));
  }
}

class Circle {
  
  static drawAllCircles() {
    circles.forEach((circle) => {
      circle.draw();
    });
  }

  static generateRandomCircle() {
    let x = random(0, width);
    let y = random(0, height);

    let distEndX = width - x;
    let distEndY = height - y;
    let minDistance = min(min(x, distEndX), min(y, distEndY));
    minDistance = min(minDistance, 100);

    circles.forEach((circle) => {
      let distanceCenterPoints = dist(x, y,circle.x,circle.y);
      let distanceToCircle = distanceCenterPoints - circle.radius;
      if (distanceToCircle <= minDistance) {
        minDistance = distanceToCircle;
      }
    });

    if (minDistance > 0 && minDistance > MIN_RADIUS) {
      circles.push(new Circle(x, y, minDistance, Color.randomColor()));
    }
  }


  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }

  draw() {
    strokeWeight(0);
    fill(this.color.r, this.color.g, this.color.b);
    circle(this.x, this.y, this.radius * 2);
  }

  isInside(x,y){
    return this.radius>= dist(this.x,this.y,x,y)
  }

  delete(){
    console.log("this Circle is trying to kill itself")
    //splice
  }

  randomizeColor(){
    this.color = Color.randomColor();
  }
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 100, 100);
  frameRate(100);

  
}

function draw() {
    if(circles.length<MAX_NUMBER_OF_CIRCLES){
        Circle.generateRandomCircle();
    }
  Circle.drawAllCircles();
}

function mousePressed() {

    circles.forEach(circle=>{
        if(circle.isInside(mouseX,mouseY)){
            circle.randomizeColor();
            // circle.delete()
        }
    })
}

