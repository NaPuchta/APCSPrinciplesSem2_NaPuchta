/*
**  Ball Constructor Function
**  Naomi Puchta
**  Aug 21, 2018
*/

var changeColor;
var coloring;

function Ball(location, velocity, radius,  col, id){
  // Instance variables
  this.loc = location;
  this.vel = velocity;
  this.rad = radius;
  this.col = col;
  this.acc = createVector(0,.1);
  this.id = id;

// This function calls other functions
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

this.checkEdges = function(){
  if(this.loc.x < 0) this.vel.x = - this.vel.x;
  if(this.loc.x > width) this.vel.x = - this.vel.x;
  if(this.loc.y < 0) this.vel.y = - this.vel.y;
  if(this.loc.y > height) this.vel.y = -this.vel.y;
  }

  // render() draws the ball at the new location
 this.render = function(){
    // fill(this.col);
    // ellipse(this.loc.x, this.loc.y, this.rad, this.rad);
    // YELLOW
    // ORANGE
    // if(changeColor = 2){
    //   stroke(244, 113, 65);
    //   changeColor = 0;
    // }
    strokeWeight(1)
    if(id < balls.length - 1){
      // setting the beginning and end colors
      colorClass = color(49, 109, 229);
      fade1  = color(49, 132, 226);
      fade2 = color(49, 152, 226);
      colorClass2 = color(49, 175, 226);
      colorClass3 = color(86, 205, 216)
      // lerp to find colors between the two colors
      if(this.loc.y > 750 && this.loc.y < 800){
        coloring = colorClass
      }
      if(this.loc.y > 650 && this.loc.y < 750){
        coloring = fade1
      }
      if(this.loc.y > 550 && this.loc.y < 650){
        coloring = fade2
      }
      if(this.loc.y > 450 && this.loc.y < 550){
        coloring = colorClass2
      }
      if(this.loc.y > 0 && this.loc.y < 450){
        coloring = colorClass3
      }
      stroke(coloring)
      line(this.loc.x, this.loc.y, balls[id+1].loc.x, balls[id+1].loc.y)
    }
 }

}
