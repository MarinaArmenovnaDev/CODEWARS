// ❓ В этом небольшом задании вам дана строка чисел, разделенных пробелами, и вам нужно вернуть наибольшее и наименьшее число.

// Примеры
// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Примечания
// Все номера действительны Int32, нет необходимости их проверять.
// Во входной строке всегда будет хотя бы одно число.
// Выходная строка должна состоять из двух чисел, разделенных одним пробелом, причем наибольшее число должно быть первым.


// ✅ SOLUTION:
function highAndLow(numbers){
const result = numbers.split(" ")
Number(result)
    const max = Math.max(...result)
    const min = Math.min(...result)
   
  return `${max} ${min}`
  }


  console.log(highAndLow ("1 2 3 4 5"));
