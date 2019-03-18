/*
** PaddleBall Game
** Naomi Puchta
** Oct 10, 2018
*/

function Ball(loc, vel, radius, col){
  // Instance variables
  this.loc = loc;
  this.vel = vel;
  this.rad = radius;
  this.col = col;
  this.acc = createVector(0,.1);

  // This function calls other functions vv
  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
  }

  // This function changes the location of the ball
  // by adding speed to x and y
  this.update = function(){
    this.vel.add(this.acc);
    this.loc.add(this.vel);
  }
  // checking the distance of the ball to the paddle (4 requirements) vv
  // && is the "and" for the if: if AND if AND if = true --> do this
  // if it hits the top of the paddle vv


  this.checkEdges = function(){
    if(this.loc.x < 0) this.vel.x = - this.vel.x;
    if(this.loc.x > width) this.vel.x = - this.vel.x;
    if(this.loc.y < 0) this.vel.y = - this.vel.y;
    // if(this.loc.y > height) balls.splice(i,1);

  }

  // render() draws the ball at the new location
  this.render = function(){
    fill(this.col);
    ellipse(this.loc.x, this.loc.y, this.rad, this.rad);
  }

}
