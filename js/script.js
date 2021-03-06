var wordScore = function(word) {
  var letterArr = word.split("");
  var total = 0
  for (var i=0; i<letterArr.length; i++) {
    total += letterScore(letterArr[i]);
  } 
  return total;
}

var letterScore = function(letter) {
  var letter = letter.toUpperCase();
  var scoreArrs = {
      score1Letters : ["A","E","I","O","U","L","N","R","S","T"],
      score2Letters :["D", "G"],
      score3Letters :["B","C","M","P"],
      score4Letters :["F", "H", "V", "W", "Y"],
      score5Letters :["K"],
      score8Letters :["J","X"],
      score10Letters: ["Q","Z"]  
  };
  

  if (scoreArrs.score1Letters.indexOf(letter) >=0) {
    return 1;
  } else if (scoreArrs.score2Letters.indexOf(letter) >=0){
    return 2; 
  } else if (scoreArrs.score3Letters.indexOf(letter) >=0) {
    return 3;
  } else if (scoreArrs.score4Letters.indexOf(letter) >=0) {
    return 4;
  } else if (scoreArrs.score5Letters.indexOf(letter) >=0) {
    return 5;
  } else if (scoreArrs.score8Letters.indexOf(letter) >=0) {
    return 8;
  } else if (scoreArrs.score10Letters.indexOf(letter) >=0) {
    return 10;
  }
};

  //Before Refactoring with .indexOf
  // for (var i = 0; i < score1Letters.length; i++) {
  //   if (letter === score1Letters[i]) {
  //     scoreLetter = 1;
  //   }else if (letter === score2Letters[i]) {
  //     scoreLetter = 2;
  //   }else if (letter === score3Letters[i]) {
  //     scoreLetter = 3;
  //   }else if (letter === score4Letters[i]) {
  //     scoreLetter = 4;
  //   }else if (letter === score5Letters[i]) {
  //     scoreLetter = 5;
  //   }else if (letter === score8Letters[i]) {
  //     scoreLetter = 8;
  //   }else if (letter === score10Letters[i]) {
  //     scoreLetter = 10;  
  //   }
  // };    


$(document).ready(function() {
  $('form#scrabble').submit(function(event) {

    var textInput = $('input#inputString').val();
    var result = wordScore(textInput);

    $('#result').text(result);
    this.reset();

    event.preventDefault();

  });
});
