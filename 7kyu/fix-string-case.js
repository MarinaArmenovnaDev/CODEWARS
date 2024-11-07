// ❓ В этом Ката вам будет дана строка, которая может содержать как заглавные, так и строчные буквы, и ваша задача — преобразовать эту строку либо в строку, состоящую только из строчных букв, либо только из заглавных букв на основе:

// вносите как можно меньше изменений.
// если строка содержит одинаковое количество заглавных и строчных букв, преобразовать строку в строчные.
// Например:

// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.


// ✅ SOLUTION;

function solve(s){
    let countLow = 0
    let countUpp =0

    for (let char of s) {
        if (char === char.toLowerCase()) {
            countLow++;
        } else {
            countUpp++;
        }
    }

    if (countLow >= countUpp) {
        return s.toLowerCase();
    } else {
        return s.toUpperCase();
    }
}

console.log(solve("coDe"));
console.log(solve("cODE"));
