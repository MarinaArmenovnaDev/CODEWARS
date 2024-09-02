//❓ В этом ката речь идет об умножении заданного числа на восемь, если это четное число, и на девять в противном случае.

// ✅ SOLUTION:

function simpleMultiplication(number) {
return number % 2 === 0 ? number * 8 : number * 9;
}
