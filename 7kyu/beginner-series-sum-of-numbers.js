// ❓ Даны два целых числа aи b, которые могут быть положительными или отрицательными, найдите сумму всех целых чисел между ними и включая их и верните ее. Если два числа равны, верните aили b.

// Примечание: a и bне заказываются!

// Примеры (a, b) -> вывод (объяснение)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)



// ✅ SOLUTION:

// ❌ я пыталась
// function getSum(a, b){
//     let sum = 0
//     if(a >= b){
//         for(let i = a; i >= b; i++){
//         return sum += i
//         }
//     }else if(a <= b){
//         for(let i = a; i <= b; i++){
//            return sum
//         }
//     }
//     return sum
// }


// ❌ мое решение. Проверку не прошло
// function getSum(a, b){
// if(a === b){
//     return a
// }else{
//     return (a+b)*(b-a+1)/2
// }
// }



// лучшее решение кодварс
function getSum(a, b){
    let min = Math.min(a, b),
        max = Math.max(a, b);
    return (max - min + 1) * (min + max) / 2;
}

console.log(getSum(-1,2));