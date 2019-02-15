// Naomi Puchta
// January 18 2019
// --JSON Graphing Code--

// -- GLOBAL VARIABLES --
var data;
var data2;
var data3;

var bubbleTime = false;
var insertTime = false;
var selectionTime = false;

var bubbleGraph = false;
var insertGraph = false;
var selectionGraph = false;

var done = false;
var startScreen = false;
var change = false;

var xPosition;
var yPosition;
var femaleLength;

var finish = false;
var finish2 = false;
var finish3 = false;

// -- This is the SETUP function --
function setup(){
	// creating the canvas
	var cnv = createCanvas(1200,1450)
	cnv.position((windowWidth-width)/2,30)
	background(0)
	// this loads in the data
	loadJSON("population.json", loadingData)
}

// this is the function for loading in the data
function loadingData(incomingData){
	// bubblesort data
	data = incomingData;
	// insertsort data
	data2 = incomingData;
	// selectionsort data
	data3 = incomingData;
	done = true;
	if(done){
		startScreen = true;
	}
}

// -- Draw function --
function draw(){
	if(startScreen){
		// this is the start screen
		rect(10,10,300,150)
		textStyle(BOLD)
		text('Welcome to the population sort!', 15, 25)
		text('Select a sorting routine below: ', 15, 40)
		text('Bubble Sort', 15, 60)
		text('Select Sort', 15, 90)
		text('Insert Sort', 15, 120)
		rect(100,50,10,10,34)
		rect(100,80,10,10,34)
		rect(100,110,10,10,34)
		// Once the mouse has selected it will transfer here vv
	}
	if(bubbleTime){
		bubbleSort();
		bubbleTime = false;
		if(finish){
			bubble();
		}
	}
	if(insertTime){
		insertSort();
		insertTime = false;
		if(finish2){
			insert();
		}
	}
	if(selectionTime){
		console.log('true')
		selectionSort();
		selectionTime = false;
		selecting();
	}
}

// -- Mouse Click Function --
function mouseClicked(){
	// put in the mouse x and mouse y
	// BUBBLE
	if(mouseX > 100 & mouseX < 110){
		if(mouseY > 50 & mouseY <60){
			// when the little square is pressed
			// the bubble sort function will be used
		console.log('Bubble')
		// clears the background from the screen
		clear();
		// this changes it to another if statement
		startScreen = false;
		bubbleTime = true;
		change = true;
		}
		// SELECT
		if(mouseY > 80 & mouseY < 90){
			console.log('Select')
		// clears the background from the screen
			clear();
			// this changes it to another if statement
			startScreen = false;
			selectionTime = true;
			change = true;
		}
		if(mouseY > 110 & mouseY < 120){
			console.log('Insert')
		// clears the background from the screen
			clear();
			// this changes it to another if statement
			startScreen = false;
			insertTime = true;
			change = true;
		}
	}
}


// -- Bubble Function --

function bubble(){
	// the starting position of the bar vv
	xPosition = 5;
	yPosition = 2;
	fill(0)
	name = data.countrydata[0].country
	// this is the text for what the sorting was vv
	textStyle(NORMAL)
	text('The country with the most number of females is: ' + data.countrydata[data.countrydata.length-1].country, 400, 400)
	textStyle(NORMAL)
	text('Least to Greatest Females', 400, 10)
	text('Refresh page to go back to start menu..', 400, 40)
	text(name, xPosition + 50, yPosition + 10);
	// the creation of the bars is here vv
	for(var i = 0; i < data.countrydata.length; i++){
		femaleLength = data.countrydata[i].females
		femaleLength = femaleLength / 1000
		fill(255, 204, 0)
		rect(xPosition, yPosition, femaleLength2, 3);
		fill(255)
		yPosition = yPosition + 3;
	}
}

// -- Bubble Sorting --

var holder;

function bubbleSort(){
	// adding the for loop
	for(var i = data.countrydata.length - 1; i >= 1; i--){
		for(var j = 0; j < data.countrydata.length - 1; j++){
			if(data.countrydata[j].females > data.countrydata[j+1].females){
				// -- Swapping --
				holder = data.countrydata[j+1]
				data.countrydata[j+1] = data.countrydata[j]
				data.countrydata[j] = holder
				// -- Swapping --
			}
		}
	}
	finish = true;
	// statement here
	console.log('this is the country with the least # of females (bubble sort): ')
	console.log(data.countrydata[0].country)
	console.log('this is the country with the most # of females (bubble sort): ')
	console.log(data.countrydata[data.countrydata.length - 1].country)
}

// -- Insert Function --
// where the bars are made vv
function insert(){
	xPosition = 5;
	yPosition = 2;
	fill(0)
	name = data2.countrydata[0].country
	// this is the text for what the sorting was vv
	textStyle(NORMAL)
	text('The country with the most number of males is:' + data.countrydata[data.countrydata.length-1].country,400,400)
	text('Least to Greatest Males', 400, 10);
	text('Refresh page to go back to start menu..', 400, 40);
	text(name, xPosition + 50, yPosition + 10);
	// the creation of the bars is here vv
	for(var i = 0; i < data2.countrydata.length; i++){
		maleLength = data2.countrydata[i].males
		maleLength2 = maleLength / 1000
		fill(255, 204,0)
		rect(xPosition, yPosition, maleLength2, 3);
		fill(255)
		yPosition = yPosition + 3;
	}
}

// -- Insert Sorting --

var holder2;

function insertSort(){
	// adding the for loop
	for(var i = 1; i < data2.countrydata.length; i++){
		for(var j = i; j > 0; j--){
			if(data2.countrydata[j].males < data2.countrydata[j-1].males){
				// -- Swapping --
				holder2 = data2.countrydata[j];
				data2.countrydata[j] = data2.countrydata[j-1];
				data2.countrydata[j-1] = holder2
				// -- Swapping --
			}
		}
	}
	finish2 = true;
	// statement here
	console.log('this is the county with the least # of males (insert sort):  ')
	console.log(data2.countrydata[0].country)
	console.log('this is the country with the most # of males (insert sort): ')
	console.log(data2.countrydata[data2.countrydata.length - 1].country)
}

// -- Selection Function --

function selecting(){
	xPosition = 0;
	yPosition = 10;
	fill(255, 204,0)
	name = data3.countrydata[0].country
	// this is the text for what the sorting was vv
	textStyle(NORMAL)
	// the creation of the bars is here vv
	for(var i = 0; i < data3.countrydata.length; i++){
		if(yPosition > 780){
			xPosition = xPosition + 150;
			yPosition = 10;
		}
		countryName = data3.countrydata[i].country
		fill(0)
		textStyle(NORMAL)
		text(countryName, xPosition, yPosition)
		yPosition = yPosition + 10;
	}
	fill(255, 204,0)
	text('Alphabetized', 200, 10);
	text('Refresh page to', 50, 10);
	text('go back to start', 50, 20);
	text('menu..', 50, 30);
	text('Up to down left to right', 820, 80);
}

// -- Selection Sorting --

var holder3;
var index;

function selectionSort(){
	// adding the for loop
	for(var i = 0; i < data3.countrydata.length - 1; i++){
		index = i
		for(var j = i + 1; j < data3.countrydata.length; j++){
			if(data3.countrydata[j].country < data3.countrydata[index].country){
				// -- Swapping --
				index = j
				holder3 = data3.countrydata[index];
				data3.countrydata[index] = data3.countrydata[i];
				data3.countrydata[i] = holder3;
				// -- Swapping
			}
		}
	}
	finish3 = true;
	// statement here
	console.log('this is the first in alphabetical sorting (selection sort): ')
	console.log(data3.countrydata[0].country)
	console.log('this is the last in alphabetical sorting (selection sort): ')
	console.log(data3.countrydata[data3.countrydata.length - 1].country)
}

//function bars(xLocation, yLocation, barLength){
//	fill(255, 204, 0)
//	rect(xLocation, yLocation, barLength, 3)
//}
