// function countLetters takes in a string
// maybe you should then cut out all the spaces just so you dont have to worry about them later
// then itterate through the big chunk of text character by character
// see if each character exists already in our "result" object
// if yes, dont add a new key, but do add one to the value number count for that specific letter
// if no, add a new key, and start the value at 1
// finally, print out the "result object"
// what to do with return? idk figure out whether to print or return later


var givenString = process.argv.slice(2).join('').toLowerCase().split("");

var countLetters = function (input) {
  var letterCount = {};

  input.forEach(function(letter) {
    if (letterCount[letter] === undefined) letterCount[letter] = 0;
    letterCount[letter] += 1;
  });

  return letterCount;
}

console.log(countLetters(givenString));