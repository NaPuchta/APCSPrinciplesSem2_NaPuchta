// Naomi Puchta
// January 18 2019
// --JSON Graphing Code--

// -- GLOBAL VARIABLES --
var data;
var startScreen;

// -- This is the SETUP function --
function setup(){
	// creating the canvas
	var cnv = createCanvas(800,800)
	cnv.position((windowWidth-width)/2,30)
	background(0)
	// this loads in the data
	loadJSON("data.json", loadingData)
	startScreen = 1;
}

// this is the function for loading in the data
function loadingData(incomingData){
	data = incomingData;
	// sends the loaded data to be sorted (insert is more efficient)
	insertSort(data);
}

function draw(){
	// this is the start screen before the graph is shown
	if(startScreen == 1){
		rect(100,250,600,200)
		textStyle(BOLD);
		textSize(15)
		text('Welcome to JSON Graphing:', 120,280);

	}



}
