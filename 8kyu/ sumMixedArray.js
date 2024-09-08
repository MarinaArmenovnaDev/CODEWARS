// ❓ Дан массив целых чисел в виде строк и чисел, вернуть сумму значений массива, как если бы все они были числами.

// Ответ дайте числом.


// ✅ SOLUTION:

function sumMix(x){
    let sum = 0
    for (let i = 0; i < x.length; i++) {
        let num = x[i]
        if( typeof num === 'string') {
            num = Number(num)
        }  
    sum = sum + num
    }
return sum
}

