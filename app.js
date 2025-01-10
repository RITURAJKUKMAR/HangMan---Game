let Fruit = [
    'APPLE', 'BANANA', 'MANGO', 'ORANGE', 'PINEAPPLE', 'BLUEBERRY', 'RASCKBERRY', 'RASPBARRY',
    'STRAWBERRY', 'GRAPES', 'WATERMELON', 'CANTALOUPE', 'KIWI', 'PEACH', 'PLUM', 'HONEYDEW',
    'CHERRY', 'PEAR', 'PAPAYA', 'POMEGRANATE', 'FIG', 'LYCHEE', 'DRAGONFRUIT', 'GRAVA',
    'COCONUT',
];

let Animal = [
    'LION', 'TIGER', 'ELEPHANT', 'ZEBRA', 'GIRAFFE', 'KANGAROO', 'PANDA', 'BEAR', 'WOLF', 'FOX',
    'DEER', 'MONKEY', 'RABBIT', 'SQUIRREL', 'CROCODILE', 'ALLIGATOR', 'SHARK', 'DOLPHIN', 'WHALE',
    'TURTLE', 'EAGLE', 'PARROT', 'PENGUIN', 'OSTRICH', 'HIPPOPOTAMUS',
];

let Food = [
    'PIZZA', 'BURGER', 'SANDWICH', 'PASTA', 'SPAGHETTI', 'NOODLES', 'RICE', 'BREAD', 'PANCAKE', 'OMELETTE',
    'SALAD', 'SOUP', 'SUSHI', 'TACOS', 'BURRITO', 'STEAK', 'CHICKEN', 'FISH', 'SHRIMP', 'CHEESE',
    'CAKE', 'COOKIE', 'MUFFIN', 'CHOCOLATE', 'CHICKEN',
];

let Nature = [
    'MOUNTAIN', 'RIVER', 'OCEAN', 'FOREST', 'DESERT', 'VALLEY', 'WATERFALL', 'HILL', 'LAKE', 'ISLAND',
    'BEACH', 'MEADOW', 'CAVE', 'CLIFF', 'VOLCANO', 'GLACIER', 'STREAM', 'POND', 'CANYON',
    'JUNGLE', 'BAY', 'SKY', 'SUN', 'MOON', 'STAR',
];

let StudyMaterial = [
    'TEXTBOOK', 'NOTEBOOK', 'WORKBOOK', 'PEN', 'PENCIL', 'ERASER', 'RULER', 'COMPASS', 'PROTRACTOR',
    'HIGHLIGHTER', 'MARKER', 'CALCULATOR', 'DICTIONARY', 'ENCYCLOPEDIA', 'ATLAS', 'FLASHCARDS', 'WHITEBOARD',
    'CHALKBOARD', 'LAPTOP', 'TABLET', 'DESK', 'CHAIR', 'BACKPACK', 'BINDER', 'REGISTER',
];

let List = [Fruit, Animal, Food, Nature, StudyMaterial];

let listNo = (Math.floor(Math.random() * 100) % List.length);
let wordList=List[listNo];

function NewWord(){
    switch(listNo){
        case 0:
            return 'Guess word : Fruit';
        case 1:
            return 'Guess word : Animal';
        case 2:
            return 'Guess word : Food';
        case 3:
            return 'Guess word : Nature';
        case 4:
            return 'Guess word : StudyMaterial';
    }
}
let n = (wordList[listNo]).length;
let guessLat = '';
let displayWord = document.querySelector(".display-word");
let lives = document.querySelector("#lives");
let currectOrNot = document.querySelector(".gues-letter");
let GuessWord = document.querySelector("#Guess-Word");

function chooseWord() {
    let num = (Math.floor(Math.random() * 100) % n);
    console.log(num);
    return wordList[num];
}

let currWord = chooseWord();
let num = currWord.length;
lives.innerText = num;
GuessWord.innerText=NewWord();
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
