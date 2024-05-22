let pixel = [];

function setup() {
  let y;
  let x;
  let quadres = 20;
  if ((windowHeight / 2) % quadres === 0) {
    y = windowHeight / 2;
  } else {
    let minus = (windowHeight / 2) % quadres;
    y = windowHeight / 2 - minus;
  }

  if ((windowWidth / 2) % quadres === 0) {
    x = windowWidth / 2;
  } else {
    let minus = (windowWidth / 2) % quadres;
    x = windowWidth / 2 - minus;
  }

  createCanvas(x, y);
  //   strokeWeight(1);
  stroke(255, 255, 255);
  fill(0);

  for (let x = 0; x < width; x += quadres) {
    pixel.push([])
    for (let y = 0; y < height; y += quadres) {
      square(x, y, quadres);
      pixel.push({x,y,isAlive: false});
    }
  }
}

function draw() {
  frameRate(1);
//   print(pixel)
}
