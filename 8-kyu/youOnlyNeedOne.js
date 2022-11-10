// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

console.log(check(['what', 'a', 'great', 'kata'], 'kat'))

function check(arr, x) {
	let count = 0
	arr.forEach((item)=>{
		if(item === x){
			count++
		}
	})
	return count > 0 ? true:false 
  }
//or
function check(a,x){
	return a.includes(x)
  }