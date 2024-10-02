// ❓ Изограмма — это слово, в котором нет повторяющихся букв, последовательных или непоследовательных. Реализуйте функцию, которая определяет, является ли строка, содержащая только буквы, изограммой. Предположим, что пустая строка — изограмма. Игнорировать регистр букв.

// Пример: (Вход -> Выход)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)


// ✅ SOLUTION:
function isIsogram(str){
    const newStr = str.toLowerCase()
    let arr = []
   for (let i = 0; i < newStr.length; i++) {
    const char = newStr[i]
    if(arr.includes(char)){
       return false
    }
    arr.push(char)  
    } 
    return true 
    }
   

