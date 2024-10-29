// ❓ Задача:
// Напишите функцию, которая принимает два целых числа и возвращает остаток от деления большего значения на меньшее значение.

// Деление на ноль должно вернуть NaN.

// Примеры:
// n = 17
// m = 5
// result = 2 (remainder of `17 / 5`)

// n = 13
// m = 72
// result = 7 (remainder of `72 / 13`)

// n = 0
// m = -1
// result = 0 (remainder of `0 / -1`)

// n = 0
// m = 1
// result - division by zero (refer to the specifications on how to handle this in your language)

// ✅ SOLUTION:
function remainder(a, b){  
    return Math.max(a,b) % (Math.min(a,b) || NaN);
  }

  console.log(remainder(0,-1));