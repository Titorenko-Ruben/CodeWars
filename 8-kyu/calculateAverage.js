// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

console.log(findAverage([]))
function findAverage(array) {
	let sum = 0
	if(array.length == 0){
		return sum
	}else{
		array.forEach((item)=>{
			sum += item
		})
		sum = sum / array.length
		return sum;
	}
  }