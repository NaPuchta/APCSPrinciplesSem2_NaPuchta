// Naomi Puchta
// Mr Etlin
// AP Computer Science Period 1

// -- RICK AND MORTY SORTING ROUTINE --

// this is to make sure the data has loaded completely
var doneLoading = false;

function setup(){
	// creating the canvas
	var cnv = createCanvas(800,800)
	cnv.position((windowWidth-width)/2,30)
	background(0)
	//loading the json data here vv
	loadJSON("codeshack-output.json", loadingData)
}

function loadingData(incomingData){
	data = incomingData
	doneLoading = true;
}

function draw(){
	// this starts up the start screen
	// note for later context.clearrect(0,0, canvas.width, canvas.height)
	// to clear the start screen without clearing the canvas ^^
	if(doneLoading){
		fill(123, 43, 43)
		rect(5,5,250,150)
		fill(255, 243, 243)
		rect(10,10,240,140)
	}


}
