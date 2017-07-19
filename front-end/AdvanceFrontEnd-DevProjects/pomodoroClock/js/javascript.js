$(document).ready(function(){
  var rest = 5;
  var minutes = 30;
  var audio= new Audio('https://www.soundjay.com/clock/sounds/crank-1.mp3');
  var title = document.title;


  $('#minusRound').click(function(){
    if (rest != 0) {
      rest = rest - 1;
      $('#nbRounds').html(rest);
    }
  });

  $('#plusRound').click(function(){
    rest = rest + 1;
    $('#nbRounds').html(rest);
    console.log(rest);
  });

  $('#minusMinute').click(function() {
    if (minutes != 0) {
      minutes = minutes - 1;
      $('#nbMinutes').html(minutes);
      $('#minutes').html(minutes)
    }
  });

  $('#plusMinute').click(function(){
    minutes = minutes + 1;
    $('#nbMinutes').html(minutes);
    $('#minutes').html(minutes)
  });


  $('#work-button').click(function(){
    $('#rest-button').css({'background': "white", 'top': '0px'});
    var now = new Date().getTime();
    var end = now + minutes * 1000 * 60; // translaste final date to milliseconds
    document.title = "The work session is on going";
    var x = setInterval(function(){
      var newNow = new Date().getTime(); // lol
      var difference = end - newNow;
      var minutesLeft = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60));
      var secondsLeft = Math.floor(difference % (1000 * 60) / (1000));
      $('#work-button').css({'background': "black", 'top': '4px'});
      $('#minutes').html(minutesLeft);
      if (secondsLeft < 10) {
        $('#seconds').html('0' + secondsLeft);
      }
      else {
        $('#seconds').html(secondsLeft);
      }

      if (difference <= 0) {
        clearInterval(x);
        document.title = "The work session is over";
      }
      else if (difference <= 3000) {
        audio.play();
      }
      $('#work-button').click(function() {
        clearInterval(x);
      })
      $('#rest-button').click(function() {
        clearInterval(x);
      })
    });
  });

  $('#rest-button').click(function(){
    $('#work-button').css({'background': "white", 'top': '0px'});
    var now = new Date().getTime();
    var end = now + rest * 1000 * 60; // translate final date to milliseconds
    document.title = "The rest session is on going";

    var x = setInterval(function(){
      var newNow = new Date().getTime();
      var difference = end - newNow;
      var minutesLeft = Math.floor(difference % ( 1000 * 60 * 60) / (1000 * 60));
      var secondsLeft = Math.floor(difference % ( 1000 * 60) / (1000));
      $('#rest-button').css({'background': "black", 'top': '4px'});
      $('#minutes').html(minutesLeft);
      if (secondsLeft < 10) {
        $('#seconds').html('0' + secondsLeft);
      }
      else {
        $('#seconds').html(secondsLeft);
      }


      if (difference <= 0) {
        document.title = "The rest session is over";
        clearInterval(x);
      }

      else if (difference <= 3000) {
        audio.play();
      }
      $('#work-button').click(function() {
        clearInterval(x);
      });
      $('#rest-button').click(function(){
        clearInterval(x);
      });
    })
  })

});
