// ❓ Возьмите 2 строки s1и , s2включающие только буквы от aдо z. Верните новую отсортированную строку (в алфавитном порядке возрастания), максимально длинную, содержащую различные буквы - каждая взята только один раз - из s1 или s2.

// Примеры:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// ✅ SOLUTION:
function longest(s1, s2) {
   let a  = `${s1}${s2}`.split("")
   let noDuble =  [...new Set(a)]
   return noDuble.sort().join("")
   
  }

  console.log(longest("bcgt", "aaaaaa"));

