// ❓Напишите функцию с именем sumDigits, которая принимает число в качестве входных данных и возвращает сумму абсолютных значений каждой из десятичных цифр числа.

// Например: ( Вход -> Выход )

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Предположим, что все числа на входе будут целыми значениями.

// ✅ SOLUTION:
function sumDigits(a) {
    const digitsArray = a.toString().split('')
    const numbersArray = digitsArray.filter(char => char !== '-').map(Number);
    const sum = numbersArray.reduce((acc, num) => acc + num, 0);
    return sum

}
console.log(sumDigits(99));