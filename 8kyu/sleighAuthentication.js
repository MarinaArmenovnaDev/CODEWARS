// ❓ Наступает Рождество, и многие мечтали прокатиться на санях Санты. Но, конечно, только самому Санте разрешено пользоваться этим замечательным транспортом. И для того, чтобы убедиться, что только он может сесть в сани, существует механизм аутентификации.

// Ваша задача — реализовать authenticate()метод саней, который принимает имя человека, который хочет сесть в сани, и секретный пароль. Если и только если имя равно "Санта-Клаус", а пароль "Хо-хо-хо!" (да, даже у Санты есть секретный пароль с заглавными и строчными буквами и специальными символами :D) , возвращаемое значение должно быть true. В противном случае он должен вернуть false.

// Примеры:

// var sleigh = new Sleigh();
// sleigh.authenticate("Santa Claus", "Ho Ho Ho!"); // must return TRUE

// sleigh.authenticate("Santa", "Ho Ho Ho!"); // must return FALSE
// sleigh.authenticate("Santa Claus", "Ho Ho!"); // must return FALSE
// sleigh.authenticate("jhoffner", "CodeWars"); // Nope, even Jake is not allowed to use the sleigh ;)

// ✅ SOLUTION:

function Sleigh() {}

Sleigh.prototype.authenticate = function(name, password) {
  return name === "Santa Claus" && password === "Ho Ho Ho!" ? true : false
};
