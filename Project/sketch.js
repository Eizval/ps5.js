let startsize = 5; // Initial size of the squares
let startingAmount = 50; // Number of squares to start with
let distanceFromBorder = 10; // Minimum distance from the canvas border for squares
let squares = []; // Array to store square objects

let canvasX; // Width of the canvas
let canvasY; // Height of the canvas

function setup() {
  canvasX = windowWidth / 2; // Set canvas width to half the window width
  canvasY = windowHeight / 2; // Set canvas height to half the window height
  createCanvas(canvasX, canvasY); // Create a canvas with the specified dimensions
  background(200); // Set the background color to light gray
  startUniverse(); // Initialize the squares
  // print(squares); // Debug: Print the squares array to the console
}

function draw() {
  background(200); // Clear the canvas with light gray background on each frame
  makeThemMove(); // Update and draw the squares
}

function startUniverse() {
  for (let i = 0; i < startingAmount; i++) {
    let x = random(distanceFromBorder, windowWidth / 2 - distanceFromBorder); // Random x-coordinate within bounds
    let y = random(distanceFromBorder, windowHeight / 2 - distanceFromBorder); // Random y-coordinate within bounds
    x = floor(x) + 1; // Floor the x-coordinate and add 1
    y = floor(y) + 1; // Floor the y-coordinate and add 1

    square(x, y, startsize); // Draw the initial square
    let way = floor(random(0, 4)) + 1; // Random direction for the square (1 to 4)
    // print(way) // Debug: Print the direction to the console
    squares.push({
      index: i,
      direction: way,
      x: x,
      y: y,
      d: startsize,
      fused: false,
    }); // Add square object to the array
  }
}

function makeThemMove() {
  clear(); // Clear the canvas
  for (let i = 0; i < squares.length; i++) {
    let dir = squares[i].direction; // Get the direction of the current square
    if (dir == 1) {
      squares[i].y = squares[i].y - squares[i].d; // Move up
      if (squares[i].y < 1) {
        squares[i].y = squares[i].y + canvasY; // Wrap around to the bottom
      }
    } else if (dir == 2) {
      squares[i].y = squares[i].y + squares[i].d; // Move down
      if (squares[i].y > canvasY) {
        squares[i].y = squares[i].y - canvasY; // Wrap around to the top
      }
    } else if (dir == 3) {
      squares[i].x = squares[i].x - squares[i].d; // Move left
      if (squares[i].x < 1) {
        squares[i].x = squares[i].x + canvasX; // Wrap around to the right
      }
    } else {
      squares[i].x = squares[i].x + squares[i].d; // Move right
      if (squares[i].x > canvasX) {
        squares[i].x = squares[i].x - canvasX; // Wrap around to the left
      }
    }
    if (squares[i].fused == false) {
      square(squares[i].x, squares[i].y, startsize); // Draw the square if it is not fused
    }
  }
}

function fusion() {
  for (let i = 0; i < squares.length; i++) {
    for (let inner = 0; inner < squares.length; inner++) {
      if (
        squares[i].y > squares[inner].y &&
        squares[i].y > squares[i].y - squares[i].d * 3
      )
        squares[i].y; // Incomplete: Logic for fusing squares
    }
  }
}
