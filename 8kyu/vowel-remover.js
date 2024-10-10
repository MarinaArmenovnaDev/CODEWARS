// ❓ Создайте функцию, которая shortcutудаляет строчные гласные ( a, e, i, o, u) в заданной строке.

// Примеры
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// не беспокойтесь о заглавных гласных
// yне считается гласной для этой ката


// ✅ SOLUTION:
function shortcut (string) {
    const glasn = ['a', 'e', 'i', 'o', 'u']
   return string.split("").filter(a => !glasn.includes(a)).join("")
   

}

  console.log(shortcut("hello"));