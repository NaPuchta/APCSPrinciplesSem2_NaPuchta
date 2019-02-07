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

var done = false;
var startScreen = false;
// -- This is the SETUP function --
function setup(){
	// creating the canvas
	var cnv = createCanvas(800,800)
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
		bubbleSort()
		insertSort()
		selectionSort()
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
		// if the mouse is within the hit box of each sorting routine
	}
	if(bubbleTime){
		console.log('BubbleTime')
	}
	if(insertTime){
		console.log('InsertTime')
	}
	if(selectionTime){
		console.log('SeletionTime')
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
		startScreen = false;
		bubbleTime = true;
		}
		// SELECT
		if(mouseY > 80 & mouseY < 90){
			console.log('Select')
			startScreen = false;
			selectTime = true;
		}
		if(mouseY > 110 & mouseY < 120){
			console.log('Insert')
			startScreen = false;
			insertTime = true;
		}
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
	// statement here
	console.log('this is the country with the least # of females (bubble sort): ')
	console.log(data.countrydata[0].country)
	console.log('this is the country with the most # of females (bubble sort): ')
	console.log(data.countrydata[data.countrydata.length - 1].country)
}

// -- Insert Sorting --

var holder2;

function insertSort(){
	// adding the for loop
	for(var i = 1; i < data2.countrydata.length; i++){
		for(var j = i; j > 0; j--){
			if(data2.countrydata[j].males < data2.countrydata[j-1]){
				// -- Swapping --
				holder2 = data2.countrdata[j];
				data2.countrydata[j] = data2.countrydata[j-1];
				data2.countrdata[j-1] = holder2
				// -- Swapping --
			}
		}
	}
	// statement here
	console.log('this is the county with the least # of males (insert sort):  ')
	console.log(data2.countrydata[0].country)
	console.log('this is the country with the most # of males (insert sort): ')
	console.log(data2.countrydata[data2.countrydata.length - 1].country)
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
	// statement here
	console.log('this is the first in alphabetical sorting (selection sort): ')
	console.log(data3.countrydata[0].country)
	console.log('this is the last in alphabetical sorting (selection sort): ')
	console.log(data3.countrydata[data3.countrydata.length - 1].country)
}
