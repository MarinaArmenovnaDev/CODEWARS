// ❓ Дополните функцию/метод так, чтобы он возвращал URL-адрес, #удалив все, что находится после якоря ( ).

// Примеры
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

// ✅ SOLUTION:
function removeUrlAnchor(url){
    return url.split('#')[0]
  }
console.log(removeUrlAnchor("www.codewars.com#about"));