// ❓ Найдите сумму всех кратных n ниже m

// Иметь в виду
// nи mявляются натуральными числами (положительными целыми числами)
// mисключен из кратных
// Примеры
// sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
// sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
// sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
// sumMul(4, -7)  ==> "INVALID"

// ✅ SOLUTION:
function sumMul(n,m){
let sum = 0
if(m <= 0 || n <= 0){return "INVALID"}
for(i = n ; i < m ; i += n){
    sum += i
}
return sum
}

console.log(sumMul(3, 13));