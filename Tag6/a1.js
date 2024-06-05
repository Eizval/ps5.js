let pixel = [];
let nextGeneration = [];
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
  createField();

  // print(pixel);
  // print(xWidth + " / " + yWidth);
}

function draw() {
  frameRate(10);
  redrawField();
  if (gameIsRunning) {
    liveRules();
    copyArrayValues();
  }
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
        fill(20, 180, 255);
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
    nextGeneration.push([]);
    for (let y = 0; y < height; y += squareSideLenght) {
      square(x, y, squareSideLenght);
      pixel[pixel.length - 1].push({ x, y, isAlive: false });
      nextGeneration[nextGeneration.length - 1].push(false);
    }
  }
}

function copyArrayValues() {
  for (let x = 0; x < pixel.length; x++) {
    for (let y = 0; y < pixel[x].length; y++) {
      pixel[x][y].isAlive = nextGeneration[x][y];
    }
  }
}

function liveRules() {
  for (let x = 0; x < pixel.length; x++) {
    for (let y = 0; y < pixel[x].length; y++) {
      let center = pixel[x][y];
      let partnerCellsAlive = 0;

      for (let innerFieldX = -1; innerFieldX < 2; innerFieldX++) {
        for (let innerFieldY = -1; innerFieldY < 2; innerFieldY++) {
          let currentX = x + innerFieldX;
          let currentY = y + innerFieldY;

          if (innerFieldX == 0 && innerFieldY == 0) {
            continue;
          }

          if (currentX < 0) {
            currentX += pixel.length;
          }
          if (currentX > pixel.length - 1) {
            currentX -= pixel.length;
          }

          if (currentY < 0) {
            currentY += pixel[currentX].length;
          }
          if (currentY > pixel[currentX].length - 1) {
            currentY -= pixel[currentX].length;
          }

          if (pixel[currentX][currentY].isAlive) {
            partnerCellsAlive++;
          }
        }
      }

      if (center.isAlive && (partnerCellsAlive > 3 || partnerCellsAlive < 2)) {
        nextGeneration[x][y] = false;
      }
      if (
        center.isAlive &&
        (partnerCellsAlive == 3 || partnerCellsAlive == 2)
      ) {
        nextGeneration[x][y] = true;
      }

      if (!center.isAlive && partnerCellsAlive == 3) {
        nextGeneration[x][y] = true;
      }
    }
  }
}

function keyPressed() {
  //ENTER
  if (keyCode === 13) {
    gameIsRunning = !gameIsRunning;
  }
}
