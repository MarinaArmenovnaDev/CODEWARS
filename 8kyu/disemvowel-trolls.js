// ❓ Тролли атакуют ваш раздел комментариев!

// Распространенный способ решения этой проблемы — удалить все гласные буквы из комментариев троллей, нейтрализовав угрозу.

// Ваша задача — написать функцию, которая принимает строку и возвращает новую строку, в которой удалены все гласные.

// Например, строка «Этот сайт для неудачников LOL!» превратится в «Ths wbst s fr lsrs LL!».

// Примечание: в данном случае ката yне считается гласной.


// ✅ SOLUTION:

function disemvowel(str) {
    const noVowels2 = str.replace(/[aeiou]/gi, '');
    return noVowels2;
  }

  console.log(disemvowel('Marina') );
