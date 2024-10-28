// ❓Дана строка, сделайте заглавными буквы, которые занимают четные и нечетные индексы по отдельности, и верните, как показано ниже. Индекс 0будет считаться четным.

// Например, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. Дополнительные примеры см. в тестовых случаях.

// Входные данные будут представлять собой строку в нижнем регистре без пробелов.

// Удачи!

// ✅ SOLUTION:
function capitalize(s){
res1 = s.split('').map((el, index) => index % 2 === 0 ? el.toUpperCase() : el).join("")
res2 = s.split('').map((el, index) => index % 2 === 1 ? el.toUpperCase() : el).join("")
return [res1, res2]
  };

  console.log(capitalize("abcdef"));