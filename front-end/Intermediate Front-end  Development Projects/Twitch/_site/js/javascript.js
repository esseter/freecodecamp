$(document).ready(function() {

  var users = ['summit1g','TimTheTatman','TSM_Dyrus','PlayHearthstone','FreeCodeCamp','GeekandSundry','RPGLimitBreak']

  for (var i = 0; i < users.length; i++) {
    var urlStream = 'https://wind-bow.glitch.me/twitch-api/streams/' + users[i];
    var urlChannel = 'https://wind-bow.glitch.me/twitch-api/channels/' + users[i];
    var urlBio = 'https://wind-bow.glitch.me/twitch-api/users/' + users[i];

    $.getJSON(urlStream, function(data){


      if (data.stream === null) {
        $.getJSON(urlBio, function(dataBis) {

          var gameOff = dataBis.bio;
          var nameOff = dataBis.display_name;
          var logoOff = dataBis.logo;
          var htmlOff = '<div class="streamer"><div class="row"><div class="col-xs-3"><img src="'+ logoOff +'" alt="'+ nameOff + '" class="logo"></div><div class="stream"><div class="col-xs-6"><h4 class="streamerName">' + nameOff + '</h4><p class="activity">'+ gameOff +'</p></div></div><div class="streamStatus"><div class="col-xs-3"><i class="fa fa-toggle-off" aria-hidden="true"></i></div></div></div></div>';
          $('#all').append(htmlOff);
          $('#offline').append(htmlOff);
          console.log(dataBis);
        });
      }
      else {
        var game = data.stream.game;
        var name = data.stream.channel.display_name;
        var logo = data.stream.channel.logo;
        var url = data.stream.channel.url;

        var html = '<div class="streamer"><div class="row"><div class="col-xs-3"><img src="'+ logo +'" alt="'+ name + '" class="logo"></div><div class="stream"><div class="col-xs-6"><h4 class="streamerName">' + name + '</h4><p class="activity">Currently playing: '+ game +'</p></div></div><div class="streamStatus"><div class="col-xs-3"><i class="fa fa-toggle-on" aria-hidden="true"></i></div></div></div></div>';
        $('#all').append(html);
        $('#online').append(html);

        };
    });
  };
});
