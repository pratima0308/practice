//insertion sort using recursion
function insertionSort(arr){
	var numOfRounds = 1;
	tempArr = [arr[0]];
	while(numOfRounds < arr.length){
		tempArr = insert(tempArr, arr[numOfRounds]);
		numOfRounds += 1 ;
	}
	return tempArr;
}

function insert(tempArr, num) {
	var output = [];
	for(var idx in tempArr){
		if(tempArr[idx] < num) continue;
		else { 
			return output.concat(tempArr.slice(0,idx)).concat([num]).concat(tempArr.slice(idx));
		}
	}
	return output.concat(tempArr).concat([num]);
}

console.log(insertionSort([2, 4, 6, 8, 3]));