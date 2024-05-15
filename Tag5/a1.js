let uniqueWords = [];
let textfile = "TEST WITH TEST NOT THE WITH TEST";
let words = textfile.split(" ");

let arr2D = [];

function setup() {
  makeUniqueArray();
  makeArrayInArray();
  // console.log(words);
  // console.log(text)
}

function draw() {}

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
