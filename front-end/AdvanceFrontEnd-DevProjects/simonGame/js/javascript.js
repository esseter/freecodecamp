$(document).ready(function(){
  var game = {
    count: 0,
    possibilities: ['#green','#red', '#yellow', '#blue'],
    currentGame: [],
    player: [],
    sound:{
      green: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
      red: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
      yellow: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'),
      blue: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3')
    },
    godlike: false,
  }
});
