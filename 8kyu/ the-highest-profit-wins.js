// ❓ История
// У Бена очень простая идея, как получить прибыль: он что-то покупает и продает снова. Конечно, это не принесло бы ему никакой прибыли, если бы он просто покупал и продавал по одной и той же цене. Вместо этого он купит по самой низкой возможной цене и продаст по самой высокой.

// Задача
// Напишите функцию, которая возвращает минимальное и максимальное число из указанного списка/массива.

// Примеры (Вход -> Выход)
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]
// Замечания
// Все массивы или списки всегда будут иметь по крайней мере один элемент, поэтому вам не нужно проверять длину. Кроме того, ваша функция всегда получит массив или список, вам не нужно проверять на null, undefinedили подобное.

// ✅ SOLUTION:

// function minMax(arr){
//     let min = arr[0]
//     let max = min
//     for (let i = 0; i < arr.length; i++) {
//         if(min > arr[i]){
//             min = arr[i]
//         }else {
//             max = arr[i]
//         }
//         }
//         return [min, max]
// }


function minMax(arr){
    let max =  Math.max(...arr)
    let min =  Math.min(...arr)
    return [min, max]  
}

console.log(minMax([234,48765.289746765762]));









