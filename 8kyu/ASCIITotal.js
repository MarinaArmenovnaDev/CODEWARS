// ❓ Вам будет дана строка, и вы должны вернуть сумму всех символов как int. Функция должна уметь обрабатывать все печатные символы ASCII.

// Примеры:

// uniTotal("a") == 97
// uniTotal("aaa") == 291

// ✅ SOLUTION:

function uniTotal (string) {
let sum = 0

for (let i = 0; i < string.length; i++) {
  sum += string.charCodeAt(i)
    
}
return sum
}

 console.log("aaa");
