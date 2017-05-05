$(document).ready(function() {

  var searchWord = '';


  $.ajax({
    url: 'https://en.wikipedia.org/w/api.php?action=query&meta=siteinfo&titles=louis&format=json&callback=\?',
    success: function(data) {
      console.log(data);
    }
  });
});
