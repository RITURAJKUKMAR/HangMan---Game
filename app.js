let wordList = [
    'HAPPY', 'MANGO', 'CAT', 'DOG', 'SUN', 'HAT', 'BALL',
    'CUP', 'TREE', 'STAR', 'FISH', 'BOOK', 'CAR', 'HOUSE', 'APPLE', 'HAND',
    'ANIMAL', 'BANANA', 'CANDLE', 'ORANGE', 'PILLOW', 'WINDOW', 'BICYLE', 'BALLOON',
    'MYSTERY', 'RAILWAY', 'THUNDER', 'TREASURE', 'UMBRELLA', 'WATERFALL',
    'ADVENTURE', 'TUNNEL', 'LANTERN', 'CHICHEN', 'DIAMOND', 'RAINBOW',
]

let n = wordList.length;
let guessLat = '';
let displayWord = document.querySelector(".display-word");
let lives = document.querySelector("#lives");
let currectOrNot = document.querySelector(".gues-letter");

function chooseWord() {
    let num = (Math.floor(Math.random() * 100) % 36);
    console.log(num);
    return wordList[num];
}

let currWord = chooseWord();
let num = currWord.length;
lives.innerText = num;
let life = num;

function display() {
    console.log(currWord);
    for (let i = 0; i < num; i++) {
        // console.log(i);
        let span = document.createElement("span");
        span.className = 'space';
        displayWord.appendChild(span);
    }
}
display();

let spaces = document.querySelectorAll(".space");
function checkLetter() {
    let k = 0;
    for (let i = 0; i < num; i++) {
        if (guessLat == currWord[i]) {
            k = 1;
            spaces[i].innerText = guessLat;
        }
    }
    if (!k) {
        life--;
        lives.innerText = life;
        currectOrNot.style.display = 'block';
        currectOrNot.innerText = 'Incorrect Guess!';
    }
    else {
        currectOrNot.style.display = 'block';
        currectOrNot.innerText = 'Correct Guess!';
    }
}

function guessLatter() {
    let letter = document.querySelector("input");
    guessLat = letter.value.toUpperCase();
    // console.log(guessLat);
    letter.value = '';
    checkLetter();
    if (!life) {
        loss();
    }
    else {
        let k = 0;
        for (let i = 0; i < num; i++) {
            if (spaces[i].innerText == '') {
                k = 0;
                break;
            }
            else
                k = 1;
        }
        if (k)
            win();
    }
    return false;
}

function loss() {
    // console.log("loss");
    let div = document.querySelector(".game");
    div.innerHTML = `<p><b> Welcome to HangMan! </b></p>
                <div class="sms input-char">
                    <p><b>You lost ! <br>better luck next time.</b></p>
                </div>
                <div class="ans">
                    <p id="ans"><b>The word was : ${currWord}</b></p>
                </div>
                <a href="index.html"><button class="btn" >NEW GAME</button></a>`;
}

function win() {
    // console.log("win");
    let div = document.querySelector(".game");
    div.innerHTML = `<p><b> Welcome to HangMan! </b></p>
                <div class="sms input-char">
                <p><b>Congratulation you won the game! 🎉</b></p>
                </div>
                <div class="ans">
                    <p id="ans"><b>The word was : ${currWord}</b></p>
                </div>
                <a href="index.html"><button class="btn" >NEW GAME</button></a>`;
}
