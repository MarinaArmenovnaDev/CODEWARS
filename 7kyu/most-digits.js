// ❓ Найдите число с наибольшим количеством цифр.

// Если два числа в массиве аргументов имеют одинаковое количество цифр, вернуть первое число в массиве.

// ✅ SOLUTION:
function findLongest(array){
    let maxChislo = 0
    let res = array[0]

    for (let i = 0; i < array.length; i++) {
      let num = String(array[i]).length

      if(num > maxChislo){
        maxChislo = num;
        res = array[i];
      }

    }
return res
    }
  

  console.log(findLongest([8, 9, 101]));
