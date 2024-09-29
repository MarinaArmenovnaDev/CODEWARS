// ❓ Изограмма — это слово, в котором нет повторяющихся букв, последовательных или непоследовательных. Реализуйте функцию, которая определяет, является ли строка, содержащая только буквы, изограммой. Предположим, что пустая строка — изограмма. Игнорировать регистр букв.

// Пример: (Вход -> Выход)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)


// ✅ SOLUTION:
//РЕШИТЬ С ПОМОЩЬЮ МЕТОДОВ!!!!!
function isIsogram(str){
    let newStr = str.spl)
   for (let i = 0; i < str.length; i++) {
    newStr = str.indexOf(str[i])
    if(newStr === -1){
        newStr = true
    }else{
        newStr = false
    }
    
   }
   retu
  }

  console.log(isIsogram("Dermatoglyphics".toLocaleLowerCase()));