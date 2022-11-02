// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

console.log(moveZeros([false,1,0,1,2,0,1,0,0,0,3,"a"]))
function moveZeros(arr){
	let array = []
	let countZero = 0
	arr.forEach((item)=>{
		if(item !== 0){
			array.push(item)
		}else{
			countZero++
		}
	})
	for(let i=1;i<=countZero;i++){
		array.push(0)
	}
	return array
}