// ❓ Напишите функцию, которая проверяет, является ли заданная строка (без учета регистра) палиндромом .

// Палиндром — это слово, число, фраза или другая последовательность символов, которая читается одинаково как в прямом, так и в обратном порядке, например madamили racecar.

// ✅ SOLUTION:
function isPalindrome(x) {
   return  x.split("").reverse().join("").toLowerCase() === x.toLowerCase()
  }
  console.log(isPalindrome('Madam'));
