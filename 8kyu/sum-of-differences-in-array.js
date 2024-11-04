// ❓Ваша задача — просуммировать разности между последовательными парами в массиве в порядке убывания.

// Пример
// [2, 1, 10]  -->  9
// В порядке убывания:[10, 2, 1]

// Сумма:(10 - 2) + (2 - 1) = 8 + 1 = 9

// Если массив пуст или в массиве только один элемент, результатом должен быть 0( Nothingв Haskell, Noneв Rust).

// ✅ SOLUTION:
function sumOfDifferences(arr) {
if (arr.length < 2) return 0;

arr.sort((a,b) => b-a)
let sum = 0
for (let i = 0; i < arr.length -1; i++) {
sum += arr[i] - arr[i+1]

}
return sum
}

console.log(sumOfDifferences([10, 2, 1]));
