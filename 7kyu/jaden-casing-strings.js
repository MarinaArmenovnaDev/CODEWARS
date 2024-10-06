// ❓ Джейден Смит, сын Уилла Смита, звезда таких фильмов, как «Парень-каратист» (2010) и «После нашей эры» (2013). Джейден также известен своей философией, которую он доносит через Twitter . Когда он пишет в Twitter, он известен тем, что почти всегда пишет каждое слово с заглавной буквы. Для простоты вам придется писать каждое слово с заглавной буквы, посмотрите, как должны выглядеть сокращения в примере ниже.

// Ваша задача — преобразовать строки в то, как их написал бы Джейден Смит. Строки — это настоящие цитаты Джейдена Смита, но они не написаны заглавными буквами так, как он изначально их набирал.

// Пример:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"



// ✅ SOLUTION:
String.prototype.toJadenCase = function () {
    return this.split(" ").map ( word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ")
  };

  const a = "How can mirrors be real if our eyes aren't real"
  const result = a.toJadenCase()
  console.log(result);