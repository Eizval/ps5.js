let img;
let img2;
let img3;
let img4;
let img5;
let currentImageIndex = 0;
const numberOfImages = 4;

function preload() {
  img = loadImage("../Bilder/kickflip.jpg");
  img2 = loadImage("../Bilder/mountenIsland.jpg");
  img3 = loadImage("../Bilder/mountenIsland.jpg");
  img4 = loadImage("../Bilder/mountenIsland.jpg");
  img5 = loadImage("../Bilder/mountenIsland.jpg");
  img6 = loadImage("../Bilder/mountenIsland.jpg");
}

function setup() {
  createCanvas(400, 400);
  background(255);
  pixelDensity(1);

  img2.loadPixels();
  img3.loadPixels();
  img4.loadPixels();

  //Red
  for (let i = 0; i < img2.pixels.length; i += 4) {
    img2.pixels[i + 1] = 0;
    img2.pixels[i + 2] = 0;
  }
  //Green
  for (let i = 0; i < img3.pixels.length; i += 4) {
    img3.pixels[i + 0] = 0;
    img3.pixels[i + 2] = 0;
  }

  //Blue
  for (let i = 0; i < img4.pixels.length; i += 4) {
    img4.pixels[i + 0] = 0;
    img4.pixels[i + 1] = 0;
  }

  img2.updatePixels();
  img3.updatePixels();
  img4.updatePixels();
}

function draw() {
  // img2.updatePixels();

  let pic;
  switch (currentImageIndex) {
    case 0:
      pic = img5;
      break;
    case 1:
      pic = img2;
      break;
    case 2:
      pic = img3;
      break;
    case 3:
      pic = img4;
      break;
    default:
      break;
  }
  image(pic, 0, 30, 450, 300);
}

function mousePressed() {
  currentImageIndex++;
  if (currentImageIndex >= numberOfImages) {
    currentImageIndex = 0;
  }

//   console.log(currentImageIndex);
//   if ((currentImageIndex = 0)) {
//     //Blue
//     for (let i = 0; i < img2.pixels.length; i += 4) {
//       img2.pixels[i + 0] = 0;
//       img2.pixels[i + 1] = 0;
//       img2.pixels[i + 3] = 255;
//       currentImageIndex++;
//     }
//     console.log("Blue", currentImageIndex);
//   } else if ((currentImageIndex = 1)) {
//     //Red
//     for (let i = 0; i < img2.pixels.length; i += 4) {
//       img2.pixels[i + 1] = 0;
//       img2.pixels[i + 2] = 0;
//       img2.pixels[i + 3] = 255;
//       currentImageIndex++;
//     }
//     console.log("RED", currentImageIndex);
//   } else if ((currentImageIndex = 2)) {
//     //Green
//     for (let i = 0; i < img2.pixels.length; i += 4) {
//       img2.pixels[i + 0] = 0;
//       img2.pixels[i + 2] = 0;
//       img2.pixels[i + 3] = 255;
//       currentImageIndex++;
//     }
//     console.log("Green", currentImageIndex);
//   } else if ((currentImageIndex = 3)) {
//     //Shows all colors
//     for (let i = 0; i < img2.pixels.length; i += 4) {
//       img2.pixels[i + 3] = 255;
//       currentImageIndex++;
//     }
//     console.log("All", currentImageIndex);
//   } else if ((currentImageIndex = 4)) {
//     currentImageIndex = 0;
//   }
  
}
