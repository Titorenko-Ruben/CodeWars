// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

console.log(digitize(35231))
function digitize(n) {
	let arr = []
	n = String(n)
	for(let i=0;i<n.length;i++){
		arr.unshift(Number(n[i]))
	}
	return arr
  }