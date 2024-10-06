// ❓Напишите функцию RemoveExclamationMarks, которая удаляет все восклицательные знаки из заданной строки.

// ✅ SOLUTION:
function removeExclamationMarks(s){
    const res = s.split("").filter((str) => str !== '!').join("")
    return res;
  }

  console.log(removeExclamationMarks("Hello World!"));
