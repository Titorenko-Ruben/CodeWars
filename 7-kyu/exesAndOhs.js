// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

console.log(XO('ooxXm'))

function XO(str) {
	let o = 0
	let x = 0
	for (let i = 0; i < str.length; i++) {
		if (str[i] === 'o' || str[i] === 'O') {
			o++
		} else if (str[i] === 'x' || str[i] === 'X') {
			x++
		}
	}
	if (o === x || o === 0 && x === 0) {
		return true
	} else {
		return false
	}
}

//or 

function XO(str) {
	let x = str.match(/x/gi);
	let o = str.match(/o/gi);
	return (x && x.length) === (o && o.length);
  }