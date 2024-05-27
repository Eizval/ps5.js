let uniqueWords = [];
let textfile =
  "When forty winters\n shall besiege thy brow And dig deep trenches in thy\n beautys field Thy youths proud livery so gazed\n on now Will be a tattered weed of small worth held: Then being asked where all thy beauty lies\n Where all the treasure\n of thy lusty days; To say within thine own deep sunken eyes Were an alleating shame and thriftless praise.\n How much more praise deserved thy beauty's use, If thou couldst answer\n 'This fair child of mine Shall sum my count, and make my old excuse' Proving his beauty by succession thine. This were\n to be new made when thou art old, And see thy blood warm when thou\n feel'st it cold.";
let words = textfile.split(" ");

let arr2D = [];

let generatedText = "";

additionalText = "";
let output = "";
let wholeText = "";
genWord = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  makeUniqueArray();
  makeArrayInArray();
  noLoop();

  // console.log(words);
  // console.log(text)
}

function draw() {
  frameRate(5);

  if (wholeText != "") {
    splitedText = wholeText.split(" ");
    // print(splitedText);
    lastNumber = splitedText.length - 2;
    // print(lastNumber);
    lastWord = splitedText[lastNumber];
    // print(lastWord + " This string");
    for (i = 0; i < arr2D.length; i++) {
      if (arr2D[i][0] === lastWord) {
        innerLenght = arr2D[i].length;
        // print(" Inner lenght " + innerLenght);
        innerLenght = Math.ceil(innerLenght) - 1;
        // print(" Inner lenght " + innerLenght);
        nextWord = random(0, innerLenght);
        nextWord = Math.ceil(nextWord);
        nextWord === 0 ? (nextWord = 1) : (nextWord = nextWord);
        if(!nextWord) {
          nextWord = "";
        }
        // nextWord === undefined ? (nextWord = "") : (nextWord = nextWord);
        // print(" Inner Word " + nextWord);

        additionalText = arr2D[i][nextWord] + " ";
        wholeText += arr2D[i][nextWord] + " ";
      }
    }
  }
  addText(additionalText);
}

function makeUniqueArray() {
  //console.log(words.length);

  for (let i = 0; i < words.length; i++) {
    let isUsed = false;
    for (let arr = 0; arr < uniqueWords.length; arr++) {
      if (uniqueWords[arr] === words[i]) {
        isUsed = true;
        break;
      }
    }
    if (!isUsed) {
      uniqueWords.push(words[i]);
    }
  }
  make2DArrayUniqueWords();
}

function makeArrayInArray() {
  for (let i = 0; i < uniqueWords.length; i++) {
    for (let arr = 0; arr < words.length; arr++) {
      if (arr2D[i][0] === words[arr]) {
        //Doesnt do the last round through
        if (arr == words.length - 1) {
          break;
        } else {
          arr2D[i].push(words[arr + 1]);
        }
      }
    }
  }
  console.log(arr2D);
}

function make2DArrayUniqueWords() {
  for (let i = 0; i < uniqueWords.length; i++) {
    arr2D[i] = [uniqueWords[i]];
  }
}

function addText(givenText) {
  // print("Hello");
  clear();
  textSize(15);
  textAlign(CENTER);
  fill(255);
  // output = "";

  output += givenText;
  // print(output);

  test = givenText.split(" ");
  y = windowWidth - test.length * 90;
  x = windowWidth / 2;

  text(output, x, 30);
}

// function generateWords(bool) {
//   startNumber = random(0, arr2D.length);
//   startNumber = Math.ceil(startNumber)-1;
//   text = arr2D[startNumber][0];
// }

function mousePressed() {
  startNumber = random(0, arr2D.length);
  startNumber = Math.ceil(startNumber) - 1;
  wholeText = arr2D[startNumber][0] + " ";
  // print(wholeText + " This is whole text");
  isLooping() ? noLoop() : loop();
}
