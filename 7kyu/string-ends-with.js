// ❓Завершите решение так, чтобы оно возвращало значение true, если первый переданный аргумент (строка) заканчивается вторым аргументом (также строкой).

// Примеры:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false




// ✅ SOLUTION:

function solution(str, ending){
   return str.endsWith(ending)
  }

  console.log(solution('abc', 'bf'));
