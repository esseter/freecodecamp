$(document).ready(function(){

  $('#getQuote').on('click', function(e) {
      e.preventDefault();
      $.ajax( {
        url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
        success: function(data) {
          var post = data.shift(); // The data is an array of posts. Grab the first one.
          $('.quoter').html("<p><strong>" + post.title + "</strong></p>");
          $('.quote').html('<p><em> ' + post.content + '<em></p>');
        },
        cache: false
      });
    });
  });
