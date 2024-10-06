// ❓ Суммировать все числа заданного массива (cq. list), за исключением самого высокого и самого низкого элемента (по значению, а не по индексу!).

// Наивысшим или наинизшим элементом является соответственно один элемент на каждом краю, даже если их несколько с одинаковым значением.

// Не забывайте о проверке входных данных.

// Пример
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6



// ✅ SOLUTION:


function sumArray(array) {
    if (!array || array.length <= 2) {
        return 0;
    }

    const min = Math.min(...array)
    const max = Math.max(...array)
    const sum = array.reduce((acc, el) => acc + el, 0);
    const result = sum - min - max
    return result
}
console.log(sumArray([ 6, 2, 1, 8, 10 ]));






// function sumArray(array) {
    //     if (!array || array.length <= 2) {
    //         return 0;
    //     }
    
    // let min = array[0]
    // let max = array[0]
    // let sum = 0
    // for (let i = 0; i < array.length; i++) {
    //     if(array[i] < min){
    //         min = array[i]    
    //     }
    //     if(array[i] > max ){
    //         max = array[i]
    //     }
    //     sum += array[i]
        
    // }
    // return sum - min - max
    // }
