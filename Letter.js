function Letter(character) {
    //A string value to store the underlying character for the letter
    this.character = character;
    //A boolean value that stores whether that letter has been guessed yet
    this.guessed = false;

     //A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
     this.getCharacter = function() {
        // if this.guessed is true
        if (this.guessed) {
            // print the character
            return this.character + " ";
        // if this.guessed is false
        } else {
            // print a placeholder
            return "_ ";
        }
    };

    //A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
    this.checkGuess = function(guess) {
        // if the key guessed matches this.character
        if (guess === this.character) {
            // set this.guessed to true
            this.guessed = true;
        }
    };
};

module.exports = Letter;