const main = document.querySelector('main');
const box = main.querySelector('.box');
const keyboard = main.querySelector('.keyboard');

for (let i = 1; i < 7; i++) {
    const row = document.createElement('div');
    row.id = `_${i}`;
    for (let j = 0; j < 5; j++) {
        const h1 = document.createElement('h1');
        h1.innerHTML = " ";
        h1.id = `_${i}_${j+1}`;
        row.appendChild(h1);
    }
    box.appendChild(row);
}

const rows = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];
for (let i = 0; i < 3; i++) {
    const div = document.createElement('div');
    div.classList = "row";
    for (let j = 0; j < rows[i].length; j++) {
        const h3 = document.createElement('h3');
        h3.innerHTML = rows[i].slice(j, j+1);
        h3.id = rows[i].slice(j, j+1);
        div.appendChild(h3);
        keyboard.appendChild(div);
    }
}

let round = 1;
let slot = 1;
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let word = "SOUND";
let guess = "";
let won = false;

document.addEventListener("keydown", function (event) {
    if (round != 7 && !won) {
        let position = box.querySelector(`#_${round}_${slot}`);
        const key = event.key.toUpperCase();
        if (key != "BACKSPACE") {
            if (slot == 6 && key == "ENTER") {
                let count = 0;
                for (let i = 0; i < 5; i++) {
                    const tempPos = box.querySelector(`#_${round}_${i+1}`);
                    const keyBox = keyboard.querySelector(`#${guess.charAt(i)}`);
                    if (guess.charAt(i) == word.charAt(i)) {
                        keyBox.classList = "correct";
                        tempPos.classList = "correct";
                        count++;
                    } else if (word.includes(guess.slice(i, i+1))) {
                        if (keyBox.classList != "correct") {
                            keyBox.classList = "close";
                        }
                        tempPos.classList = "close";
                    } else {
                        keyBox.classList = "wrong";
                        tempPos.classList = "wrong";
                    }
                }
                if (count == 5) won=true;
                slot = 1;
                round++;
                guess="";
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
});
