// ❓ Строка заглавная?
// Задача
// Создайте метод, который позволит проверить, состоит ли строка ВСЕХ ЗАГЛАВНЫХ букв.

// Примеры (вход -> выход)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True
// В этом ката считается, что строка полностью состоит из ЗАГЛАВНЫХ БУКВ, если она не содержит ни одной строчной буквы, поэтому любая строка, не содержащая вообще ни одной буквы, тривиально считается полностью состоящей из ЗАГЛАВНЫХ БУКВ.


// ✅ SOLUTION:
String.prototype.isUpperCase = function() {
   for (let i = 0; i < this.length; i++) {
    if(this[i] !== this[i].toUpperCase()){
        return false
    }
   }
   return true
  }

console.log('H'.isUpperCase());