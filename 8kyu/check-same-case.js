// ❓ Напишите функцию, которая будет проверять, являются ли два заданных символа одинаковыми.

// Если какой-либо из символов не является буквой, вернуть-1
// Если оба символа имеют одинаковый регистр, вернуть1
// Если оба символа являются буквами, но не в одном регистре, вернуть0
// Примеры
// 'a'и 'g'возвращается1

// 'A'и 'C'возвращается1

// 'b'и 'G'возвращается0

// 'B'и 'g'возвращается0

// '0'и '?'возвращается-1

// ✅ SOLUTION:
function sameCase(a, b){
  if(!/[a-zA-Z]/.test(a) || !/[a-zA-Z]/.test(b)){
return -1
  }else if((a === a.toLowerCase() && b === b.toLowerCase()) || 
  (a === a.toUpperCase() && b === b.toUpperCase())){
    return 1
  }
  return 0
  }

  console.log(sameCase('F', '!'));