function printReverse(arr){
	console.log("Original array = " + arr);
	for (i=arr.length-1; i>= 0; i--){
		console.log(arr[i]);
	}
}

function isUniform(arr){
	var initialItem = arr[0];
	var boolState = true;
	for(i=0; i<arr.length; i++){
		var item = arr[i];
		if (item !== initialItem){
			boolState = false;
		}
	}
	console.log("Array = " + arr + ": " + boolState);
	return boolState;
}

function max(arr){
	var maxValue = null;
	for (var i = 0; i < arr.length; i++) {
		if (maxValue == null){
			maxValue = arr[i];
		}
		else if (arr[i]>maxValue){
			maxValue = arr[i];
		}
	}
	console.log("Max of " + arr + ": " + maxValue);
	return maxValue;
}

console.log("Array test:");
var arr = [1, 2, 3, 4];
printReverse(arr);
console.log("*******");

console.log("isUniform test:")

isUniform([1,1,1,1]);
isUniform([2,1,1,1]);
isUniform(["a","b","p"]);
isUniform(["b","b","b"]);

console.log("max() test:");
max([1,2,3]);
max([10, 3, 10, 4]);
max([-5, 100]);
