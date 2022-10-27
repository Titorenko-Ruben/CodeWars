// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
 // Examples:
// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str){
    let arr = []
    for(let i=0;i < str.length; i++){
     if(str[i+1]===undefined){
         let a = str[i]+'_'
         arr.push(a)
       i++
     }else{
         let a = str[i]+str[i+1]
         arr.push(a)
       i++
     }
    }
    return arr
 }

//  or
function solution(s){
    return (s+"_").match(/.{2}/g)||[]
 }