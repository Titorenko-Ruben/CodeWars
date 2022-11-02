// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

console.log(fakeBin('509321967506747'))
function fakeBin(x){
	let str = ''
	for(let i=0;i<x.length;i++){
		str += x[i]<5 ? 0 : 1 
	}
	return str
}