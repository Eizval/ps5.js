function setup() {
  createCanvas(400, 400);
  background(255);
  stroke(0,0,0)
}

function draw() {}

function mousePressed() {
    fill(0,0,0,0)
    let xOfMouse = mouseX;
    let yOfMouse = mouseY;

    rect(xOfMouse, yOfMouse, random(400), random(400), 0)
}
