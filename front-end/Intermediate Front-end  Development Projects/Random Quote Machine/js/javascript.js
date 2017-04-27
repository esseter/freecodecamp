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


  function twitterSplit(quote,author) {
    quote = quote.split("");
    var finalTweet = [];
    var correctQuote = [];
    var marks = "\""
    var marksEnding = "\", "

    for (var i = 3; i < quote.length - 6; i++) {
      correctQuote.push(quote[i]);
    };

    if (correctQuote.length + author.length <= 136) {
      correctQuote = correctQuote.join("");
      finalTweet.push(marks);
      finalTweet.push(correctQuote);
      finalTweet.push(marksEnding);
      finalTweet.push(author);
      finalTweet = finalTweet.join("");
      return finalTweet;
    }
    else {
      var threeDots = "...";
      var splicedQuote = correctQuote.splice(0, 140 - author.length - 8);

      splicedQuote = splicedQuote.join("");
      finalTweet.push(marks);
      finalTweet.push(splicedQuote);
      finalTweet.push(threeDots);
      finalTweet.push(marksEnding);
      finalTweet.push(author);
      finalTweet = finalTweet.join("");
      return finalTweet;
    }
  };
twitterSplit("<p>Design is thinking made visual.<\/p>\n", "Saul Bass");
