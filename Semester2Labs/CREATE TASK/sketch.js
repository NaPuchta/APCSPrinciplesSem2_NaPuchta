/*
** PaddleBall Game
** Naomi Puchta
** Oct 10, 2018
*/

// this is a test (trying to put score in the corner of the screen)
//numberScore = 0;
//numberText = 'numberScore'


// global Variables
var balls = [];
var paddle;
var stage = 0;
var number = 1;
var nextround = false;
var score = 0;
var roundsLeft = 5;

// this is the setup code for the program
function setup(){
	// this is the canvas vv
	var cnv = createCanvas(800, 800);
	cnv.position((windowWidth-width)/2, 30);
	background(20,20,20);
	loadBalls(number);
	// loads a certain amount of balls ^^
	paddle = new Paddle(createVector(5,10) , 33 , color(255,0,0));
	// adds a paddle to the game ^^
}

// draw function vv
function draw() {
	background(20,20,20,90);
	paddle.run();
	for(var i = 0; i < balls.length; i = i + 1){
		// runs the balls vv
		balls[i].run();
	}
	// sets the next round to false every time vv
	var nextround = false;
	// checks through every ball vv
	for (var i = balls.length - 1; i >= 0; i--){
		// checks to see whether the ball is intercepting the paddle or not
		if(balls[i].loc.x > paddle.loc.x &&
			balls[i].loc.x < paddle.loc.x + 120 &&
			balls[i].loc.y > paddle.loc.y && balls[i].loc.y < paddle.loc.y + 20){
				// checks to see if the ball is intercepting the bottom of the paddle
				// balls[i].vel.x = - balls[i].vel.x;
				// balls[i].vel.y = - balls[i].vel.y;
				balls[i].vel.y = random(-5,-15);
				balls[i].vel.x = -random(-10,10);
					score = score + 5
				}
				if(balls[i].loc.y > 800)balls.splice(i,1);
			}
			// all of this code down here revolves around printing text onto the page
			fill(255);
			text('Score: ' + score, 10, 20);
			// down here once all of the balls dissapear not depending on # of rounds
			// the game ends with final score vv
			if(balls.length == 0 && score > 0){
				fill(255,0,0);
				text('GAME OVER! Final Score: ' + score, 320,400);
			}
		}


	function loadBalls(numballs){
		for(var i = 0; i < numballs; i++){
			// the dimensions of the balls: location, velocity, radius and color vv
			var loc = createVector (random(width),1);
			var vel = createVector(random(-3,3), random(-3,3));
			var radius = 20;
			var col = color(random(255),random(255),random(255));
			var gameBall = new Ball(loc,vel,radius,col);
			// creates a new ball ^^
			balls.push(gameBall);
			// pushes the ball into the array "balls" ^^
		}
	}
