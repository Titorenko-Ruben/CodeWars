// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

console.log(solution('world'))

function solution(str){
  return str.split('').reverse().join("")
}