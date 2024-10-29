// ❓ Напишите функцию, которая вычисляет среднее значение чисел в заданном массиве.

// Примечание: пустые массивы должны возвращать 0.

// ✅ SOLUTION:
function findAverage(array) {
   let sum = 0
   for (let i = 0; i < array.length; i++) {
    sum += array[i]
   }
   if(array.length){
    return sum / array.length
   }
   return 0
  }

  console.log(findAverage([]));
