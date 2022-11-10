// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.
console.log(isVow([104,109,102,104,103,99,117,122,102,111,105,109,101,116]))

function isVow(arr){
	let array = arr.map((item)=>{
		if(item === 97){
			return 'a'
		}else if(item === 101){
			return 'e'
		}else if(item === 105){
			return 'i'
		}else if(item === 111){
			return 'o'
		}else if(item === 117){
			return 'u'
		}else{
			return item
		}
	})
	return array
}

//or

const v={"97":"a","101":"e","105":"i","111":"o","117":"u"}
const isVow=a=>a.map(x=>v[x]||x)