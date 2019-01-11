// SORTING FUNCTIONS
//
//

// GLOBAL VARIABLES

// variable for the example sort
var numb = [4,5,2,6,1,7,8,9];
// variable for select sort
var numbers = [4,5,2,6,1,7,8,9];
// variable for insert sort
var numbrs = [4,5,2,6,1,7,8,9];

function setup(){
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

// --- Actual Selection Sorting ---

var lowest;
var holder;
var index;


function selectSort(){
	// traverses the list and list length decreases from left to right
	// var j is for the first element (the one at the end of the list)
	for(var i = 0; i < numbers.length - 1; i++){
		index = i;
		// takes the number at the front for swapping
		// searching for the lowest number vv
		for(var j = i + 1; j < numbers.length; j++){
			if(numbers[j] < numbers[index]){
				index = j
				// Swapping
				lowest = numbers[index];
				numbers[index] = numbers[i];
				numbers[i] = lowest;
				// Swapping

			}
		}
	}
	console.log(numbers)
}

// --- Actual Insert Sorting ---

var temp;

function insertSort(){
	for(var i = 1; i < numbrs.length; i++){
		for(var j = i; j > 0; j--){
			// looking through the length of i to make sure all is sorted
			// checking to see if the number ahead is less than the previous
			if(numbrs[j] < numbrs[j-1]){
				// Swapping
				temp = numbrs[j];
				numbrs[j] = numbrs[j -1];
				numbrs[j-1] = temp;
				// Swapping
			}
			// if not less just continue on
		}
	}
	console.log(numbrs)
}
