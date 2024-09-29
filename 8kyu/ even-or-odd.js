// ❓ Создайте функцию, которая принимает целое число в качестве аргумента
//  и возвращает значение "Even"для четных или "Odd"нечетных чисел.




// ✅ SOLUTION:

function evenOrOdd(number) {
return number % 2 === 0 ? "Even": "Odd"
}

console.log(evenOrOdd(6));