$(document).ready(function() {

  var keyword = 'louis';

  // Using XMLHttpRequest

    $.ajax({
      url: "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=Louis&prop=info&inprop=url&utf8=&format=json",

     dataType: "jsonp",
     success: function(response) {
         console.log(response.query);
         if (response.query.searchinfo.totalhits === 0) {
           showError(keyword);
         }
         else {
           console.log(response);
         }
    },
     error: function () {
      alert("Error retrieving search results, please refresh the page");
     }

   });
});
