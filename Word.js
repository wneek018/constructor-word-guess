var Letter = require("./Letter");

function Word(word) {
    // an array of new Letter objects representing the letters of the underlying word
    this.array = [];
    for (var i = 0; i < word.length; i++) {
        var letter = new Letter(word.charAt(i));
        this.array.push(letter);
    }
    // A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
    this.wordString = function() {
        var result = "";
        for (var i = 0; i < this.array.length; i++) {
            var letter = this.array[i];
            result = result + letter.getCharacter();
        }
        return result;
    };

    // A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)
    this.checkGuess = function(guess) {
        for (var i = 0; i < this.array.length; i++) {
            var letter = this.array[i];
            letter.checkGuess(guess);
        }
    };
};