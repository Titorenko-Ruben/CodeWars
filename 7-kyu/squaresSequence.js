// Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.

// Examples
// 2, 5  -->  [2, 4, 16, 256, 65536]
// 3, 3  -->  [3, 9, 81]
console.log(squares(2,5))

function squares(x, n) {
	let arr = []
	let sum = x
	if(n <= 0){
		return arr
	}else{
		for(let i=0;i<n;i++){
			if(i == 0){
				arr.push(x)
			}else{
				console.log(sum)
				sum = Math.pow(sum,2)
				arr.push(sum)
			}
		}
		return arr
	}
}