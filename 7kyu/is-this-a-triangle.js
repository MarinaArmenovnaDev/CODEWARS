// ❓Реализуйте функцию, которая принимает 3 целочисленных значения a, b, c. Функция должна возвращать true, если треугольник может быть построен со сторонами заданной длины, и false в любом другом случае.

// (В этом случае все треугольники должны иметь поверхность больше 0, чтобы быть принятыми).

// Примеры:

// Input -> Output
// 1,2,2 -> true
// 4,2,3 -> true
// 2,2,2 -> true
// 1,2,3 -> false
// -5,1,3 -> false
// 0,2,3 -> false
// 1,2,9 -> false 

// ✅ SOLUTION:
function isTriangle(a,b,c){
    return (((a+b) > c && (b+c) > a && (c+a) > b) && a > 0 && b > 0 && c > 0) ? true : false
}

console.log(isTriangle(1,2,3));