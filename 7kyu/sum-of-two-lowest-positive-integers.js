// ❓ Создайте функцию, которая возвращает сумму двух наименьших положительных чисел, заданных массивом из минимум 4 положительных целых чисел. Не будут переданы числа с плавающей точкой или неположительные целые числа.

// Например, если массив передается как [19, 5, 42, 2, 77], то вывод должен быть 7.

// [10, 343445353, 3453445, 3453545353453]должен вернуться 3453455.





// ✅ SOLUTION:
function sumTwoSmallestNumbers(numbers) {  
   let min1 = Infinity
   let min2 = Infinity
   for (let i = 0; i < numbers.length; i++) {
    if(numbers[i]< min1 && numbers.length >= 4){
        min2 = min1
        min1 = numbers[i]  
   }else if(numbers[i] < min2 && numbers[i] !== min1 && numbers.length >= 4 ){
        min2 = numbers[i]
   }
    
   }
return min1+min2
}

  console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));



//   function findTwoMinNumbers(arr) {
//     let min1 = Infinity;
//     let min2 = Infinity;
  
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] < min1) {
//         min2 = min1;
//         min1 = arr[i];
//       } else if (arr[i] < min2 && arr[i] !== min1) {
//         min2 = arr[i];
//       }
//     }
  
//     return [min1, min2];
//   }


//   var task=[345, 865, 387, 286, 983, 276, 687, 234, 918, 631, 397, 463, 928, 285, 469];
// // variant 2
// var results = [];
// var max = task[0];

// for (let n = 0; n < task.length; n++) {
//   if (task[n] > max) {
//     max = task[n];
//   }
// }
// results.push([max, task.indexOf(max)]);

// max = task[1];
// for (let n = 0; n < task.length; n++) {
//   if (task[n] > max) {
//     if (n !== results[0][1]) {
//       max = task[n];
//     }
//   }
// }
// results.push([max, task.indexOf(max)]);

// alert("variant 2: " + results[0][0] + " " + results[1][0]);