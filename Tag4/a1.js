let axiom = "F";
let pattern = axiom;

let theRules = [];
//F
theRules[0] = ["[+]-f"];
//f
theRules[1] = ["F-+"];
//+
theRules[2] = ["-Ff++"];
//-
theRules[3] = ["[f+--ffF-+]"];
//[
theRules[4] = ["++ff"];
//]
theRules[5] = ["[F]"];

let anglePos;
let angleNeg;
let F = 20;
let f = 13;

function setup() {

    //tries drawing function on the top right corner but why ???
  createCanvas(500, 500);
  translate(width / 2, height);
  anglePos = radians(30);
  angleNeg = radians(40);
  stroke(50, 75);
  strokeWeight(1);
  background(230);

}

function draw() {
}

function generate() {
  // adds more strings based on the rules to the pattern string
  F *= 0.7;
  f *= 0.6;
  // You had to initialize it other wise its undefined + the new string
  let newPattern = "";

  for (let i = 0; i < pattern.length; i++) {
    let currentChar = pattern.charAt(i);
    console.log(currentChar, " Current Char");
    // Updates newPattern based on char Value
    if (currentChar === "F") {
      newPattern += theRules[0];
      console.log(newPattern, " This is the pattern value");
    } else if (currentChar === "f") {
      newPattern += theRules[1];
    } else if (currentChar === "+") {
      newPattern += theRules[2];
    } else if (currentChar === "-") {
      newPattern += theRules[3];
    } else if (currentChar === "[") {
      newPattern += theRules[4];
    } else if (currentChar === "]") {
      newPattern += theRules[5];
    }
  }

  pattern += newPattern;
  console.log(pattern, " Pattern is this");
  turtle();
}

function turtle() {
  for (let i = 0; i < pattern.length; i++) {
    var currentChar = pattern.charAt(i);
    if (currentChar === "F") {
      drawF();
    //   console.log("Tries drawing F");
    } else if (currentChar === "f") {
      drawf();
    //   console.log("Tries drawing f");
    } else if (currentChar === "+") {
      anglePositive();
    //   console.log("Tries drawing +");
    } else if (currentChar === "-") {
      angleNegative();
    //   console.log("Tries drawing -");
    } else if (currentChar === "[") {
      drawPush();
    //   console.log("Tries drawing [");
    } else if (currentChar === "]") {
      drawPop();
    //   console.log("Tries drawing ]");
    }
  }
}

function drawF() {
  line(0, 0, 0, -F);
  translate(0, -F);
//   console.log("Wafjasöfjaskfjasfdasjasöfaslfjsölf");
console.log("Tries drawing F");
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
  generate();
}
