// ❓ Дополните функцию квадратной суммы так, чтобы она возводила в квадрат каждое переданное ей число, а затем суммировала результаты.
// Например, [1, 2, 2]он должен вернуться, 9

// ✅ SOLUTION:

function squareSum(numbers){
let p = numbers.map(el => el*el)
let sum = 0
for (let i = 0; i < p.length; i++) {
  sum += p[i]
    
}
return sum
}

console.log(squareSum([1, 2, 2]));
