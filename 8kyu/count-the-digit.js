//❓ Возьмем целое число n (n >= 0)и цифру d (0 <= d <= 9)в качестве целого числа.

// Возведите в квадрат все числа k (0 <= k <= n)от 0 до n.

// Подсчитайте количество цифр, d использованных в написании всех k**2.

// Реализуйте функцию, принимающую n и  в качестве параметров и возвращающую это количество.

// Примеры:
// n = 10, d = 1 
// the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
// We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

// The function, when given n = 25 and d = 1 as argument, should return 11 since
// the k*k that contain the digit 1 are:
// 1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
// So there are 11 digits 1 for the squares of numbers between 0 and 25.
// Обратите внимание, что 121в нем удвоенная цифра 1.

// ✅ SOLUTION:

function nbDig(n, d) {
let count = 0
for (let k = 0; k <= n; k++) {
    let kvadrat = k ** 2
    let stroka = String(kvadrat)
    for (let i = 0; i < stroka.length; i++) {
        if(stroka[i] === d){
            count = count + 1
        }else{

        }        
}    
    }
    return count
}

console.log(nbDig (25, 1));

 

//  const array = [kvadrat]

//  let kvadrat = " "
 
//  }
// if(n >= 0 && 0 <= d <= 9){
//    let k;
// }else if (0 <= k && k <= n){


//     const massiv = [k]
//     for (let i = 0; i < massiv.length; i++) {
//         const element = k[i];
        
//     }



