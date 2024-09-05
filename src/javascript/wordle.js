import { generate, count } from "../../node_modules/random-words";

const main = document.querySelector("main");
const box = main.querySelector(".box");
const keyboard = main.querySelector(".keyboard");

for (let i = 1; i < 7; i++) {
  const row = document.createElement("div");
  row.id = `_${i}`;
  for (let j = 0; j < 5; j++) {
    const h1 = document.createElement("h1");
    h1.innerHTML = " ";
    h1.id = `_${i}_${j + 1}`;
    row.appendChild(h1);
  }
  box.appendChild(row);
}

const rows = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];
for (let i = 0; i < 3; i++) {
  const div = document.createElement("div");
  div.classList = "row";
  for (let j = -1; j < rows[i].length + 1; j++) {
    const button = document.createElement("button");
    let key = rows[i].slice(j, j + 1);
    if (i == 2 && j == -1) {
      key = "ENTER";
    } else if (i == 2 && j == rows[i].length) {
      key = "⌫";
    }
    if (i != 2 && (j == -1 || j == rows[i].length)) continue;
    button.innerHTML = key;
    button.addEventListener("click", () => clickEvent(key));
    button.id = key;
    if (button.id == "⌫") button.id = "BACKSPACE";
    div.appendChild(button);
    keyboard.appendChild(div);
  }
}

let round = 1;
let slot = 1;
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let word = "HEDGE";
let word = generate({ minLength: 5, maxLength: 5 }).toUpperCase();
console.log(word);
let guess = "";
let won = false;

function addKey(key) {
  if (round != 7 && !won) {
    let position = box.querySelector(`#_${round}_${slot}`);
    if (key != "BACKSPACE") {
      if (slot == 6 && key == "ENTER") {
        let count = 0;
        for (let i = 0; i < 5; i++) {
          const tempPos = box.querySelector(`#_${round}_${i + 1}`);
          const keyBox = keyboard.querySelector(`#${guess.charAt(i)}`);
          if (guess.charAt(i) == word.charAt(i)) {
            keyBox.classList = "correct";
            tempPos.classList = "correct";
            count++;
          } else if (word.includes(guess.slice(i, i + 1))) {
            if (keyBox.classList != "correct") {
              keyBox.classList = "close";
            }
            tempPos.classList = "close";
          } else {
            keyBox.classList = "wrong";
            tempPos.classList = "wrong";
          }
        }
        if (count == 5) won = true;
        slot = 1;
        round++;
        guess = "";
      }
      if (alphabet.includes(key)) {
        if (slot != 6) {
          position.innerHTML = key;

          guess += key;
          slot++;
        } else {
        }
      }
    } else {
      if (slot != 1) {
        slot--;
        position = box.querySelector(`#_${round}_${slot}`);
      }
      position.innerHTML = " ";
      guess = guess.slice(0, -1);
    }
  }
}

document.addEventListener("keydown", function (event) {
  const key = event.key.toUpperCase();
  addKey(key);
});

function clickEvent(key) {
  if (key == "⌫") key = "BACKSPACE";
  addKey(key);
  const keyBox = keyboard.querySelector(`#${key}`);
  keyBox.blur();
}
