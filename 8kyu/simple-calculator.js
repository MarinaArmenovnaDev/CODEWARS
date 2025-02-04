// ❓Вам необходимо создать простой калькулятор, который возвращает результат сложения, вычитания, умножения или деления двух чисел.

// Ваша функция будет принимать три аргумента:
// Первый и второй аргументы должны быть числами.
// Третий аргумент должен представлять знак, указывающий операцию, которую следует выполнить над этими двумя числами.

// если переменные не являются числами или знак не принадлежит списку выше, должно быть возвращено сообщение «неизвестное значение».

// Пример:
// calculator(1,2,"+"); //=> result will be 3
// calculator(1,2,"&"); //=> result will be 
// calculator(1,"k","*"); //=> result will be "unknown value"

// ✅ SOLUTION:
function calculator(a, b, sign) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return "unknown value";
      }
  // Проверяем, что sign является допустимым знаком операции
  if (!['+', '-', '*', '/'].includes(sign)) {
    return "unknown value";
  }
  
  switch (sign) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      // Проверяем деление на ноль
      if (b === 0) {
        return "unknown value";
      }
      return a / b;
    default:
      return "unknown value";
  }
}

console.log(calculator(8, h, '*'));
