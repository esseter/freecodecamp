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
    mistake: 0,
    godlike: false,
  };

  // then we create the functions that will modify the object

  function startNewGame() {
    simonGame.count = 0;
    simonGame.currentGame = [];
    simonGame.playerStreak = [];
    $('#number').html(simonGame.count);
  };

  function godlike() {
    var isGodlikeChecked = $('#godlike').prop('checked');
    if (isGodlikeChecked === true) {
      simonGame.godlike = true;
    }
    else {
      simonGame = false;
    }
  }

  // animations function on the color

  function colorHover(color) {
    $('#' + color).removeClass(color);
    $('#' + color).addClass(color + "bright");
    setTimeout(function() {
      simonGame.sound[color].play();
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
      setTimeout(addCount, 1000);
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
    $('.start-reset').html('wait');
    var max = simonGame.currentGame.length;
    setInterval(function() {
      colorHover(simonGame.currentGame[i]);
      i++;
      if (i >= max) {

        clearInterval(playComputerColor);

      }
    }, 1000)
    setTimeout($('.start-reset').html('GO'))
  };

  function playerColor(colorClicked) {


    var x = simonGame.playerStreak[simonGame.playerStreak.length - 1];
    var y = simonGame.currentGame[simonGame.playerStreak.length - 1];
    if (simonGame.playerStreak.length <= simonGame.currentGame.length) {
      colorHover(colorClicked);
      if (x != y) {
        console.log('false');
        simonGame.mistake++;
        godlike();
        if (simonGame.mistake >= 3 && simonGame.godlike == false) {
          alert('you looser');
          startNewGame();
        }
        else if (simonGame.mistake > 0 && simonGame.godlike == true) {
          alert('you lost, try a new game. You are still far from being a Simon God');
          startNewGame();
        }

        else {
          alert('you have ' + (3 - simonGame.mistake) + 'left !');
          simonGame.playerStreak.splice(x, 1);
        }

      }
      else if (x == y){
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
    godlike();
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
    if (simonGame.count == 0) {
      randomColor();
      setTimeout(playComputerColor, 1000);
    }

  });

});
