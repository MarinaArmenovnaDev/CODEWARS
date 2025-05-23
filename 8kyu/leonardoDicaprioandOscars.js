// ❓  if oscar was (integer) 88, you have to return "Leo finally won the oscar! Leo is happy".
// if oscar was 86, you have to return "Not even for Wolf of wallstreet?!"
// if it was not 88 or 86 (and below 88) you should return "When will you give Leo an Oscar?"
// if it was over 88 you should return "Leo got one already!"

// Вам нужно написать функцию, описывающую Лео:

// function leo(oscar) {

// }
// если oscar был (целое число) 88, вы должны вернуть "Лео наконец-то получил Оскар! Лео счастлив".
// если oscar был 86, вы должны вернуть "Даже не для Волка с Уолл-стрит?!"
// если он не был 88 или 86 (и меньше 88), вы должны вернуть "Когда вы дадите Лео Оскар?"
// если он был больше 88, вы должны вернуть "Лео уже получил один!"

// ✅ SOLUTION:

function leo(oscar){
 return oscar === 88 
 ? "Leo finally won the oscar! Leo is happy" 
 : oscar === 86
 ? "Not even for Wolf of wallstreet?!"
 : oscar !== 88 && oscar !== 86 && oscar < 88 
 ? "When will you give Leo an Oscar?"
 : "Leo got one already!"
 
}
