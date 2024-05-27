let pixel = [];
let squareSideLenght = 20;
let gameIsRunning = false;
let yWidth;
let xWidth;

function setup() {
  if ((windowHeight / 2) % squareSideLenght === 0) {
    yWidth = windowHeight / 2;
  } else {
    let minus = (windowHeight / 2) % squareSideLenght;
    yWidth = windowHeight / 2 - minus;
  }

  if ((windowWidth / 2) % squareSideLenght === 0) {
    xWidth = windowWidth / 2;
  } else {
    let minus = (windowWidth / 2) % squareSideLenght;
    xWidth = windowWidth / 2 - minus;
  }

  createCanvas(xWidth, yWidth);
  //   strokeWeight(1);
  createField();

  print(pixel);
  print(xWidth + " / " + yWidth);
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
        fill(255, 2, 255);
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
  oldCell = pixel;
  for (let x = 0; x < pixel.length; x++) {
    for (let y = 0; y < pixel[x].length; y++) {
      if (oldCell[x][y].isAlive) {
        let centerX = oldCell[x][y].x;
        let centerY = oldCell[x][y].y;
        let partnerCellsAlive = 0;

        let currentX = centerX - squareSideLenght;
        let currentY = centerY - squareSideLenght;

        if (currentX < 0 && currentY < 0) {
          let cX = pixel.length - 1;
          let cY = pixel[x].length - 1;
          if (oldCell[cX][cY].isAlive) {
            partnerCellsAlive += 1;
          }
        } else if (currentX > 0 && currentY < 0) {
        } else if (currentY > yWidth - squareSideLenght && currentX > 0) {
        } //else if ()
        print(partnerCellsAlive);
      }
    }
  }
  print(oldCell);
  // print(oldCell[centerX - squareSideLenght]);
}

function keyPressed() {
  if (keyCode === 13) {
    gameIsRunning = !gameIsRunning;
  }
}
