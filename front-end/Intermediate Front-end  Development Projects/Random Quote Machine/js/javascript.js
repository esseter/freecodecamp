$document.ready( function() {

  $("#getMessage").click(function(){

    $.getJSON("#"),function(json){
      var html = "";

      json.forEach(function(val) {
        var keys = Object.key(val);
        html += "<div class='quoter'>";
        html += "<p>" + val.quoter + "</p>";
        html += "</div>";
      })；

      $.(".quote").html(html);

    }；
  })；
})；
