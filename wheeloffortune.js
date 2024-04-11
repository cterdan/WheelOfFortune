let guesses = 0;
let wordNum = Math.floor((Math.random()*9)+1);
let category;
switch(wordNum)
{
    case 1:
        word = "atari";
        category = "noun";
        break;
    case 2:
        word = "compute";
        category = "verb";
        break;
    case 3:
        word = "computer";
        category = "noun";
        break;
    case 4:
        word = "portable";
        category = "adjective";
        break;
    case 5:
        word = "apple";
        category = "noun";
        break;
    case 6:
        word = "unit";
        category = "noun";
        break;
    case 7:
        word = "java";
        category = "noun";
        break;
    case 8:
        word = "python";
        category = "noun";
        break;
    case 9:
        word = "transistor";
        category = "noun";
        break;
}
function start() {
    let name = prompt("What is your name?");
    document.getElementById('hint').innerHTML = "The word is a " + category;
    document.getElementById('welcome').innerHTML = name + " welcome to the Wheel Of Fortune! <br> The date and time is " + Date().toLocaleString();
}
function beginGame(){
    let newWord = "";
    let win = false;
    let length = word.length;
    let guessLetter;
    let goodGuess = false;
    for (let i = 0; i < length; i++)
        newWord = newWord + "_ ";
    document.getElementById("game").innerHTML = newWord;
    while (win == false && guesses < 10)
    {
        goodGuess = false;
        guessLetter = prompt(newWord + ". Guess a letter or the whole word: ");  // add "or the whole word" to prompt
        if (guessLetter.length === 1) {  // if the guess is a single letter
            for (let j = 0; j < length; j++) {
                if (guessLetter == word.charAt(j)) {
                    goodGuess = true;
                    let offSet = 2*j;
                    newWord = setCharAt(newWord, offSet, guessLetter);
                }
            }
        } else if (guessLetter.toLowerCase() === word.toLowerCase()) {  // if the guess is the entire word
            win = true;
        }
        document.getElementById("game").innerHTML = newWord;
        if (win == true)
        {
            document.getElementById("result").innerHTML = ("You win!");
        }
        else if (win == false)
        {
            document.getElementById("result").innerHTML = ("not a winner yet");
            if (goodGuess == false)
                guesses++;
        }
    }
}
function checkWord(word, otherWord)
{
    let cleanWord;
    cleanWord = otherWord;
    cleanWord = otherWord.replace(/ /g, "");
    if (word == cleanWord)
        return true;
    else
        return false;
}
function setCharAt(str,index,chr)
{
    if(index > str.length-1)
        return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}