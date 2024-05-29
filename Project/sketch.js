let startsize = 5;
let startingAmount = 50;
let distanceFromBorder = 10;
let squares = [];

function setup() {
  createCanvas(windowWidth / 2, windowHeight / 2);
  background(25);
  startUniverse();
}

function draw(){
  
}

function startUniverse() {
  for (let i = 0; i < startingAmount; i++) {
    let x = random(distanceFromBorder, windowWidth / 2 - distanceFromBorder);
    let y = random(distanceFromBorder, windowHeight / 2 - distanceFromBorder);
    x = floor(x) + 1;
    y = floor(y) + 1;

    square(x, y, startsize);
    let way = floor(random(0,4)) + 1;
    print(way)
    squares.push({index: i, direction: way} )
  }
}
