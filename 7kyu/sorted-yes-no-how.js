// ❓Завершите метод, который принимает массив целых чисел и возвращает одно из следующих значений:

// "yes, ascending"- если числа в массиве отсортированы в порядке возрастания
// "yes, descending"- если числа в массиве отсортированы в порядке убывания
// "no"- в противном случае
// Можно предположить, что массив всегда будет действителен и всегда будет один правильный ответ.

// ✅ SOLUTION:

function isSortedAndHow(array) {
    let ascending = true
    let descending = true
    for (let i = 0; i < array.length; i++) {
      if(array[i+1]> array[i]){
       descending = false
      }else if(array[i+1]< array[i]){
        ascending = false
      } 
    }

    if(ascending){
        return "yes, ascending"
    }else if(descending){
        return  "yes, descending"
    }else{
        return  'no'
    }
}




console.log(isSortedAndHow([4,90,123]));