let startsize = 5;
let startingAmount = 50;
let distanceFromBorder = 10;
let squares = [];

let canvasX;
let canvasY;

function setup() {
  canvasX = windowWidth / 2;
  canvasY = windowHeight / 2;
  createCanvas(canvasX, canvasY);
  background(200);
  startUniverse();
  print(squares);
}

function draw() {
  background(200);
  makeThemMove();
}

function startUniverse() {
  for (let i = 0; i < startingAmount; i++) {
    let x = random(distanceFromBorder, windowWidth / 2 - distanceFromBorder);
    let y = random(distanceFromBorder, windowHeight / 2 - distanceFromBorder);
    x = floor(x) + 1;
    y = floor(y) + 1;

    square(x, y, startsize);
    let way = floor(random(0, 4)) + 1;
    // print(way)
    squares.push({ index: i, direction: way, x: x, y: y, d: startsize, fused: false });
  }
}

function makeThemMove() {
  clear();
  for (let i = 0; i < squares.length; i++) {
    let dir = squares[i].direction;
    if (dir == 1) {
      squares[i].y = squares[i].y - squares[i].d;
      if (squares[i].y < 1) {
        squares[i].y = squares[i].y + canvasY;
      }
    } else if (dir == 2) {
      squares[i].y = squares[i].y + squares[i].d;
      if (squares[i].y > canvasY) {
        squares[i].y = squares[i].y - canvasY;
      }
    } else if (dir == 3) {
      squares[i].x = squares[i].x - squares[i].d;
      if (squares[i].x < 1) {
        squares[i].x = squares[i].x + canvasX;
      }
    } else {
      squares[i].x = squares[i].x + squares[i].d;
      if (squares[i].x > canvasX) {
        squares[i].x = squares[i].x - canvasX;
      }
    }
    if(squares[i].fused == false){
      square(squares[i].x, squares[i].y, startsize);
    }
  }
}


function fusion() {
  for(let i = 0; i < squares.length; i++){
    for(let inner = 0; inner < squares.length; inner++){
      if(squares[i].y > squares[inner].y && squares[i].y > (squares[i].y - squares[i].d * 3))
      squares[i].y
    }
  }
}
