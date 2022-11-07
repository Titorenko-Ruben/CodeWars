// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

console.log(findShort("turns out random test cases are easier than writing out basic ones"))

function findShort(str){
	let arr = []
	arr = str.split(' ')
	min = arr[0].length 
	arr.forEach((item)=> {
		if(item.length < min){
			min = item.length			
		}
	})
	return min
}