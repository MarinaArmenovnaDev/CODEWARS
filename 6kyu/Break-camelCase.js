// ❓Завершите решение так, чтобы функция разрывала верблюжий регистр, используя пробел между словами.

// Пример
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// ✅ SOLUTION:

function solution(string) {
    return string.replace(/([A-Z])/g, ' $1').trim();
  }

  console.log(solution("camelCasingBgt"));
