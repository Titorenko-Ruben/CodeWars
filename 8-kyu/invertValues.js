// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []

console.log(invert([1,2,-3,4,5]))
function invert(array) {
	let arr = []
	array.forEach((item)=>{
		if(item<0){
			arr.push(Math.abs(item))
		}else{
			arr.push(item*-1)
		}
	})
	return arr
 }

//  or

function invert(array) {
	return array.map(el => -el);
 }