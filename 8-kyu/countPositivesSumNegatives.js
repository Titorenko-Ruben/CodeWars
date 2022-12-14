// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
function countPositivesSumNegatives(input) {
    let arr = []
    let positive = 0
    let sumNegative = 0
    if(input == ''|| input==null){
        return arr
    }
    input.forEach((item)=>{
        if(item>0){
            positive++
        }else if(item<0){
            sumNegative += item
        }
    })
    arr.push(positive)
    arr.push(sumNegative)
    return arr
  }