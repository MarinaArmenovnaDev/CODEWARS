// ❓ Напишите функцию с именем setAlarm/ set_alarm/ set-alarm/ setalarm(в зависимости от языка), которая получает два параметра. Первый параметр, employed, является истинным, когда вы работаете, а второй параметр, vacationявляется истинным, когда вы в отпуске.

// Функция должна возвращать значение true, если вы работаете и не в отпуске (потому что это обстоятельства, при которых вам нужно установить будильник). В противном случае она должна возвращать значение false. Примеры:


// ✅ SOLUTION:

function setAlarm(employed, vacation){
if(employed && vacation === false){
    return true
}else {
    return false
}
}

// function setAlarm(employed, vacation){
// return employed && vacation === false 
// }   тернарный оператор