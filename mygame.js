var randomNumber=Math.floor((Math.random()*101));
// console.log(randomNumber);
var guesses =document.querySelector('.guesses');
Console.log('guesses');
var lastResult =document.querySelector('lastResult');
var lowOrHi = document.querySelector('.lowOrHi');
var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');
Console.log('guessField');
var guesses=1;
var reseButton;
guessField.focus();

function checkGuess()
{
    guesses.innerHTML=guessField.Value;
}
