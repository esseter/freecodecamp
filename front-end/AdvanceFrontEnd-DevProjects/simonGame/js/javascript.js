$(document).ready(function(){

  // first we create the all setup in an object that will be modified in real time
  // once in the game

  var simonGame = {
    count: 0,
    colors: ['#green','#red', '#yellow', '#blue'],
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

  function colorHover(color) {
    $('#' + color).removeClass(color);
    $('#' + color).addClass(color + "hover");
    setTimeout(function(){
      $('#' + color).removeClass(color + "hover");
      $('#' + color).addClass(color);
    }, 500);
  };

  $('.start-reset').click(function(){

    colorHover('red')
    console.log(simonGame.colors[1]);
  })

});
