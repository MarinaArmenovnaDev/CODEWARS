// ❓Напишите функцию для преобразования имени в инициалы. Эта ката строго принимает два слова с одним пробелом между ними.

// Вывод должен состоять из двух заглавных букв, разделенных точкой.

// Это должно выглядеть так:

// Sam Harris=>S.H

// patrick feeney=>P.F




// ✅ SOLUTION:
function abbrevName(name){
let arr = name.split(' ') // разделяет массив на подстроки (то, что разделено пробелом)
let result = arr[0][0] + "." + arr[1][0];
let upper = result.toUpperCase()
return upper
}

console.log(abbrevName("mfubdhf uhifndb"))