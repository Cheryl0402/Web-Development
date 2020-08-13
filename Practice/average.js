function average(arr){
	var total = 0;
	for(var i = 0; i < scores.length; i++){
		total += arr[i];
	}

	var average = total / arr.length;
	return average;
}

var scores = [90, 98, 89, 100, 100, 86, 94];
var ave = average(scores);
console.log(ave);