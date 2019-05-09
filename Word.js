var Letter = require("./Letter");

function Word(word) {
    // an array of new Letter objects representing the letters of the underlying word
    this.array = [];
    // loop through word given
    for (var i = 0; i < word.length; i++) {
        // create Letter objects from each letter of the word given
        var letter = new Letter(word.charAt(i));
        // push this new letter object to the blank array
        this.array.push(letter);
    }
    // A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
    this.toString = function() {
        // start with blank string
        var result = "";
        // loop through letter objects in word array
        for (var i = 0; i < this.array.length; i++) {
            // saving each index in variable "letter"
            var letter = this.array[i];
            // uses Letter.js to print either "_" or guessed letter (if correct)
            result = result + letter.getCharacter();
        }
        return result;
    };

    // A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)
    this.checkGuess = function(guess) {
        // loop through letter object array
        for (var i = 0; i < this.array.length; i++) {
            // saving each index in variable "letter"
            var letter = this.array[i];
            // uses Letter.js to check if the guess is correct
            letter.checkGuess(guess);
        }
    };
};

module.exports = Word;