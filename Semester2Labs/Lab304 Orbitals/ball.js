/*
**  Ball Constructor Function
**  Naomi Puchta
**  Aug 21, 2018
*/

function Ball(location, velocity, radius,  col){
  // Instance variables
  this.loc = location;
  this.vel = velocity;
  this.rad = radius;
  this.col = col;
  this.acc = createVector(0,.1);
  this.angle = 0;

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
    this.angle = this.angle + .05;
    this.loc.x = redBall.loc.x + cos(this.angle)*this.rad
    this.loc.y = redBall.loc.y + sin(this.angle)*this.rad
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
  if(this.loc.x < 0) this.vel.x = - this.vel.x;
  if(this.loc.x > width) this.vel.x = - this.vel.x;
  if(this.loc.y < 0) this.vel.y = - this.vel.y;
  if(this.loc.y > height) this.vel.y = -this.vel.y;
  }

  // render() draws the ball at the new location
 this.render = function(){
    fill(this.col);
    ellipse(this.loc.x, this.loc.y, this.rad, this.rad);
 }

}
