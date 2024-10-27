// ❓ Задача
// Данную строку strперевернуть и исключить все неалфавитные символы.

// Пример
// Для str = "krishan", вывод должен быть "nahsirk".

// Для str = "ultr53o?n", вывод должен быть "nortlu".

// Ввод/вывод
// [input]нитьstr
// Строка состоит из строчных латинских букв, цифр и символов.

// [output]строка


// ✅ SOLUTION:
function reverseLetter(str) {
  let res = []
  for (let i = 0; i < str.length; i++) {
    if(str[i] >= 'a' && str[i]<= 'z'){
        res.push(str[i])
    }
   
  }
  return res.reverse().join('')
    
  }

  console.log(reverseLetter("krish?an"));
