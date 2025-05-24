// ❓ Найдите сумму нечетных чисел в массиве после возведения в куб исходных целых чисел. Функция должна возвращать значение, undefinedесли какие-либо из значений не являются числами.

// ✅ SOLUTION:

function cubeOdd(arr) {

    if (!arr.every(el => typeof el === 'number' && !isNaN(el))) {
        return undefined;
      }
      
      return arr
      .map(num => Math.pow(num, 3))
      .filter(cubed => Math.abs(cubed) % 2 === 1)
      .reduce((sum, num) => sum + num, 0);
}

console.log(cubeOdd([1,2,3.7,4,23,45,22]));