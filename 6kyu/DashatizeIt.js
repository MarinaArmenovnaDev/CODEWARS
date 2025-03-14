// ❓ Для заданного целого числа вернуть строку с '-'дефисами до и после каждой нечетной цифры, но не начинать и не заканчивать строку дефисом.

// Пример:

// 274 -> '2-7-4'
// 6815 -> '68-1-5'


// ✅ SOLUTION:
function dashatize(num) {
    num = Math.abs(num);
  
    const digits = num.toString().split('');
  
    // Обрабатываем каждую цифру
    const result = digits.map((digit) => {
        if (digit % 2 === 1) {
          return `-${digit}-`;
        }
        return digit;
      })
      .join('') 
      .replace(/(--)+/g, '-') 
      .replace(/^-|-$/g, '');
  
    return result;
  }
