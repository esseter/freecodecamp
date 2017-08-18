$(document).ready(function() {

  // first we create the all setup in an object that will be modified in real time
  // once in the game

  var simonGame = {
    count: 0,
    colors: ['green', 'red', 'yellow', 'blue'],
    currentGame: [],
    playerStreak: [],
    sound: {
      green: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
      red: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
      yellow: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'),
      blue: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3')
    },
    godlike: false,
  };

  // then we create the functions that will modify the object

  function startNewGame() {
    simonGame.count = 0;
    simonGame.currentGame = [];
    simonGame.playerStreak = [];
  };



  // animations function on the color

  function colorHover(color) {
    $('#' + color).removeClass(color);
    $('#' + color).addClass(color + "bright");
    setTimeout(function() {
      $('#' + color).removeClass(color + "bright");
      $('#' + color).addClass(color);
    }, 500);
  };


  // choosing a random color function

  function randomColor() {
    var result = Math.floor(Math.random() * 4);
    if (result == 4) {
      randomColor();
    } else {
      // we add the color within the current Game option
      simonGame.currentGame.push(simonGame.colors[result]);
      addCount();
      return simonGame.colors[result];
    }
  };

  // addcount function

  function addCount() {
    simonGame.count++;
    $('#number').html(simonGame.count);
  }

  function playComputerColor() {
    var i = 0;
    var max = simonGame.currentGame.length;
    setInterval(function() {
      colorHover(simonGame.currentGame[i]);
      i++;
      if (i >= max) {
        clearInterval(playComputerColor);
      }
    }, 1000)

  }

  function playerColor(colorClicked) {

    var x = simonGame.playerStreak[simonGame.playerStreak.length - 1];
    var y = simonGame.currentGame[simonGame.playerStreak.length - 1];
    if (simonGame.playerStreak.length <= simonGame.currentGame.length) {
      colorHover(colorClicked);
      if (colorClicked != y) {
        console.log(y);
        console.log('false');
        simonGame.playerStreak.splice(x, 1);
        return false;
      }
      else if (colorClicked == y){
        console.log('correct');
        if (simonGame.playerStreak.length === simonGame.currentGame.length) {
          randomColor();
          setTimeout(playComputerColor, 1000);
          simonGame.playerStreak = [];
        }
      }
    }
  }


  $('#red').click(function() {
    simonGame.playerStreak.push(simonGame.colors[1]);
    playerColor(simonGame.colors[1]);
  });

  $('#green').click(function() {
    simonGame.playerStreak.push(simonGame.colors[0]);
    playerColor(simonGame.colors[0]);

  });

  $('#yellow').click(function() {
    simonGame.playerStreak.push(simonGame.colors[2]);
    playerColor(simonGame.colors[2]);

  });

  $('#blue').click(function() {
    simonGame.playerStreak.push(simonGame.colors[3]);
    playerColor(simonGame.colors[3]);

  });

  $('.start-reset').click(function() {
    randomColor();
    setTimeout(playComputerColor, 1000);
  });

});
