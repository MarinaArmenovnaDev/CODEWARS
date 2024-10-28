// ❓Напишите функцию, которая возвращает строку, в которой имя заменено фамилией.

// Пример (Вход -> Выход)
// "john McClane" --> "McClane john"

// ✅ SOLUTION:
function nameShuffler(str){
   return str.split(' ').reverse().join(' ')
  }

  console.log(nameShuffler("john McClane"));