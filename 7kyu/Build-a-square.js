// ❓ Я дам вам целое число. Верните мне фигуру такой же длины и ширины, как целое число. Целое число будет целым числом от 1 до 50.

// Пример
// n = 3, поэтому я ожидаю квадратную спинку 3x3, как показано ниже, в виде строки:

// +++
// +++
// +++

// ✅ SOLUTION:

function generateShape(integer){
const row = "+".repeat(integer)
const height = (row + "\n").repeat(integer).trim()
return height
}

console.log(generateShape(3));