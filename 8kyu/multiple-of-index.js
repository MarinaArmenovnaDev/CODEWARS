// ❓ Возвращает новый массив, состоящий из элементов, кратных своему индексу во входном массиве (длина > 1).

// Некоторые случаи:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

// [68, -1, 1, -7, 10, 10] => [-1, 10]

// [-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]


// ✅ SOLUTION:

function multipleOfIndex(array) {
    let res = []
    array.map((el, length)=> el % length === 0 || el === 0 ? res.push(el): 0)
    return res
  }

  console.log(multipleOfIndex( [0,2,3,6,9]));