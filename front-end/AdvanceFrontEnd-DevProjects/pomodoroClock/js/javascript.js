$(document).ready(function(){
  var rounds = 0;
  var minutes = 30;

  $('#minusRound').click(function(){
    if (rounds != 0) {
      rounds = rounds - 1;
      $('#nbRounds').html(rounds);
    }
  });

  $('#plusRound').click(function(){
    rounds = rounds + 1;
    $('#nbRounds').html(rounds);
    console.log(rounds);
  });
  $('#minusMinute').click(function() {
    if (minutes != 0) {
      minutes = minutes - 1;
      $('#nbMinutes').html(minutes);
      $('#time-left').html(minutes + ':00')
    }
  });
  $('#plusMinute').click(function(){
    minutes = minutes + 1;
    $('#nbMinutes').html(minutes);
    $('#time-left').html(minutes + ':00')
  })


  $('.illustration').click(function() {
    var clickDate = new Date().getTime();

    function getFinalDate(clickDate, minutes) {
      
    }
    console.log(clickDate);
  })
  /*
  $('.illustration').click(function(){
    const START = new Date().getTime();
    console.log(START);
    const endOfTimer = START + (minutes * 100000);
    console.log(endOfTimer);
    var x = setInterval(function() {
      var actualTime = new Date().getTime();
      var minuteLeft = endOfTimer - actualTime;
      var minuteDisplay = Math.floor((minuteLeft % (1000 * 60 * 60)) / (1000 * 60));
      var secondDisplay = Math.floor((minuteLeft % (1000 * 60)) / 1000);
      $('#time-left').html(minuteDisplay + ":" + secondDisplay);
    })
  })
  */


});
