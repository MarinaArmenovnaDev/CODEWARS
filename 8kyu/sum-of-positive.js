// ❓Получаете массив чисел, возвращаете сумму всех положительных единиц.

// Пример [1,-4,7,12]=>1 + 7 + 12 = 20

// Примечание: если суммировать нечего, то по умолчанию используется сумма 0.



// ✅ SOLUTION:
function positiveSum(arr) {
    let result = 0
    for (let i = 0; i < arr.length; i++) {
    if(arr[i] > 0){
        result += arr[i]
    }
  }
  return result
}
console.log(positiveSum([1,-4,7,12]));
