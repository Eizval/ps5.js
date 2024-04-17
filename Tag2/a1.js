let img;
let img2;

function preload() {
  img = loadImage("../Bilder/kickflip.jpg");
  img2 = loadImage("../Bilder/mountenIsland.jpg");
}

function setup() {
  createCanvas(400, 400);
  background(255);
  pixelDensity(1);
  image(img, 0, 30, 450, 300);

  img.loadPixels();
  img2.loadPixels();

  for (let i = 0; i < img2.pixels.length; i += 4) {
    if (img.pixels[i + 1] % 2 == 0) {
      img2.pixels[i + 3] = 255;
    } else {
      img2.pixels[i + 3] = 0;
    }
  }

  img.updatePixels();
  img2.updatePixels();
  image(img2, 0, 30, 450, 300);
}

function draw() {}
