// ❓ Учитывая массив целых чисел, ваше решение должно найти наименьшее целое число.

// Например:

// Учитывая, что [34, 15, 88, 2]ваше решение вернется2
// Учитывая, что [34, -345, -1, 100]ваше решение вернется-345
// Для целей этого ката можно предположить, что предоставленный массив не будет пустым.


// ✅ SOLUTION:

function findSmallestInt(arr) {
    let minNumber = arr[0]
    for( let i = 1; i < arr.length; i ++){
        if(minNumber > arr[i]){
            minNumber = arr[i]
        }
    }
    return minNumber
}
const minNumber = myArray(numbers)
console.log(minNumber);
