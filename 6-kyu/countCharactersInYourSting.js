// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// Основная идея состоит в том, чтобы подсчитать все встречающиеся символы в строке. Если у вас есть строка типа aba, результат должен быть {'a': 2, 'b': 1}.

// Что делать, если строка пуста? Тогда результатом должен быть пустой объектный литерал {}.
console.log(count('abaaccabbbaa'))
function count(string) {
	let obj = {}
	let num = 1
	for (let i = 0; i < string.length; i++) {
		if (obj[string[i]] == undefined) {
			obj[string[i]] = num
		}else{
			obj[string[i]] = obj[string[i]]+1
		}
	}
	return obj
}

// or

function count (string) {  
    var count = {};
    string.split('').forEach(function(s) {
       count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
  }
  