// // ❓ Задача
// Дан массив целых чисел. Найдите максимальное произведение, полученное при умножении двух соседних чисел в массиве. Обратите внимание, что размер массива не менее 2 и состоит из смеси положительных, отрицательных целых чисел, а также нулей.

// Примеры
// [1, 2, 3]возвращает 6, потому что максимальный продукт получается от умножения

// [9, 5, 10, 2, 24, -1, -48]возвращает 50, потому что максимальный продукт получается от умножения

// [-23, 4, -5, 99, -27, 329, -2, 7, -921]возвращает -14, потому что максимальный продукт получается от умножения
//  − 2∗7=− 14

// ✅ SOLUTION:

function adjacentElementsProduct(array) {
  if (array.length < 2) {
    return "your array is to small ";
  }

  let maxPr = array[0] * array[1];

  for (let i = 0; i < array.length; i++) {
    let p = array[i] * array[i + 1];
    if (p > maxPr) {
      maxPr = p;
    }
  }
  return maxPr;
}

console.log(adjacentElementsProduct([2, 3, 4, 10]));
