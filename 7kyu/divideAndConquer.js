// ❓ Дан смешанный массив числовых и строковых представлений целых чисел. Сложите нестроковые целые числа и вычтите сумму строковых целых чисел.

// Возврат в виде числа.

// ✅ SOLUTION:

function divCon(x){
const integer =  x.filter(el => Number.isInteger(el))
let sumOfInteger = 0
  for (let i = 0; i < integer.length; i++) {
    sumOfInteger += integer[i]
  }
  const stroke = x.filter(el => typeof(el) === 'string')
  const sumOfStroke = stroke.map(Number).reduce((a, b) => a + b, 0)
 
  return sumOfInteger - sumOfStroke

}


console.log(divCon([9, 3, '7', '3']));