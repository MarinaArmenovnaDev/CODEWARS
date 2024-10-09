// ❓ АЛЬТЕРНАТИВНЫЙ РЕГИСТР <=> АЛЬТЕРНАТИВНЫЙ РЕГИСТР
// Определите String.prototype.toAlternatingCase(или аналогичную функцию/метод, например, to_alternating_case / toAlternatingCase/ ToAlternatingCase​​на выбранном вами языке; подробности см. в исходном решении ) так, чтобы каждая строчная буква стала заглавной, а каждая заглавная буква стала строчной. Например:

// "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"
// "hello WORLD".toAlternatingCase() === "HELLO world"
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
// "12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
// "1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
// "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
// Как обычно, ваша функция/метод должны быть чистыми, т.е. они не должны изменять исходную строку.

// ✅ SOLUTION:
String.prototype.toAlternatingCase = function () {
    let result = ''
    for (let i = 0; i < this.length; i++) {
        if(this[i] === this[i].toUpperCase()){
            result += this[i].toLowerCase()
        }else{
            result += this[i].toUpperCase()
        }
    }
    return result
  }

  console.log("SSSSSS".toAlternatingCase());