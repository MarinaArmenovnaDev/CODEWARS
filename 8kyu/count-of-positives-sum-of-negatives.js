// ❓ Дан массив целых чисел.

// Верните массив, где первый элемент — количество положительных чисел, а второй элемент — сумма отрицательных чисел. 0 не является ни положительным, ни отрицательным.

// Если входные данные являются пустым массивом или равны нулю, вернуть пустой массив.

// Пример
// Для ввода [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]следует вернуть [10, -65].


// ✅ SOLUTION:

function countPositivesSumNegatives(input) {
    if(input === null || input == 0){
        return []
    }
    let posCount = 0
    let sum = 0
    for (let i = 0; i < input.length; i++) {
        if(input[i] > 0){
            posCount ++
        }else{
            sum += input[i]
        }
    }
   
return [posCount, sum]
}




console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));