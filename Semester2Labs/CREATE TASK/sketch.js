
// this is a test (trying to put score in the corner of the screen)
//numberScore = 0;
//numberText = 'numberScore'


// global Variables
var balls = [];
var paddle;
var number = 1;
	// between is what transitions the screen to the "input name" screen before both games
var between = true;
	// this only allows the text box to be drawn once
var once = true;
	// determines whether you're playing the original or the medley game vv
var original;
	// switches between title screen and game
var startGame = true;
	// switching between title screen and info panel
var switching = false;
	// allows the player to restart the game vv
var gameEnd = false;
	// increases by 5 every time
var score = 0;
	// this decreases after every touch with the ball vv
var paddleLength = 120;
	// title screen buttons
var button;
var button2;
	// making keyCode global
var keyCode;

// this is the setup code for the program
function setup(){
	score = 0;
	// this is the canvas vv
	var cnv = createCanvas(800, 800);
	cnv.position((windowWidth-width)/2, 30);
	background(20,20,20);
	number = 1
	loadBalls(number);
	// loads a certain amount of balls ^^
	paddle = new Paddle(createVector(5,10) , 33 , color(255,0,0));
	startGame = true;
	switching = true;
	// adds a paddle to the game ^^
}

// draw function vv
function draw() {
	// if startGame is true the title screen plays
	if(startGame){
			// if switching then start screen
		if(switching){
			startScreen();
		} else {
			// else switcing to info panel vv
			infoPanel();
		}
		// else the game starts, this is where the user will press on buttons for the title screen
	} else {
		// here is where the game starts
		startSession();
		if(original){
			powerUps();
		}
	}
}

// LOADING THE BALLS
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

// START SCREEN
	function startScreen(){
		keyCode = 14;
		fill(89, 23, 39)
		rect(190,190,420,220)
		fill(219, 87, 107)
		rect(200,200,400,200)
		fill(255)
		textStyle(BOLD)
		// Introduction text
		text('WELCOME TO THE PADDLE GAME!', 210, 230)
		textStyle(NORMAL)
		text('To get started... click a mode and then press E to ENTER.', 210, 250)
		text('Please the game in full screen before playing.', 210, 270)
		// button icon number one
		button = createButton('Medley');
		button.position(780, 320);
		button.mousePressed(medleyStart)
		text('Medley gives multiple balls and ends when all of the balls hit the bottom.', 210, 330)
		// button icon number two
		button2 = createButton('Original')
		button2.position(780, 370)
		button2.mousePressed(originStart)
		// button for info menu
		button3 = createButton('PowerUp Info')
		button3.position(1050,240)
		button3.mousePressed(switchScreen)
		text('Original gives one ball, and power ups via purchace of points.', 210, 380)
		text('game ends when all balls hit the bottom.', 210, 395)
	}

// START GAME
	function startSession(){
		background(20,20,20,90);
		paddle.run();
		for(var i = 0; i < balls.length; i = i + 1){
			// running the individual balls
			balls[i].run();
		}
		// checking through every ball
		for(var i = balls.length - 1; i >= 0; i--){
			//checks to see whether the ball is intercepting the paddle or not
			if(balls[i].loc.x > paddle.loc.x &&
			balls[i].loc.x < paddle.loc.x + paddleLength &&
			balls[i].loc.y > paddle.loc.y &&
			balls[i].loc. y < paddle.loc.y + 20){
				// changing the velocity of the ball so it goes around randomly
				balls[i].vel.y = random(-5,-15);
				balls[i].vel.x = -random(-10,10);
				// this is adding score to the scoreboard
				score = score + 5
				if(paddleLength > 50){
					paddleLength = paddleLength - 2
				}
			}
			if(balls[i].loc.y > 800)balls.splice(i,1);
		}
		// this puts the score icon in the corner
		fill(255);
		text('Score: ' + score, 10, 20);
		// down here once all of the balls dissapear not depending on # of rounds
		// the game ends with final score vv
		if(balls.length == 0 && gameEnd == true){
			// removes the power ups bar from the screen vv
			original = false;
			fill(255,0,0);
			text('GAME OVER! Final Score: ' + score, 320, 400)
			text('To go back to the title screen press the enter bar', 320, 420)
			if(keyCode == 13 && gameEnd == true){
				gameEnd = false;
				// this takes us back to the title screen
				setup();
			}
		}
	}

	// THE ORIGINAL GAME
	function medleyStart(){
		// not playing the original game and will not activate power ups
		original = false;
		// changing the amount of balls that are in the array (increasing)
		balls = []
		number = 15;
		// loading the balls here
		loadBalls(number)
		// switching to the start game
		startGame = false;
		// removing buttons that wont dissapear on their own
		removeElements();
		gameEnd = true;
	}

	function originStart(){
		// playing the original game and will activate power ups
		original = true;
		// switching to the start game
		startGame = false;
		// removing buttons that wont dissapear on their own
		removeElements();
		gameEnd = true;
	}

	function powerUps(){
		fill(255)
		text('PowerUps: ', 10, 40);
		text('Random Add Points (chance) - r (20 points)', 10, 60)
		text('Add Ball - a (100 points)', 10, 75)
		text('Grow Paddle - g (50 points)', 10, 90)
		if(keyCode == 82){
			keyCode = 0
			// so player cannot spend infinite points vv
			if(score >= 20){
				score = score - 20;
				score = score + round(random(1,30));
				// code here for doubling points for 10 seconds only
				console.log(true)
			}
		}
		if(keyCode == 65){
			keyCode = 0;
			if(score >= 100){
				// code here for adding a ball into the game
				score = score - 100;
				// this is pushing another gameBall into the array
				var loc = createVector (random(width),1);
				var vel = createVector(random(-3,3), random(-3,3));
				var radius = 20;
				var col = color(random(255),random(255),random(255));
				var gameBall = new Ball(loc,vel,radius,col);
				balls.push(gameBall)
			}
		}
		if(keyCode == 71){
			console.log(true)
			keyCode = 0;
			if(score >= 50){
				// code here for growing paddle back to its original size
				score = score - 50;
				paddleLength = 120;
			}
		}
	}

	function infoPanel(){
		removeElements();
		fill(89, 23, 39)
		rect(190,190,420,220)
		fill(219, 87, 107)
		rect(200,200,400,200)
		fill(255)
		textStyle(BOLD)
		// Introduction text
		text('This is the info screen for the Power Ups: ', 210, 230)
		textStyle(NORMAL)
		text('Note: POWER UPS ARE ONLY IN THE ORIGINAL VERSION.', 210, 250)
		text('Here are the Power Ups: ', 210, 270)
		text('Random Add Points - By pressing the letter r you subtract your score', 210, 285)
		text('by 20 and add a random amount of points.', 210, 300)
		text('Add Ball - By pressing the letter a you subract your score by 100 and', 210, 315)
		text('add a ball from the top of the screen.', 210, 330)
		text('Grow Paddle - By pressing the letter g you subtract your score by 50 and', 210, 345)
		text('grow the paddle back to its original size.', 210, 360)
		text('To go back to the menu press the SPACE BAR.', 210, 390)
		if(keyCode == 32){
			removeElements();
			console.log(true)
			switching = true;
			startScreen();
		}
	}

// this is the transition function between the title and the info screens
	function switchScreen(){
		switching = false;
	}
