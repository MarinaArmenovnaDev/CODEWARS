//❓Даны строка строчных букв и массив целочисленных индексов. Преобразовать все буквы с заданными индексами в заглавные. Если индекс выходит за пределы строки, его следует игнорировать.
//
// Примеры:
// "abcdef", [1,2,5]     ==> "aBCdeF"
// "abcdef", [1,2,5,100] ==> "aBCdeF" // There is no index 100.
//✅ SOLUTION:
function capitalize(string, indices) {
  return string.split('')
      .map((char, i) => indices.includes(i)? char.toUpperCase() : char)
    .join('');

}

console.log(capitalize("abcdef", [1,2,5]));
