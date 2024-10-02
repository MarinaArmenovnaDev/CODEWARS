// ❓Есть массив с некоторыми числами. Все числа равны, кроме одного. Попробуйте найти его!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq(45) === 0.55
// Гарантируется, что массив содержит не менее 3 чисел.

// Тесты содержат очень большие массивы, поэтому подумайте о производительности.



// ✅ SOLUTION:
function findUniq(arr) {
    arr = arr.sort();
  
    if (arr[0] === arr[1]) {
     return arr[arr.length - 1];
    }
    return arr[0];
    
}

console.log(findUniq([ 0, 0, 0.55, 0, 0, 0.456]));


// function unique(value, index, self) {
//     return self.filter((item) => item === value).length === 1;
//   }
  
//   opis.filter(unique);