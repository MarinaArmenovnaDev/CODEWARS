// ❓Проверьте, содержит ли строка одинаковое количество символов 'x' и 'o'. Метод должен возвращать логическое значение и быть нечувствительным к регистру. Строка может содержать любой символ.

// Примеры ввода/вывода:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// ✅ SOLUTION:
function XO(str) {
    let stro = str.toUpperCase()
    let x = []
    let o = []
    for (let i = 0; i < stro.length; i++) {
        if(stro[i] === 'X'){
            x.push('X')
        }else if(stro[i] === 'O'){
            o.push('O')
        }
    }
    return x.length === o.length;
}
console.log(XO(""));



// function groupByValue(arr) {
//     const grouped = {};

//     arr.forEach(item => {
//         if (!grouped[item]) {
//             grouped[item] = [];
//         }
//         grouped[item].push(item);
//     });

//     return Object.values(grouped);
// }
