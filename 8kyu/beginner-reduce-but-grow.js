// ❓ Учитывая непустой массив целых чисел, вернуть результат умножения значений по порядку. Пример:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24


// ✅ SOLUTION:
function grow(x){
let pr = 1
for (let i = 0; i < x.length; i++) {
    pr *= x[i]
}
return pr
}

console.log(grow([1,2,3,4]));