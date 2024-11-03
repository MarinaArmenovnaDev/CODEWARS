// ❓ Создайте функцию, которая принимает на входе 2 целых числа в виде строки и выводит сумму (также в виде строки):

// Пример: ( Вход1, Вход2 -->Выход )

// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"
// Примечания:

// Если какой-либо из входных данных представляет собой пустую строку, считайте ее нулем.



// ✅ SOLUTION:

function sumStr(a,b) {
    const el1 = parseInt(a) || 0;
    const el2 = parseInt(b) || 0;
    const result = el1 + el2
    return result.toString()

}


// function sumStr(a,b) {
//     return String(Number(a)+Number(b));
//   }



console.log(sumStr("4", "5"));