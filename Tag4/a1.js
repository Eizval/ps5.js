let axiom = "F";
let pattern = axiom;
let canvas;
let runs = 0;

let theRules = [];
//F
theRules[0] = ["+]-fF"];
//f
theRules[1] = ["F-+F"];
//+
theRules[2] = ["-FF+"];
//-
theRules[3] = ["[fFF-+]"];
//[
theRules[4] = ["ffF"];
//]
theRules[5] = ["F]"];

let anglePos;
let angleNeg;
let F = 50;
let f = 13;

let sliderAnglePos;
let sliderAngleNeg;
let sliderSmallf;
let sliderBigf;
let sliderfactorF;
let sliderfactorf;

let textPos;
let textNeg;
let textf;
let textF;
let factorF;
let factorf;
let textfactor;
let textFactorF;
let textFactorf;

let rule0Text;
let rule1Text;
let rule2Text;
let rule3Text;
let rule4Text;
let rule5Text;

let myRadio;
let currentRule = 0;
let ruleSets = [];
let defaultRules = [];

let buttonF;
let buttonf;
let buttonPos;
let buttonNeg;
let buttonPop;
let buttonPush;

defaultRules[0] = ["F"];
defaultRules[1] = ["f"];
defaultRules[2] = ["+"];
defaultRules[3] = ["-"];
defaultRules[4] = ["["];
defaultRules[5] = ["]"];

let distanceSlider = 150;
let distanceText = 100;

function setup() {
  factorF = 0.7;
  factorf = 0.6;
  //tries drawing function on the top right corner but why ???
  canvas = createCanvas(500, 500);
  myRadio = createRadio();
  myRadio.position(windowWidth * 0.8, windowHeight * 0.13);
  // myRadio.style(windowWidth * 0.8, "100px");
  // canvas.mouseClicked(generate());
  sliderAnglePos = createSlider(0, 360, 50, 1);
  sliderAngleNeg = createSlider(0, 360, 13, 1);
  sliderSmallf = createSlider(0, 50, 13, 1);
  sliderBigf = createSlider(0, 50, 50, 1);
  sliderfactorF = createSlider(0.01, 1, 0.5, 0.01);
  sliderfactorf = createSlider(0.01, 1, 0.5, 0.01);

  currentRule = createElement("p", "Nothing Selected").position(
    windowWidth * 0.8,
    windowHeight * 0.17
  );

  let axiomTag = createElement("p", "The start is: " + axiom).position(
    windowWidth * 0.47,
    windowHeight * 0.93
  );

  let reset = createButton("Reset Screen");
  reset.position(windowWidth * 0.47, windowHeight * 0.88);
  reset.mousePressed(clearScreen);

  let resetRule = createButton("Reset Ruleset");
  resetRule.position(windowWidth * 0.8, windowHeight * 0.75);
  resetRule.mousePressed(resetRuleSet);

  createButtons();
  createRulesText();
  createText();
  updateSliderPosition();
  // text("Positive angle", distanceSlider, (distanceSlider + distanceText));
  // text("Positive angle", 100,100);

  // anglePos = radians(58);
  // angleNeg = radians(30);
  stroke(50, 75);
  strokeWeight(1);
  background(230);
}

function draw() {
  // translate(width / 2, height);
  translate(width / 2, height / 1.5);
  anglePos = sliderAnglePos.value();
  angleNeg = sliderAngleNeg.value();
  F = sliderBigf.value();
  f = sliderSmallf.value();
  factorF = sliderfactorF.value();
  factorf = sliderfactorf.value();
  redrawText();
  drawCurrentRuleSet();
  // onButtonPressed();

  // let radioValue = myRadio.value();
  buttonF.mousePressed(buttonFPressed);
  buttonf.mousePressed(buttonfPressed);
  buttonPos.mousePressed(buttonPosPressed);
  buttonNeg.mousePressed(buttonNegPressed);
  buttonPop.mousePressed(buttonPopPressed);
  buttonPush.mousePressed(buttonPushPressed);
}

function generate() {
  if (runs > 4) {
    return;
  }
  // adds more strings based on the rules to the pattern string
  F *= factorF;
  f *= factorf;
  // You had to initialize it other wise its undefined + the new string
  let newPattern = "";

  for (let i = 0; i < pattern.length; i++) {
    let currentChar = pattern.charAt(i);
    // console.log(currentChar, " Current Char");
    // Updates newPattern based on char Value
    if (currentChar === "F") {
      newPattern += theRules[0];
      // console.log(newPattern, " This is the pattern value");
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
  // console.log(pattern, " Pattern is this");
  runs++;
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
  // console.log("Tries drawing F");
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

function updateSliderPosition() {
  stroke(0);
  fill(0);
  textSize(25);
  if (windowWidth < 1100) {
    sliderAnglePos.position(windowWidth * 0.1, windowHeight * 0.6);
    textPos.position(windowWidth * 0.1, windowHeight * 0.63);

    sliderAngleNeg.position(windowWidth * 0.1, windowHeight * 0.7);
    textNeg.position(windowWidth * 0.1, windowHeight * 0.73);

    sliderSmallf.position(windowWidth * 0.1, windowHeight * 0.8);
    textf.position(windowWidth * 0.1, windowHeight * 0.83);

    sliderBigf.position(windowWidth * 0.1, windowHeight * 0.9);
    textF.position(windowWidth * 0.1, windowHeight * 0.93);
    // print(windowWidth)

    sliderfactorF.position(windowWidth * 0.02, windowHeight * 1);
    textFactorF.position(windowWidth * 0.05, windowHeight * 1.03);

    sliderfactorf.position(windowWidth * 0.15, windowHeight * 1);
    textFactorf.position(windowWidth * 0.15, windowHeight * 1.03);
  } else {
    sliderAnglePos.position(windowWidth * 0.1, windowHeight * 0.1);
    textPos.position(windowWidth * 0.1, windowHeight * 0.13);

    sliderAngleNeg.position(windowWidth * 0.1, windowHeight * 0.2);
    textNeg.position(windowWidth * 0.1, windowHeight * 0.23);

    sliderSmallf.position(windowWidth * 0.1, windowHeight * 0.3);
    textf.position(windowWidth * 0.1, windowHeight * 0.33);

    sliderBigf.position(windowWidth * 0.1, windowHeight * 0.4);
    textF.position(windowWidth * 0.1, windowHeight * 0.43);

    sliderfactorF.position(windowWidth * 0.02, windowHeight * 0.5);
    textFactorF.position(windowWidth * 0.05, windowHeight * 0.53);

    sliderfactorf.position(windowWidth * 0.15, windowHeight * 0.5);
    textFactorf.position(windowWidth * 0.15, windowHeight * 0.53);

    textfactor.position(windowWidth * 0.05, windowHeight * 0.59);
  }
}

function redrawText() {
  textPos.remove();
  textPos = createElement(
    "p",
    "Positive angle (+) value: " + sliderAnglePos.value()
  );
  textNeg.remove();
  textNeg = createElement(
    "p",
    "Negative angle (-) value: " + sliderAngleNeg.value()
  );
  textf.remove();
  textf = createElement(
    "p",
    "Lenght of not drawn line (f) value: " + sliderSmallf.value()
  );
  textF.remove();
  textF = createElement(
    "p",
    "Lenght of drawn line (F) value: " + sliderBigf.value()
  );
  textFactorF.remove();
  textFactorF = createElement(
    "p",
    "Factor of F value: " + sliderfactorF.value()
  );
  textFactorf.remove();
  textFactorf = createElement(
    "p",
    "Factor of f value: " + sliderfactorf.value()
  );
  textfactor.remove();
  textfactor = createElement(
    "p",
    "Factor of the lengh of line, factor < 1 will always get smaller"
  );
  updateSliderPosition();
}

function createText() {
  textPos = createElement(
    "p",
    "Positive angle (+) value: " + sliderAnglePos.value()
  );
  textNeg = createElement(
    "p",
    "Negative angle (-) value: " + sliderAngleNeg.value()
  );
  textf = createElement(
    "p",
    "Lenght of not drawn line (F) value: " + sliderSmallf.value()
  );
  textF = createElement(
    "p",
    "Lenght of drawn line (F) value: " + sliderBigf.value()
  );
  textFactorF = createElement(
    "p",
    "Factor of F value: " + sliderfactorF.value()
  );
  textFactorf = createElement(
    "p",
    "Factor of f value: " + sliderfactorf.value()
  );
  textfactor = createElement(
    "p",
    "Factor of the lengh of line, factor < 1 will always get smaller"
  );
}

function createRulesText() {
  // for (let i = 0; i < theRules.length; i++) {
  //   ruleSets = createElement("p", "Ruleset " + i + ": " + theRules[i]).position(windowWidth * 0.8, windowHeight * (i / 10 + 0.1));
  // }

  // rule0Text = createElement("p", "Ruleset " + 0 + ": " + theRules[0]).position(
  //   windowWidth * 0.8,
  //   windowHeight * 0.1
  // );
  // rule1Text = createElement("p", "Ruleset " + 1 + ": " + theRules[1]).position(
  //   windowWidth * 0.8,
  //   windowHeight * 0.15
  // );

  // // myRadio.style(windowWidth * 0.8, '200px')
  // rule2Text = createElement("p", "Ruleset " + 2 + ": " + theRules[2]).position(
  //   windowWidth * 0.8,
  //   windowHeight * 0.2
  // );
  // rule3Text = createElement("p", "Ruleset " + 3 + ": " + theRules[3]).position(
  //   windowWidth * 0.8,
  //   windowHeight * 0.25
  // );
  // rule4Text = createElement("p", "Ruleset " + 4 + ": " + theRules[4]).position(
  //   windowWidth * 0.8,
  //   windowHeight * 0.3
  // );
  // rule5Text = createElement("p", "Ruleset " + 5 + ": " + theRules[5]).position(
  //   windowWidth * 0.8,
  //   windowHeight * 0.35
  // );
  myRadio.option("0", 0);
  myRadio.option("1", 1);
  myRadio.option("2", 2);
  myRadio.option("3", 3);
  myRadio.option("4", 4);
  myRadio.option("5", 5);

  let rule = createElement(
    "p",
    "Rule 0 = 'F' Rule 1 = 'f' Rule 2 = '+' Rule 3 = '-' Rule 4 = '[' Rule 5 = ']'"
  );
}

function drawCurrentRuleSet() {
  let radioValue = myRadio.value();
  if (radioValue < 6 && radioValue > -1) {
    currentRule.remove();
    currentRule = createElement("p", theRules[radioValue]).position(
      windowWidth * 0.8,
      windowHeight * 0.17
    );
  }
}

function createButtons() {
  // for(let i = 0; i < defaultRules.length; i++){
  //   createButton(defaultRules[i]).position(windowWidth * (i / 50 + 0.8), windowHeight * 0.5);
  // }
  buttonF = createButton(defaultRules[0]).position(
    windowWidth * 0.8,
    windowHeight * 0.5
  );
  buttonf = createButton(defaultRules[1]).position(
    windowWidth * 0.82,
    windowHeight * 0.5
  );
  buttonPos = createButton(defaultRules[2]).position(
    windowWidth * 0.84,
    windowHeight * 0.5
  );
  buttonNeg = createButton(defaultRules[3]).position(
    windowWidth * 0.86,
    windowHeight * 0.5
  );
  buttonPop = createButton(defaultRules[4]).position(
    windowWidth * 0.88,
    windowHeight * 0.5
  );
  buttonPush = createButton(defaultRules[5]).position(
    windowWidth * 0.9,
    windowHeight * 0.5
  );
}

function onButtonPressed() {
  let radioValue = myRadio.value();
  // for(let i = 0; i < defaultRules.length; i++){
  //   theRules[radioValue] += defaultRules[i];
  // }

  pressed = false;
  pressed1 = false;
  pressed2 = false;
  pressed3 = false;
  pressed4 = false;
  pressed5 = false;

  // buttonF.mousePressed(theRules[radioValue] += defaultRules[0]);
  // if (pressed) {
  //   theRules[radioValue] += defaultRules[0];
  // }
  // buttonf.mousePressed( theRules[radioValue] += defaultRules[1]);
  // if (pressed1) {
  //   theRules[radioValue] += defaultRules[1];
  // }
  buttonPos.mousePressed(() => (pressed2 = true));
  if (pressed2) {
    theRules[radioValue] += defaultRules[2];
  }
  buttonNeg.mousePressed(() => (pressed3 = true));
  if (pressed3) {
    theRules[radioValue] += defaultRules[3];
  }
  buttonPop.mousePressed(() => (pressed4 = true));
  if (pressed4) {
    theRules[radioValue] += defaultRules[4];
  }
  buttonPush.mousePressed(() => (pressed5 = true));
  if (pressed5) {
    theRules[radioValue] += defaultRules[5];
    print(theRules[radioValue]);
  }
}

function windowResized() {
  // console.log("window got rezized to x: "+ windowWidth + ", y: " + windowHeight)
  updateSliderPosition();
}

function clearScreen() {
  clear();
  background(230);
  runs = 0;
  pattern = axiom;
}

function buttonFPressed() {
  let radioValue = myRadio.value();
  // let
  // for(let i = 0; i < theRules.length; i++){

  // }
  theRules[radioValue] += defaultRules[0];
}

function buttonfPressed() {
  let radioValue = myRadio.value();
  theRules[radioValue] += defaultRules[1];
}

function buttonPosPressed() {
  let radioValue = myRadio.value();
  theRules[radioValue] += defaultRules[2];
}

function buttonNegPressed() {
  let radioValue = myRadio.value();
  theRules[radioValue] += defaultRules[3];
}

function buttonPopPressed() {
  let radioValue = myRadio.value();
  theRules[radioValue] += defaultRules[4];
}

function buttonPushPressed() {
  let radioValue = myRadio.value();
  theRules[radioValue] += defaultRules[5];
}

function resetRuleSet() {
  let radioValue = myRadio.value();
  theRules[radioValue] = "";
}
