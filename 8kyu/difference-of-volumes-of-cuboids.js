// ❓ В этом простом упражнении вы создадите программу, которая будет принимать два списка целых чисел, aи b. Каждый список будет состоять из 3 положительных целых чисел больше 0, представляющих размеры прямоугольных параллелепипедов aи b. Вы должны найти разницу объемов прямоугольных параллелепипедов независимо от того, какой из них больше.

// Например, если переданы параметры ([2, 2, 3], [5, 4, 1]), то громкость aравна 12, а громкость bравна 20. Следовательно, функция должна вернуть 8.

// Ваша функция будет протестирована как с использованием готовых примеров, так и с использованием случайных примеров.

// Если можете, попробуйте написать это в одну строку кода.



// ✅ SOLUTION:

function findDifference(a, b) {
 return Math.abs(a[0]*a[1]*a[2]-b[0]*b[1]*b[2])
}
console.log(findDifference([2, 2, 3], [5, 4, 1]));