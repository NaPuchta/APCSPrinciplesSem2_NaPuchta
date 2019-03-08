/*
**  Ball Constructor Function
**  Naomi Puchta
**  Aug 21, 2018
*/

function Ball(location, velocity, radius,  col, distance){
  // Instance variables
  this.loc = location;
  this.vel = velocity;
  this.rad = radius;
  this.col = col;
  this.acc = createVector(0,.1);
  this.angle = 0;
  this.distance = distance;
  // this is for the red ball
  this.speedX = random(-3.0, 3.0);
  this.speedY = random(-3.0, 3.0);

// This function calls other functions
this.run = function(){
  this.checkEdges();
  this.update();
  this.render();
  }

// This function changes the location of the ball
// by adding speed to x and y

// var distance = this.loc.dist(redBall);

this.update = function(){
  if(this !== redBall){
    // setting the speed of the ball to .05 so it'l go smoothly
    this.angle = this.angle + .05;
    // w/o distance its a normal orbit right around the outside of the ball
    // this determines the shape of the orbit
    this.loc.x = redBall.loc.x + cos(this.angle)*this.rad * this.distance
    this.loc.y = redBall.loc.y + sin(this.angle)*this.rad * this.distance
  }
  if(this == redBall){
    // this is to allow the redball to move around
    this.loc.x = this.loc.x + this.speedX;
    this.loc.y = this.loc.y + this.speedY;
  }
  // if(this!==redBall){
  //   // Attraction
  //   var d = this.loc.dist(redBall.loc)
  //   if(d < 100){
  //     var steeringForce = p5.Vector.sub(this.loc, redBall.loc);
  //     steeringForce.normalize(); // changes the magnitude to 1
  //     steeringForce.mult(0.05); // scales the magnitude to .5
  //     this.vel.add(steeringForce);
  //   }
  //   // Repulsion
  //   if(d < 50){
  //   var steeringForce = p5.Vector.sub(redBall.loc, this.loc);
  //   steeringForce.normalize(); // changes the magnitude to 1
  //   steeringForce.mult(0.05); // scales the magnitude to .5
  //   this.vel.add(steeringForce);
  //   }
  //   this.loc.add(this.vel);
  //   //this.vel.add(this.acc);
  // }
 }

this.checkEdges = function(){
  if(this.loc.x < 0) this.speedX = - this.speedX;
  if(this.loc.x > width) this.speedX = - this.speedX;
  if(this.loc.y < 0) this.speedY = - this.speedY;
  if(this.loc.y > height) this.speedY = -this.speedY;
  }

  // render() draws the ball at the new location
 this.render = function(){
    fill(175, 56, 66);
    ellipse(this.loc.x, this.loc.y, this.rad, this.rad);
 }

}
