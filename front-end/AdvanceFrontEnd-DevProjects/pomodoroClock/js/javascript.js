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
})
