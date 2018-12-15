// if youre reading this that means you are grading this, im gonna be honest there's a lot of google fu involed in this one, i am extremely lost on this
// so that being said im turning this in but im going to spend an insane ammout of time rebuilding this from scratch, hopefully it helps

// this is all the letters the computer can choose from randomly
var letterOptions = [
"a","b","c","d","e","f","g","h","i","j","k","l","m",
"n","o","p","q","r","s","t","u","v","w","x","y","z"];

// this selects a random letter from the options above for the computers choice 
var updateLetterToGuess = function() {
  this.letterToGuess = this.letterOptions[Math.floor(Math.random() * this.letterOptions.length)];};

// this will set the starting conditions for the game 
var wins = 0;
var losses = 0;
var guesses = 11;
var guessesLeft = 11;
var guessedLetters = [];
var letterToGuess;
updateLetterToGuess();

// updates the guesses so far in html
 var updateGuessesLeft = function() {
    document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;};

// saves and displays user key strokes on html
var updateGuessesSoFar = function() {
    document.querySelector('#guessedLetters').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');};

// resets game state back to original
var reset = function() {
  totalGuesses = 11;
  guessesLeft = 11;
  guessedLetters = [];

// after each event this updates the information
  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();}

// recognizes and stores keystrokes, enters keystroke onscreen and removes user error with shift or caps lock
document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    guessesLeft--;
 
// keeps track of the letters guessed and updates the guesses left and guesses so far
  guessedLetters.push(userGuess);
  updateGuessesLeft();
  updateGuessesSoFar();

// sets the condition for a win
        if (guessesLeft > 0){
            if (userGuess == letterToGuess){
                wins++
                document.querySelector('#Wins').innerHTML = "Wins: " + wins;
                alert("Congratulations!!! Now you're a master coder, the code was " + letterToGuess);
                reset();}

// sets the condition for a loss
        }else if(guessesLeft == 0){ 
            losses++;
            document.querySelector('#Losses').innerHTML = "Losses: " + losses;
            alert("You failed, the code was " + letterToGuess); 
            reset();
        }
};
