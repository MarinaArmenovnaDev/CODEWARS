// ❓О, нет!
// Какой-то очень забавный веб-разработчик выдал вам последовательность чисел из своего ответа API в виде последовательности строк !

// Вам необходимо привести весь массив к правильному типу.

// Создайте функцию, которая принимает в качестве параметра последовательность чисел, представленных в виде строк, и выводит последовательность чисел.

// то есть: ["1", "2", "3"]к[1, 2, 3]

// Обратите внимание, что вы также можете получать поплавки.



// ✅ SOLUTION:

function toNumberArray(stringarray){
  const result = stringarray.map(Number)
return result
}

console.log(toNumberArray(["1", "2", "3"]));