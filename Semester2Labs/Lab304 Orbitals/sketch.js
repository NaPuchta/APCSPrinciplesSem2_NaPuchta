/*
** Ball 2 Constructor function
** Naomi Puchta
** Aug 27, 2018
*/

// Global variables
var redBall;
var balls = [];

//put setup code here
function setup(){
	var cnv = createCanvas(800, 800);
	cnv.position((windowWidth-width)/2, 30);
	background(20, 20, 20);
	loadBalls(1);
	redBall = new Ball(createVector(width/2,height/2), createVector(-0.5,.3),25,color(255,0,0));

// Method call ^^
}

function draw(){
	background(20, 20, 20, 22);
	redBall.run();
	for(var i = 0; i < balls.length; i = i + 1){
		balls[i].run();
	}
}

function loadBalls(numballs){
	for(var i = 0; i < numballs; i++){
		var loc = createVector(random(width), random(height));
		var vel = createVector(random(-3, 3), random(-3, 3));
		var radius = random(20, 40);
		var col = color(random(225),random(225),random(225));
		balls.push(new Ball(loc, vel, radius, col));
	}

}
