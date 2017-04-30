$(document).ready(function() {

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;

      $.ajax({
        url:'http://api.openweathermap.org/data/2.5/weather?q=shanghai&APPID=8f5646040d13e59ad84bf826809b0216&units=metric',
        datatype: 'jsonp',
        jsonp : "callback",
        success: function(data) {
          var city = data.name;
          var weather = data.weather[0].main;
          var temperature = data.main.temp;
          var description = data.weather[0].description;
          $('#city').html(city);
          $('#Weather').html(weather);
          $('#temperature').html(temperature + ' °C');
          $('#description').html(description);

          //changing the background-color according to the temperature
          // TO FIX
          
          if (temperature >= 20) {
            $('#body').toggleClass('#hotDiv')
          }
          else if (temperature <= 20) {
            $('#fullDiv').css('backrgound-color', 'blue');
          }

          else {
            $('#fullDiv').css('backrgound-color', 'blue');
          }
          console.log(temperature);

          function convertToF(temperature) {
            var fahrenheit;

            fahrenheit = temperature * (9/5) + 32;
            return fahrenheit;
          }


          $('#convert').click(function() {
            $('#convert').toggleClass('celcius');
            $('#convert').toggleClass('fahrenheit');
            if ($(this).hasClass('celcius')) {
              $('#temperature').html(convertToF(temperature) + ' °C');
              $('#convert').html('Convert to °F');
              return;
            }

              $('#temperature').html(temperature + ' °C');
              $('#convert').html('Convert to °C')
          });

        }
      })
    });
  }
})
