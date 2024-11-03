// ❓ Создайте функцию, которая принимает строку и один символ и возвращает целое число — количество вхождений второго аргумента в первый.

// 0Если не удалось найти ни одного вхождения, следует вернуть количество .

// ("Hello", 'o')  =>  1
// ("Hello", 'l')  =>  2
// ("", 'z')       =>  0
// Примечания
// Первый аргумент может быть пустой строкой.
// В языках, не имеющих отдельного символьного типа данных, второй аргумент будет строкой длины1



// ✅ SOLUTION:

function strCount(str, letter){ 
    let count = 0 
   for (let i = 0; i < str.length; i++) {
    if(str[i] === letter){
        count ++
    }
   }
   return count
  }

  console.log(strCount("Hello", 'o'));
