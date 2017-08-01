$(document).ready(function(){

  // first we create the all setup in an object that will be modified in real time
  // once in the game

  var simonGame = {
    count: 0,
    colors: ['green','red', 'yellow', 'blue'],
    currentGame: [],
    playerColors: [],
    sound:{
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
    simonGame.playerColors = [];
  };

  function addCount() {
    simonGame.count = simonGame.count + 1;
    $('#screen').html(simonGame.count);
  };

  // animations function on the color

  function colorHover(color) {
    $('#' + color).removeClass(color);
    $('#' + color).addClass(color + "bright");
    setTimeout(function(){
      $('#' + color).removeClass(color + "bright");
      $('#' + color).addClass(color);
    }, 500);
  };


  // choosing a random color function

  function randomColor() {
    var result =  Math.floor(Math.random() * 4);
    if (result == 4) {
      randomColor();
    }
    else {
      return simonGame.colors[result];
    }
  };

  

  $('.start-reset').click(function(){
    colorHover(randomColor());
    console.log(randomColor());
  });


});
