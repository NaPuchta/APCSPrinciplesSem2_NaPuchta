// SORTING FUNCTIONS
//
//

// GLOBAL VARIABLES

// variable for the example sort
// var numb = [12,11,4,15,5,10,2,14,6,1,7,8,9,13];
// variable for select sort
var numbers = [];
// variable for insert sort
var numbrs = [];
// for the random numbers in the same array
var randomNumber;

function setup(){
	loadingNumbers()
	selectSort()
	insertSort()
}
// so what will happen is that the list will be traveresed and the lowest number
// will be brought to the front

// // must find a way to put this somewhere
// if(numb[i] < numb[i+1]){
// 	tempor = numb[i]
// }
// for(var i = 0; i < j; i++){
// 	for(var j = numb.length - 1; j >= 0; j--){
// 		// adding the if function here to search for the lowest value
// 		if(tempor > numb[i]){
// 			tempor = numb[i]
// 			// confused overall but must find a way to make it repeat each time
// 			// the two for functions might not be the things that work in this case)
// 		}
// 	}
//
// }

// --- Loading Numbers Function ---
// this is to make a random array each time
function loadingNumbers(){
	// array will include a lot of numbers
	for(var i = 0; i < 10000; i++){
		// will push random number into array
		randomNumber = (round(random(20000)))
		numbers.push(randomNumber)
		numbrs.push(randomNumber)
	}
}




// --- Actual Selection Sorting ---

var lowest;
var holder;
var index;
var selectCompare = 0;
var selectSwap = 0;
var selectStart;
var selectEnd;
var milliSelect;

function selectSort(){
	selectStart = millis()
	// traverses the list and list length decreases from left to right
	// var j is for the first element (the one at the end of the list)
	for(var i = 0; i < numbers.length - 1; i++){
		index = i;
		// takes the number at the front for swapping
		// searching for the lowest number vv
		for(var j = i + 1; j < numbers.length; j++){
			selectCompare = selectCompare + 1
			if(numbers[j] < numbers[index]){
				selectSwap = selectSwap + 1
				index = j
				// Swapping
				lowest = numbers[index];
				numbers[index] = numbers[i];
				numbers[i] = lowest;
				// Swapping

			}
		}
	}
	selectEnd = millis()
	milliSelect = selectEnd - selectStart
	// logging the end result
	console.log(numbers)
	console.log('The Select list was compared ' + selectCompare + ' times.')
	console.log('The Select list was also swapped ' + selectSwap + ' times.')
	console.log('Finally the Select list took a total of ' + milliSelect + ' milliseconds.')
}

// --- Actual Insert Sorting ---

var temp;
var insertCompare = 0;
var insertSwap = 0;
var insertStart;
var insertEnd;
var milliInsert;

function insertSort(){
	selectStart = millis();
	for(var i = 1; i < numbrs.length; i++){
		for(var j = i; j > 0; j--){
			// looking through the length of i to make sure all is sorted
			// checking to see if the number ahead is less than the previous
			insertCompare = insertCompare + 1
			if(numbrs[j] < numbrs[j-1]){
				insertSwap = insertSwap + 1
				// Swapping
				temp = numbrs[j];
				numbrs[j] = numbrs[j -1];
				numbrs[j-1] = temp;
				// Swapping
			}
			// if not less just continue on
		}
	}
	selectEnd = millis();
	milliInsert = selectEnd - selectStart;
	// logging the end result
	console.log(numbrs)
	console.log('The Insert list was compared ' + insertCompare + ' times.')
	console.log('The Insert list was also swapped ' + insertSwap + ' times.')
	console.log('Finally the Insert list took a total of ' + milliInsert + ' milliseconds.')

}
