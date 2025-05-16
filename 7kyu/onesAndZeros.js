// ❓ Дан массив из единиц и нулей. Преобразуйте эквивалентное двоичное значение в целое число.

// Например: [0, 0, 0, 1]рассматривается как 0001, что является двоичным представлением 1.

// Примеры:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11

// ✅ SOLUTION:
const binaryArrayToNumber = arr => {
    let res = arr.join("")
    return parseInt(res, 2)
  };

  console.log(binaryArrayToNumber([1, 0, 0, 1]));