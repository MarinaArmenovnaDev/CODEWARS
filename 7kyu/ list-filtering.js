// ❓ В этом ката вы создадите функцию, которая принимает список неотрицательных целых чисел и строк и возвращает новый список с отфильтрованными строками.

// Пример
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]




// ✅ SOLUTION:

// function filter_list(l) {
//     let res = []
//     for (let i = 0; i < l.length; i++) {
//     if(typeof(l[i]) === 'number'){
//         res.push(l[i])
//     }
        
//     }
//     return res
//   }

  const filter_list = (l) => {
    let result = l.filter((i)=> typeof(i) === 'number')
    return result
  }

  console.log(filter_list([1,2,'a','b']));
