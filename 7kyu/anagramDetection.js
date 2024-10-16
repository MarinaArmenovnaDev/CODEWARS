// ❓ Анаграмма — это результат перестановки букв слова для получения нового слова (см. Википедию ).

// Примечание: анаграммы нечувствительны к регистру.

// Завершите функцию возврата true, если два аргумента являются анаграммами друг друга; falseв противном случае возвратите значение.

// Примеры
// "foefet"является анаграммой"toffee"

// "Buckethead"является анаграммой"DeathCubeK"



// ✅ SOLUTION:
// write the function isAnagram
var isAnagram = function(test, original) {
let t = test.toLowerCase()
let o = original.toLowerCase()
let test1 = t.split("").sort().join("")
let original1 = o.split("").sort().join("")
return test1 === original1
};

console.log(isAnagram("Buckethead","DeathCubeK"));
