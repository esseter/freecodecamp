$(document).ready(function(){
  var rest = 0;
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
  })


  $('#work-button').click(function(){
    var now = new Date().getTime();
    var end = now + minutes * 1000 * 60;

    var x = setInterval(function(){
      var newNow = new Date().getTime(); // lol
      var difference = end - newNow;
      var minutesLeft = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60));
      var secondsLeft = Math.floor(difference % (1000 * 60) / (1000));

      $('#minutes').html(minutesLeft);
      $('#seconds').html(secondsLeft);
      if (difference < 0) {
        clearInterval(x);
      }
      $()
    })

    console.log();


  })

});
