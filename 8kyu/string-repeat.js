// ❓ Напишите функцию, которая принимает в качестве параметров целое число n и строку s 
// и возвращает строку, sповторяющуюся ровно n раз.

// Примеры (вход -> выход)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"




// ✅ SOLUTION:
function repeatStr (n, s) {
    return s.repeat(n)
  }

  console.log(repeatStr (5, "Hello") );