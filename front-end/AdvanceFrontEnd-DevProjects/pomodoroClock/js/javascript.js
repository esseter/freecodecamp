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
    var now = new Date();
    var hoursEnd = now.getHours();
    var minutesEnd = now.getMinutes() + minutes;
    if (minutesEnd + minutes < 60) {
      hoursEnd =+ 1;
      minutesEnd = minutesEnd - 60;
      }

    var end = new Date(now.getMonth() + " " + now.getDay() + ", " + now.getYear() + " " + hoursEnd + ":" + minutesEnd + ":" + now.getSeconds());
    console.log(now);
    var x = setInterval(function(){
        var newNow = new Date().getTime();
        var difference = end - now;
        var countMinutes = Math.floor((difference %(1000 * 60 * 60)) / (1000 * 60));
        var countSeconds = Math.floor((difference % (1000 % 60)) / 1000);

        $('#minutes').html(countMinutes);
        $('#seconds').html(countSeconds);
    })
  })

});
