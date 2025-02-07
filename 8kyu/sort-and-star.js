// ❓ Вам будет предоставлен список строк. Вы должны отсортировать его в алфавитном порядке (с учетом регистра и на основе значений ASCII символов), а затем вернуть первое значение.

// Возвращаемое значение должно быть строкой и содержать "***"между каждой из ее букв.

// Не следует удалять или добавлять элементы из/в массив.

// ✅ SOLUTION:
function twoSort(s) {
const sorted = s.sort()
const firstWord = sorted[0]; 
return firstWord.split('').join('***');
}

console.log(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]);
