window.onload = function() {
  // get the canvas and context and store in vars

  var canvas = document.getElementById('sky');
  var ctx = canvas.getContext('2d');

  // set canvas dimensions to the window height and width

  var W = window.innerWidth;
  var H = window.innerHeight;
  canvas.width = W;
  canvas.height = H;

  // need to generate the snowflakes and apply attributes to it;

  var mf = 100; // maximum flakes on the window at the same time
  var flakes = [];

  // loop through the empty flakes and apply attributes to it
  for (var i = 0; i < mf; i++) {
    flakes.push({
      x : Math.random()* W,
      y : Math.random() * H,
      r : Math.random()* 5 + 2, // this the radius, min of 2 and max of 7
      d : Math.random() + 1 // density of flakes
    })
  }

  // draw flakes into canvas
  function drawFlakes() {
    ctx.clearRect(0,0,W,H); // clear the canvas from the top left hand corner
    ctx.fillStyle = "white";
    ctx.beginPath();
    for (var i = 0; i < mf; i++) {
      var f = flakes[i];
      ctx.moveTo(f.x,f.y);
      ctx.arc(f.x,f.y,f.r,0,Math.PI * 2, true);
    }
    ctx.fill();
    moveFlakes();
  }

  // animate the flakes

  var angle = 0;

  function moveFlakes(){
    angle += 0.01;
    for (i = 0; i < mf; i++){

      // store current flake
      var f = flakes[i];

      //update X and Y coordinate for each flake
      f.y += Math.pow(f.d,2) + 1;
      f.x += Math.sin(angle) * 2;

      // if the snowflake reaches the bottom,send a new one at the top, send a new one
      if (f.y > H) {
        flakes[i] = {x: Math.random() * W, y: 0,r: f.r, d :f.d};
      }
    }
  }

  setInterval(drawFlakes, 25);
}
