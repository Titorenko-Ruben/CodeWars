// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
console.log(grow([1, 2, 3, 4]))

function grow(arr){
	let sum = 0
	arr.forEach((item,id)=>{
		if(id == 0){
			sum = arr[id]
		}else{
			sum = sum * arr[id]
		}
	})
	return sum
}

//or

const grow=x=> x.reduce((a,b) => a*b);