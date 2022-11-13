// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

console.log(solution('abcde', 'cde'))

function solution(str, ending){
	return str.endsWith(ending, str.length)
  }

  //or

  function solution(str, ending){
	return str.endsWith(ending);
  }
