// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

console.log(accum("ZpglnRxqenU"))

function accum(str) {
	let arr = []
	str.toLowerCase().split('').forEach((item,id)=>{
		if(id === 0){
			arr.push(item[0].toUpperCase())
		}else{
			let string = ''
			for(let i=0;i<=id;i++){
				if(i===0){
					string += item.toUpperCase()
				}else{
					string += item
				}
			}
			arr.push(string)
		}
	}) 
	return arr.join('-')
}

//or

function accum(s) {
	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
  }