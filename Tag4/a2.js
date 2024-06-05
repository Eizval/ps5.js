let axiom = "F+F+F+F";
let pattern = axiom;
let canvas;
let runs = 0;

let theRules = [];
//F
theRules[0] = ["F+F-F-FF+F+F-F"];
//f
theRules[1] = [""];
//+
theRules[2] = [""];
//-
theRules[3] = [""];
//[
theRules[4] = [""];
//]
theRules[5] = [""];

let anglePos;
let angleNeg;
let F = 50;
let f = 13;

function setup() {
  //tries drawing function on the top right corner but why ???
  canvas = createCanvas(windowWidth / 2, windowHeight / 2);
  anglePos = radians(90);
  angleNeg = radians(90);
  stroke(50, 75);
  fill(1);
  strokeWeight(1);
  background(230);
}

function generate() {
  if (runs > 4) {
    return;
  }
  // adds more strings based on the rules to the pattern string
  F *= 1;
  f *= 1;
  // You had to initialize it other wise its undefined + the new string
  let newPattern = "";

  for (let i = 0; i < pattern.length; i++) {
    let currentChar = pattern.charAt(i);
    if (currentChar === "F") {
      newPattern += theRules[0];
    } else if (currentChar === "f") {
      newPattern += theRules[1];
    } else {
      newPattern += currentChar;
    }
  }

  pattern = newPattern;
  // console.log(pattern, " Pattern is this");
  runs++;
  turtle();
}

function turtle() {
  resetMatrix();
  translate(width / 100, height / 1.5);
  background(230);
  for (let i = 0; i < pattern.length; i++) {
    var currentChar = pattern.charAt(i);
    if (currentChar === "F") {
      drawF();
    } else if (currentChar === "f") {
      drawf();
    } else if (currentChar === "+") {
      anglePositive();
    } else if (currentChar === "-") {
      angleNegative();
    } else if (currentChar === "[") {
      drawPush();
    } else if (currentChar === "]") {
      drawPop();
    }
  }
}

function drawF() {
  line(0, 0, 0, -F);
  translate(0, -F);
}

function drawf() {
  translate(-f, 0);
}

function angleNegative() {
  // -
  rotate(-angleNeg);
}

function anglePositive() {
  // +
  rotate(anglePos);
}

function drawPush() {
  // [
  push();
}

function drawPop() {
  // ]
  pop();
}

function mousePressed() {
  if (mouseX > -1 && mouseX < width + 1) {
    if (mouseY > -1 && mouseY < height + 1) {
      generate();
    }
  }
}
