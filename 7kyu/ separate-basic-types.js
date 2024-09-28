// ❓ Дано: последовательность значений разного типа (число, строка, логическое значение). Вы должны вернуть объект с отдельными свойствами для каждого из типов, представленных во входных данных. Каждое свойство должно содержать массив соответствующих значений.

// сохранить порядок значений как во входном массиве
// если тип не представлен во входных данных, соответствующее свойство не ожидается
// Итак, для этого ввода:

// ['a', 1, 2, false, 'b']
// Ожидаемый результат:

// {
//   number: [1, 2],
//   string: ['a', 'b'],
//   boolean: [false]
// }

// ✅ SOLUTION:
function separateTypes(input) {
let result = {}
let num = []
let str = []
let bool = []
for (let i = 0; i < input.length; i++) {
    if(typeof input[i]==='number'){
        num.push(input[i])
        result.number = num
    }else if(typeof input[i]==='string'){
        str.push(input[i])
        result.string = str
    }else{
        bool.push(input[i])
        result.boolean = bool
    }
       
}
return result
}

console.log(separateTypes(['a', 1, 2, false, 'b']));