// ❓ Если не можешь уснуть, просто посчитай овец!!

// Задача:
// 3Например, если задано неотрицательное целое число , вернуть строку с бормотанием: "1 sheep...2 sheep...3 sheep...". Ввод всегда будет допустимым, т. е. никаких отрицательных целых чисел.




// ✅ SOLUTION:

var countSheep = function (num){
    let result = ''
    for (let i = 1; i <=  num; i++) {
        result +=`${i} sheep...`
    } 
  return result
  }

  console.log(countSheep(3));