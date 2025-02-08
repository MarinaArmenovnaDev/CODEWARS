// ❓ Если　a = 1, b = 2, c = 3 ... z = 26

// Затемl + o + v + e = 54

// иf + r + i + e + n + d + s + h + i + p = 108

// Так что friendshipв два раза сильнее love:-)

// Ваша задача — написать функцию, которая вычисляет значение слова на основе суммы позиций его символов в алфавите.

// Ввод всегда будет состоять только из строчных букв и никогда не будет пустым.

// ✅ SOLUTION:

function wordsToMarks(string){
 let res = 0
for (let i = 0; i < string.length; i++) {
   res += string.charCodeAt(i) -96
}
return res
  }

  console.log(wordsToMarks("love",));
