// Pseudocode:
// on game start: 
    // shows Guess a letter!
    // shows random word with "_" as placeholders
// when the user clicks a button,
    // show what the user picked
    // show either CORRECT or INCORRECT
    // update the placeholders if that letter is in the word
    
var Letter = require("./Letter");
var Word = require("./Word");
var inquirer = require("inquirer");

var wordBank = ["awkward", "bagpipes", "banjo", "bungler", "croquet", "crypt", "dwarves", "fervid", "fishhook", "fjord", "gazebo", "gypsy", "haiku", "haphazard", "hyphen", "ivory", "jazzy", "jiffy", "jinx", "jukebox", "kayak", "kiosk", "klutz", "memento", "mystify", "numbskull", "ostracize", "oxygen", "pajama", "phlegm", "pixel", "polka", "quad", "quip", "rhythmic", "rogue", "sphinx", "squawk", "swivel", "toady", "twelfth", "unzip", "waxy", "wildebeest", "yacht", "zealous", "zigzag", "zippy", "zombie"];

// picks random word from wordBank
var secretWord = "bagpipes"; //wordBank[Math.floor(Math.random() * wordBank.length)];

inquirer.prompt([
    {
        type: "input",
        message: "Guess a letter!",
        name: "letterGuessed"
    }
]).then(function(inquirerResponse) {
    //console.log("This thing works");
    // created new word object with secretWord
    var word = new Word(secretWord);

    word.checkGuess(inquirerResponse.letterGuessed);
    console.log(word.toString());
});