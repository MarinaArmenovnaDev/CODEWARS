// ❓ Завершите функцию, которая принимает два целых числа ( a, b, где a < b) и возвращает массив всех целых чисел между входными параметрами, включая их самих.

// Например:

// a = 1
// b = 4
// --> [1, 2, 3, 4]



// ✅ SOLUTION:

function between(a, b) {
    let result = []
    for (let i = a; i <= b; i++) {
        result.push(i)
    }  
    return result
  }

  console.log(between(1, 4));
