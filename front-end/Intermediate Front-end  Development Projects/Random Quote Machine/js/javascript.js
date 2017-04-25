$(document).ready(function(){

  $('#getQuote').on('click', function(e) {
      e.preventDefault();
      $.ajax( {
        url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
        success: function(data) {
          var post = data.shift(); // The data is an array of posts. Grab the first one.
          $('.quoter').text(post.title);
          $('.quote').html('<p>" ' + post.content + '  "</p>');
        },
        cache: false
      });
    });
  });
