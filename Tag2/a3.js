let img;
function preload() {
  img = loadImage("../Bilder/popshuvit.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  img.loadPixels();
  image(img, 0, 0, windowWidth, windowHeight);
}

function draw() {}

function mousePressed() {
  clear();
  image(img, mouseX/2, mouseY/2, mouseX, mouseY);
}
