// ❓ Цель состоит в том, чтобы создать функцию двух входов numberи power, которая «возвышает» numberдо power( т.е. умножает numberсама на себя powerраз).

// Примеры
// numberToPower(3, 2)  // -> 9 ( = 3 * 3 )
// numberToPower(2, 3)  // -> 8 ( = 2 * 2 * 2 )
// numberToPower(10, 6) // -> 1000000
// Примечание : Math.powи некоторые другие Mathфункции, такие как eval()и , **отключены.



// ✅ SOLUTION:
function numberToPower(number, power){
    console.info(Math.log2(1024));
    let res = 1
 for (let i = 0; i < power ; i++) {
   res = res * number
    
 }
 return res
  }

  console.log(numberToPower(10, 6));


  //public static double power(double base, int exponent) {
//     double result = 1;
//     for (int i = 0; i < Math.abs(exponent); i++) {
//         result *= base;
//     }
//     return exponent < 0 ? 1 / result : result;
// }