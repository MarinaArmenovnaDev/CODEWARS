// ❓ Вам дан массив целых чисел нечетной длины , в котором все числа одинаковы, за исключением одного числа.

// Завершите метод, который принимает такой массив и возвращает это единственное отличающееся число.

// Входной массив всегда будет действителен! (нечетная длина >= 3)

// Примеры
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3



// ✅ SOLUTION:
function stray(numbers) {
    return numbers.filter(num => numbers.indexOf(num) === numbers.lastIndexOf(num))[0];

}


  console.log(stray([17, 17, 3, 17, 17, 17, 17]));