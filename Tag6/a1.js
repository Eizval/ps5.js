let pixel = [];
let squareSideLenght = 20;
let gameIsRunning = false;

function setup() {
  let y;
  let x;

  if ((windowHeight / 2) % squareSideLenght === 0) {
    y = windowHeight / 2;
  } else {
    let minus = (windowHeight / 2) % squareSideLenght;
    y = windowHeight / 2 - minus;
  }

  if ((windowWidth / 2) % squareSideLenght === 0) {
    x = windowWidth / 2;
  } else {
    let minus = (windowWidth / 2) % squareSideLenght;
    x = windowWidth / 2 - minus;
  }

  createCanvas(x, y);
  //   strokeWeight(1);
  createField();

  print(pixel);
}

function draw() {
  frameRate(10);
  //   print(pixel)
  redrawField();
  if (gameIsRunning) {
    liveRules();
  }
  // print(gameIsRunning);
}

function mousePressed() {
  for (let x = 0; x < pixel.length; x++) {
    for (let y = 0; y < pixel[x].length; y++) {
      currentSquare = pixel[x][y];
      if (
        currentSquare.x - 1 < mouseX &&
        mouseX < currentSquare.x + squareSideLenght + 1 &&
        currentSquare.y - 1 < mouseY &&
        mouseY < currentSquare.y + squareSideLenght + 1
      ) {
        currentSquare.isAlive = !currentSquare.isAlive;
      }
    }
  }
}

function redrawField() {
  clear();
  for (let x = 0; x < pixel.length; x++) {
    for (let y = 0; y < pixel[x].length; y++) {
      currentSquare = pixel[x][y];
      if (currentSquare.isAlive == true) {
        fill(255);
      } else {
        fill(0);
      }
      square(currentSquare.x, currentSquare.y, squareSideLenght);
    }
  }
}

function createField() {
  stroke(255, 255, 255);
  fill(0);

  for (let x = 0; x < width; x += squareSideLenght) {
    pixel.push([]);
    for (let y = 0; y < height; y += squareSideLenght) {
      square(x, y, squareSideLenght);
      pixel[pixel.length - 1].push({ x, y, isAlive: false });
    }
  }
}

function liveRules() {
  // wenn er am rand ist dann schaut er ob es negative 
  // ist oder ob es grösser ist als die max zahl und dann nehmt er die differenz
  // und sucht das feld mit diesen x / y achsen und das ist dass feld dass er jetzt schauen
  // muss ob es alive ist oder nicht
}

function keyPressed() {
  if (keyCode === 13) {
    gameIsRunning = !gameIsRunning;
  }
}
