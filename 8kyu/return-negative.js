//❓В этом простом задании вам дано число и вы должны сделать его отрицательным. Но, может быть, число уже отрицательное?
// Примеры
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// Примечания
// Число может быть уже отрицательным, в этом случае никаких изменений не требуется.
// Ноль (0) не проверяется на наличие какого-либо конкретного знака. Отрицательные нули не имеют математического смысла.


// ✅ SOLUTION

function makeNegative(num) {
return num > 0 ? -num : num;
}

//     if(num < 0){
//         return -num
//     }else {
//         return num
//     }
//   }