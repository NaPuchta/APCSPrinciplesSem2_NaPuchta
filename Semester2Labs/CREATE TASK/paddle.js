
// this is the function for the paddle vv
function Paddle(loc, rad, col){
  // Instance variables vv
  this.loc = loc;
  this.col = col;

  // This function calls other functions vv
  this.run = function(){
    this.update();
    this.render();
  }

  this.update = function(){
     var mouseLoc = createVector(mouseX, 600);
     // keeps the y value at a certain place but allows the mouse to move the x
     // value with the mouse ^^
     this.loc = p5.Vector.lerp(this.loc, mouseLoc, .2);
     // lerping the paddle to follow the mouse ^^
  }

    // render() draws the ball at the new location
   this.render = function(){
      fill(this.col);
      rect(this.loc.x, this.loc.y, paddleLength, 30);
      // rectangle dimensions for the paddle ^^

   }

  }



// notes on what I need to accomplish: remove the balls when they hit the Paddle
// when the balls hit the bottom of the paddle a new round needs to start
// I need the paddle to increase in size each ball it hits on the top
// (what I might do for top and bottom difference is if the y value of the ball)
// (is more or less than a certain value since the ball will never exactly reach 700)
// change rounds and increase the amount of balls dropping from the top \

// get balls to disappear first then add rounds + more

// ball hits bottom then + 1 round and + 5 balls
// round > 10
