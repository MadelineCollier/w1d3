// this time we need to return the indices or index numbers for each letter,
// so if a letter "k" shows up in the first and fifth place
// such as in "kayak",  we want our return to be
// {k: 0, 4}


// var givenString = process.argv.slice(2).toLowerCase().split("");

var givenString = "lighthouse in the house".toLowerCase();


function countLetters(input) {
  var letterIndices = {};

  for (var i = 0; i < input.length; i++) {
    var letter = input[i];
    if (letter === ' ') continue;
    if (letterIndices[letter] === undefined) letterIndices[letter] = [];
    letterIndices[letter].push(i);
  }
  return letterIndices;
}

console.log(countLetters(givenString));

