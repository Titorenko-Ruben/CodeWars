// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

console.log(alphabetPosition("The sunset sets at twelve o' clock."))

function alphabetPosition(str) {
	let array = []
	arr = str.split('')
	arr.forEach((item)=>{
		if(item === 'a'||item === 'A'){
			array.push(1)
		}else if(item === 'b'||item === 'B'){
			array.push(2)
		}else if(item === 'c'||item === 'C'){
			array.push(3)
		}else if(item === 'd'||item === 'D'){
			array.push(4)
		}else if(item === 'e'||item === 'E'){
			array.push(5)
		}else if(item === 'f'||item === 'F'){
			array.push(6)
		}else if(item === 'g'||item === 'G'){
			array.push(7)
		}else if(item === 'h'||item === 'H'){
			array.push(8)
		}else if(item === 'i'||item === 'I'){
			array.push(9)
		}else if(item === 'j'||item === 'J'){
			array.push(10)
		}else if(item === 'k'||item === 'K'){
			array.push(11)
		}else if(item === 'l'||item === 'L'){
			array.push(12)
		}else if(item === 'm'||item === 'M'){
			array.push(13)
		}else if(item === 'n'||item === 'N'){
			array.push(14)
		}else if(item === 'o'||item === 'O'){
			array.push(15)
		}else if(item === 'p'||item === 'P'){
			array.push(16)
		}else if(item === 'q'||item === 'Q'){
			array.push(17)
		}else if(item === 'r'||item === 'R'){
			array.push(18)
		}else if(item === 's'||item === 'S'){
			array.push(19)
		}else if(item === 't'||item === 'T'){
			array.push(20)
		}else if(item === 'u'||item === 'U'){
			array.push(21)
		}else if(item === 'v'||item === 'V'){
			array.push(22)
		}else if(item === 'w'||item === 'W'){
			array.push(23)
		}else if(item === 'x'||item === 'X'){
			array.push(24)
		}else if(item === 'y'||item === 'Y'){
			array.push(25)
		}else if(item === 'z'||item === 'Z'){
			array.push(26)
		}
	})
	return array.join(' ')
  }

  //or

  let alphabetPosition = (text) => text.toUpperCase().replace(/[^A-Z]/g, '').split('').map(ch => ch.charCodeAt(0) - 64).join(' ');