//❓Вам даны два массива строк a1и a2. Каждая строка состоит из букв от aдо z. Пусть x— любая строка из первого массива, а y— любая строка из второго массива.
//
// Find max(abs(length(x) − length(y)))
//
// Если a1и/или a2пусты, то return -1в каждом языке, за исключением Haskell (F#), где вы вернете Nothing(None).
//
// Пример:
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13

//✅ SOLUTION:
function mxdiflg(a1, a2) {
    if(a1.length === 0 || a2.length=== 0) return -1;
   const maxlenA1 = a1.map(str => str.length);
   const maxlenA2 = a2.map(str => str.length);

   const mathMinA1 = Math.min(...maxlenA1);
   const mathMaxA1 = Math.max(...maxlenA1);

    const mathMinA2 = Math.min(...maxlenA2);
    const mathMaxA2 = Math.max(...maxlenA2);

    const dif1 = Math.abs(mathMaxA1 - mathMinA2);
    const dif2 = Math.abs(mathMaxA2 - mathMinA1);

   return Math.max(dif1,dif2)
}

console.log(mxdiflg(["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"], ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]));
