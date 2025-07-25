//❓Дан массив чисел, проверьте, являются ли какие-либо из чисел кодами символов для строчных гласных букв ( a, e, i, o, u).
//
// Если это так, измените значение массива на строку этой гласной.
//
// input [100,100,116,105,117,121]=>[100,100,116,"i","u",121] output Верните полученный массив.

// ✅ SOLUTION:
function isVow(a) {
    return a.map(el => el === 97
        ? "a"
        : el === 101
            ? "e"
            : el === 105
                ? "i"
                : el === 111
                    ? "o"
                    : el === 117
                        ? "u" : el
    ) // your code here
}

console.log(isVow([100,100,116,105,117,121]))
