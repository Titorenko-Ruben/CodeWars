// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]))

function findNeedle(arr) {
	needleId = ''
	arr.forEach((item, id)=>{
		if(item == 'needle'){
			needleId = id
		}
	})
	return `found the needle at position ${needleId}`
  }

  //or

  const findNeedle = haystack => `found the needle at position ${haystack.indexOf('needle')}`;