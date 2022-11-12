// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

console.log(sumTwoSmallestNumbers([-1,10, 343445353, 3453445, 3453545353453]))

function sumTwoSmallestNumbers(arr) {  
	let sum = 0
	arr.forEach((item,id)=>{
		if(item<0){
			arr.splice(id,1)
		}
	})
	for(let i=0;i<2;i++){
		sum += Math.min.apply(null,arr)
		arr.splice(arr.indexOf(Math.min.apply(null,arr)),1)
	}
	return sum
  }

  //or

  function sumTwoSmallestNumbers(numbers){  
	numbers = numbers.sort(function(a, b){return a - b; });
	return numbers[0] + numbers[1];
  };