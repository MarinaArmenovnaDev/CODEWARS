//  ❓ Обзор
// В некоторых языках сценариев, таких как PHP, существует логический оператор (например &&, ||, and, , or, и т. д.), называемый «Исключающее ИЛИ» (отсюда и название этого Ката). Исключающее ИЛИ оценивает два булевых значения. Затем он возвращает значение, trueесли только одно из двух выражений истинно , falseв противном случае. Например:

// false xor false == false // since both are false
// true xor false == true // exactly one of the two expressions are true
// false xor true == true // exactly one of the two expressions are true
// true xor true == false // Both are true.  "xor" only returns true if EXACTLY one of the two expressions evaluate to true.
// Задача
// Поскольку мы не можем определять ключевые слова в Javascript (ну, по крайней мере, я не знаю, как это сделать), ваша задача — определить функцию, xor(a, b)где aи b— два выражения, которые нужно оценить. Ваша xorфункция должна иметь поведение, описанное выше, возвращая , trueесли только одно из двух выражений оценивается как true , falseв противном случае.

// ✅ SOLUTION:

function xor(a, b) {
    return (a || b) && !(a && b);
}



