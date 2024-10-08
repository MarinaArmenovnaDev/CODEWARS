// ❓ Реализуйте функцию unique_in_order, которая принимает в качестве аргумента последовательность и возвращает список элементов без элементов с одинаковым значением рядом друг с другом, сохраняя исходный порядок элементов.

// Например:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]



// ✅ SOLUTION:
// var uniqueInOrder=function(iterable){
//     const newAr = [...new Set(iterable)]
//     return newAr
    
//   }

  var uniqueInOrder=function(iterable){
        return [...iterable].filter((element, index) => index === 0 || element !== iterable[index - 1]);
}

  console.log(uniqueInOrder('AAAABBBCCDAABBB'));