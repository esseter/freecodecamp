$(document).ready(function(){
  var rest = 5;
  var minutes = 30;

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

    var x = setInterval(function(){
      var newNow = new Date().getTime(); // lol
      var difference = end - newNow;
      var minutesLeft = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60));
      var secondsLeft = Math.floor(difference % (1000 * 60) / (1000));
      $('#work-button').css({'background': "black", 'top': '4px'});
      $('#minutes').html(minutesLeft);
      $('#seconds').html(secondsLeft);
      if (difference < 0) {
        clearInterval(x);
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

    var x = setInterval(function(){
      var newNow = new Date().getTime();
      var difference = end - newNow;
      var minutesLeft = Math.floor(difference % ( 1000 * 60 * 60) / (1000 * 60));
      var secondsLeft = Math.floor(difference % ( 1000 * 60) / (1000));
      $('#rest-button').css({'background': "black", 'top': '4px'});
      $('#minutes').html(minutesLeft);
      $('#seconds').html(secondsLeft);

      if (difference < 60) {
        clearInterval(x);
      }

      $('#work-button').click(function() {
        clearInterval(x);
      })
      $('#rest-button').click(function(){
        clearInterval(x);
      })
    })
  })

});
