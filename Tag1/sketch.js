function setup() {
  createCanvas(400, 400);
  background(220);
  stroke("Black");
  for (let x = 1; x <= 80; x += 20) {
    for (let y = 1; y < 80; y += 20) {
      let amountOfSquares = floor(random(4)) + 1;

      const bigX = 5 * x;
      const bigY = 5 * y;
      const bigRadius = 90;
      square(bigX, 5 * y, 90);

      let smallX;
      let smallY;
      let radius;
      radius = random(90);
      const smallWidth = radius;
      let squareNumber = random(4);
      for (i = 0; i <= squareNumber; i++) {
        smallX = random(bigX, bigX + bigRadius - smallWidth);
        smallY = random(bigY, bigY + bigRadius - smallWidth);

        square(smallX, smallY, smallWidth);
      }

      // NOT good atempt
      // if (amountOfSquares == 1 && squareInSqueare <= 4) {
      //   let smallY = floor(random(20)) + 1;
      //   let radius = floor(random(90));
      //   console.log(radius + " Befor -")
      //   if(smallY + radius > 90){
      //     radius = radius -30
      //     console.log(radius + " After -")
      //     console.log(smallY + " Thats the y value of small square")
      //   }
      //   square(5 * x, smallY, radius);
    }
  }
}

function draw() {}
