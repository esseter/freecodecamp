$(document).ready(function() {



  // Using XMLHttpRequest
  $('#searchBar').keydown(function(event) {
    var keyCode = (event.keyCode ? event.keyCode : event.which);
    if (keyCode == 13) {
      var keyword = document.getElementById('inputBar').value;
      alert("clicked");
      $.ajax({
        url: "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + keyword +"&srlimit=8&prop=info&inprop=url&utf8=&format=json",

        dataType: "jsonp",
        success: function(response) {

          console.log(response.query.search);
          if (response.query.searchinfo.totalhits === 0) {
          }
          else {
            var objectOne = response[0];
            for (var i = 0; i < 8; i++) {
              var title = response.query.search[i].title;
              var description = response.query.search[i].snippet;
              $('#results').html('<div class="col-md-3">  <div class="article">  <div class="well" id="box"><h3 class="title">'+ title+ '</h3><p class="description">'+ description +'</p></div></div></div>');
            };
            console.log(response);
          }
        },
       error: function () {
        alert("Error retrieving search results, please refresh the page");
       }
      });
    }
  });
});
