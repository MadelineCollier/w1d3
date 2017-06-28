
var collection = {
  'Maddy': 80,
  'Hannah': 90,
}


var printScores = function(scoreList) {
  for (var key in scoreList) {
    var score = scoreList[key];
    console.log("student", key, "has", score);
  }
}

printScores(collection);



var collectionKeys = Obejct.keys(collection); // a method for generating an array with the collection objects respective keys as the parts of the array