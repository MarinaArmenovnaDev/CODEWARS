// ❓ Задача:
// Дан список целых чисел, определите, является ли сумма его элементов четной или нечетной.

// Дайте ответ в виде строки, соответствующей "odd"или "even".

// Если входной массив пуст, расцениваем его как: [0](массив с нулем).

// Примеры:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

// ✅ SOLUTION:


function oddOrEven(array) {
let sum  = 0
let res = 'even'
for (let i = 0; i < array.length; i++) {
    sum += array[i]
    if(sum % 2 === 0){
        res = 'even'
    }else {
        res = 'odd'
    }
}
return res
}


console.log(oddOrEven([0]));