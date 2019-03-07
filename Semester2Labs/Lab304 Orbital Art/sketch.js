/*
** Ball 2 Constructor function
** Naomi Puchta
** Aug 27, 2018
*/

// Global variables
var redBall;
var balls = [];
var toggle = true;

//put setup code here
function setup(){
	// creating the canvas here
	var cnv = createCanvas(800, 800);
	cnv.position((windowWidth-width)/2, 30);
	background(20, 20, 20);
	// loading the balls here vv
	loadBalls(5);
	// creating the red ball
	redBall = new Ball(createVector(width/2,height/2), createVector(-0.5,.3),25,color(255,0,0));

// Method call ^^
}

function draw(){
	if(toggle){
		background(20, 20, 20, 22);
		// running the red ball
		redBall.run();
		for(var i = 0; i < balls.length; i = i + 1){
			// running the individual balls
			balls[i].run();
		}
	}
}

function loadBalls(numballs){
	for(var i = 0; i < numballs; i++){
		// these are the parameters that are being taken in
		var loc = createVector(random(width), random(height));
		var vel = createVector(random(-3, 3), random(-3, 3));
		var radius = random(20, 30);
		var col = color(random(225),random(225),random(225));
		// this is for what the distance of the ball will bes
		var distance = random(1,12);
		balls.push(new Ball(loc, vel, radius, col, distance));
	}

}

function mousePressed(){
	toggle = !toggle
}
