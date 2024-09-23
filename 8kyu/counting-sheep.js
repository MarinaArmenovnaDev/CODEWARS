// ❓ Рассмотрим массив/список овец, где некоторые овцы могут отсутствовать на своих местах. Нам нужна функция, которая подсчитывает количество овец, присутствующих в массиве (true означает присутствие).

// Например,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// Правильный ответ будет таким 17.

// Подсказка: не забудьте проверить наличие неверных значений, таких как null/undefined

// ✅ SOLUTION:

function countSheeps(sheepAr) {
  let count = 0;
  for (let i = 0; i < sheepAr.length; i++) {
    if (sheepAr[i] === true) {
      count ++;
    } else {
      sheepAr[i] = false;
    }
  }
  return count;
}

