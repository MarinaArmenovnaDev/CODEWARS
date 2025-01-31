//❓ Каждое число должно быть отформатировано так, чтобы оно округлялось до двух знаков после запятой. Вам не нужно проверять,
//  является ли ввод допустимым числом, поскольку в тестах используются только допустимые числа.

// Example:    
// 5.5589 is rounded 5.56   
// -3.3424 is rounded -3.34

// ✅ SOLUTION:

function twoDecimalPlaces(n) {
    return parseFloat(n.toFixed(2))
  }

  console.log(twoDecimalPlaces(-5.0870708y));
