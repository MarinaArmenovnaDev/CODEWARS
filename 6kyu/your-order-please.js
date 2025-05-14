// ❓ Ваша задача — отсортировать заданную строку. Каждое слово в строке будет содержать одно число. Это число — позиция, которую слово должно занимать в результате.

// Примечание: числа могут быть от 1 до 9. Таким образом, первым словом будет 1 (а не 0).

// Если входная строка пуста, вернуть пустую строку. Слова во входной строке будут содержать только допустимые последовательные числа.

// Примеры
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

// ✅ SOLUTION:

function order(words){
return words.split(" "). sort((a,b) => {
    const numA = parseInt(a.match(/\d+/)[0]); 
    const numB = parseInt(b.match(/\d+/)[0]);
    return numA-numB
})
.join(' ')
  }

  console.log(order("is2 Thi1s T4est 3a"));
