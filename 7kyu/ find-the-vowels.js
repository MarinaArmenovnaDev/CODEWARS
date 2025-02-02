// ❓ Мы хотим узнать индекс гласных в данном слове, например, в слове super есть две гласные (вторая и четвертая буквы).
// Таким образом, если задана строка «super», мы должны вернуть список [2, 4].

//Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]
// ПРИМЕЧАНИЯ
// Гласные в этом контексте относятся к: aeiouy (включая заглавные буквы)
// Это индексируется от [1..n](не нулевой индекс!)

// ✅ SOLUTION:

function vowelIndices(word){
    const char = new Set(['a', 'e', 'i', 'o', 'u', 'y'])
   return word.toLowerCase().split('').reduce((indices, el, index) => {
    if (char.has(el)) {
        indices.push(index + 1);
    }
    return indices;
}, [])
  }

  console.log(vowelIndices("eUper"));
