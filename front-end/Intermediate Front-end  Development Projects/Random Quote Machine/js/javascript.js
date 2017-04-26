$(document).ready(function(){

  $('#getQuote').on('click', function(e) {
      e.preventDefault();
      $.ajax( {
        url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
        success: function(data) {
          var post = data.shift();
          var tweeterMessage = post.content;

          $('.quoter').html("<p><strong>" + post.title + "</strong></p>");
          $('.quote').html('<p><em> ' + post.content + '<em></p>');
          return tweeterMessage;
        },
        cache: false
      });
    });
  });

/*
  function twitterSplit(test) {
    test = test.split("");
    var correctTest = [];
    for (var i = 3; i < test.length - 6; i++) {
      correctTest.push(test[i]);
    }
    return correctTest;
  }
twitterSplit("<p>Design is thinking made visual.  <\/p>\n");
 */
