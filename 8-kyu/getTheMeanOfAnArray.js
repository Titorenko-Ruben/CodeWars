// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.
console.log(getAverage([1,5,87,45,8,8]))

function getAverage(arr) {
	let sum = 0
	arr.forEach((item)=> sum += item)
	return Math.floor(sum / arr.length)
}

//or

function getAverage(marks){
	return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
  }