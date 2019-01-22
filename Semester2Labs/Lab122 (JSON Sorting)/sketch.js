// Naomi Puchta
// January 18 2019
// --JSON Graphing Code--

// -- GLOBAL VARIABLES --
var data;

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
}

// -- Bubble Sorting --

var holder;

function bubbleSort(){
	for(var i = data.countrydata.length - 1; i >= 1; i--){
		for(var j = 0; j < data.countrydata.length; j++){
			if(data.countrydata[j].females > data.countrydata[j+1].females){
				holder = data.countrydata[j+1]
				data.countrydata[j+1] = data.countrydata[j]
				data.countrydata[j] = holder
			}
		}
	}
	console.log('this is the country with the least # of females: ')
	console.log(data.countrydata[0].country)
	console.log('this is the country with the most # of females: ')
	console.log(data.countrydata[data.countrydata.length - 1].country)
}
