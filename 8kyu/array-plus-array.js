// ❓ Я новичок в программировании и теперь хочу получить сумму двух массивов... На самом деле сумму всех их элементов. Буду признателен за помощь.

// P.S. Каждый массив содержит только целые числа. Вывод — тоже число.


// ✅ SOLUTION:

function arrayPlusArray(arr1, arr2) {
    let sum = 0
    for (let i = 0; i < arr1.length; i++) {
        sum = sum + arr1[i]
    }
        
    for (let a = 0; a < arr2.length; a++) {
        sum = sum + arr2[a]
    }  
    
    return sum; //something went wrong
}



console.log(arrayPlusArray([1, 1], [2, 2]));