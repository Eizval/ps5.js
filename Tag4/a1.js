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
let radioValue;

function setup() {
  // factorF = 0.7;
  // factorf = 0.6;
  //tries drawing function on the top right corner but why ???
  canvas = createCanvas(windowWidth * 0.4, windowHeight * 0.55);
  myRadio = createRadio();
  myRadio.position(windowWidth * 0.8, windowHeight * 0.13);
  // myRadio.style(windowWidth * 0.8, "100px");
  // canvas.mouseClicked(generate());
  sliderAnglePos = createSlider(0, 360, 90, 1);
  sliderAngleNeg = createSlider(0, 360, 90, 1);
  sliderSmallf = createSlider(0, 50, 13, 1);
  sliderBigf = createSlider(0, 50, 20, 1);
  sliderfactorF = createSlider(0.01, 1, 1, 0.01);
  sliderfactorf = createSlider(0.01, 1, 1, 0.01);

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
  translate(width / 2, height);
  anglePos = radians(sliderAnglePos.value());
  angleNeg = radians(sliderAngleNeg.value());
  F = sliderBigf.value();
  f = sliderSmallf.value();
  factorF = sliderfactorF.value();
  factorf = sliderfactorf.value();
  redrawText();
  drawCurrentRuleSet();
  // onButtonPressed();
  radioValue = myRadio.value();

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
    } else {
      newPattern += currentChar;
    } //else if (currentChar === "+") {
    //   newPattern += theRules[2];
    // } else if (currentChar === "-") {
    //   newPattern += theRules[3];
    // } else if (currentChar === "[") {
    //   newPattern += theRules[4];
    // } else if (currentChar === "]") {
    //   newPattern += theRules[5];
    // }
  }

  pattern = newPattern;
  // console.log(pattern, " Pattern is this");
  runs++;
  turtle();
}

function turtle() {
  resetMatrix();
  translate(width / 2, height);
  background(230);
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
  myRadio.option("0", 0);
  myRadio.option("1", 1);
  myRadio.option("2", 2);

  let rule = createElement("p", "Rule 0 = 'F' Rule 1 = 'f' Rule 3 = 'axiom'");
}

function drawCurrentRuleSet() {
  let radioValue = myRadio.value();
  if (radioValue < 3 && radioValue > -1) {
    if(radioValue == 2){
      print(pattern);
      currentRule.remove();
      currentRule = createElement("p", pattern).position(
        windowWidth * 0.8,
        windowHeight * 0.17
      );
    } else {
      currentRule.remove();
      currentRule = createElement("p", theRules[radioValue]).position(
        windowWidth * 0.8,
        windowHeight * 0.17
      );
    }
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
  // let radioValue = myRadio.value();
  // // for(let i = 0; i < defaultRules.length; i++){
  // //   theRules[radioValue] += defaultRules[i];
  // // }

  // pressed = false;
  // pressed1 = false;
  // pressed2 = false;
  // pressed3 = false;
  // pressed4 = false;
  // pressed5 = false;

  // buttonF.mousePressed((theRules[radioValue] += defaultRules[0]));
  // if (pressed) {
  //   if(radioValue == 2){
  //     pattern += defaultRules[0]
  //   } else {
  //     theRules[radioValue] += defaultRules[0];
  //   }
  // }
  // buttonf.mousePressed((theRules[radioValue] += defaultRules[1]));
  // if (pressed1) {
  //   if(radioValue == 2){
  //     pattern += defaultRules[1]
  //   } else {
  //   theRules[radioValue] += defaultRules[1];
  //   }
  // }
  // buttonPos.mousePressed(() => (pressed2 = true));
  // if (pressed2) {
  //   if(radioValue == 2){
  //     pattern += defaultRules[2]
  //   } else {
  //   theRules[radioValue] += defaultRules[2];
  //   }
  // }
  // buttonNeg.mousePressed(() => (pressed3 = true));
  // if (pressed3) {
  //   if(radioValue == 2){
  //     pattern += defaultRules[3]
  //   } else {
  //   theRules[radioValue] += defaultRules[3];
  //   }
  // }
  // buttonPop.mousePressed(() => (pressed4 = true));
  // if (pressed4) {
  //   if(radioValue == 2){
  //     pattern += defaultRules[4]
  //   } else {
  //   theRules[radioValue] += defaultRules[4];
  //   }
  // }
  // buttonPush.mousePressed(() => (pressed5 = true));
  // if (pressed5) {
  //   if(radioValue == 2){
  //     pattern += defaultRules[5]
  //   } else {
  //   theRules[radioValue] += defaultRules[5];
  //   }
  //   // print(theRules[radioValue]);
  // }
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
  // let
  // for(let i = 0; i < theRules.length; i++){

  // }
  if(radioValue == 2) {
    pattern += defaultRules[0];
  } else {
    theRules[radioValue] += defaultRules[0];
  }
}

function buttonfPressed() {
  if(radioValue == 2) {
    pattern += defaultRules[1];
  } else {
    theRules[radioValue] += defaultRules[1];
  }
}

function buttonPosPressed() {
  if(radioValue == 2) {
    pattern += defaultRules[2];
  } else {
    theRules[radioValue] += defaultRules[2];
  }
}

function buttonNegPressed() {
  if(radioValue == 2) {
    pattern += defaultRules[3];
  } else {
    theRules[radioValue] += defaultRules[3];
  }
}

function buttonPopPressed() {
  if(radioValue == 2) {
    pattern += defaultRules[4];
  } else {
    theRules[radioValue] += defaultRules[4];
  }
}

function buttonPushPressed() {
  if(radioValue == 2) {
    pattern += defaultRules[5];
  } else {
    theRules[radioValue] += defaultRules[5];
  }
}

function resetRuleSet() {
  if(radioValue == 2) {
    pattern = "";
  } else {
    theRules[radioValue] = "";
  }
}
