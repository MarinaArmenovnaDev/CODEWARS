// ❓ Описание:

// Мы хотим сгенерировать функцию, которая вычисляет ряд, начиная с 0 и заканчивая заданным числом.

// Пример:
// Вход:

// > 6
// Выход:

// 0+1+2+3+4+5+6 = 21

// Вход:

// > -15
// Выход:

// -15<0

// Вход:

// > 0
// Выход:

// 0=0


// ✅ SOLUTION:
var SequenceSum = (function() {
    function SequenceSum() {}
  
    SequenceSum.showSequence = function(count) {
      if (count < 0) {
        return `${count}<0`;
      } else if (count === 0) {
        return '0=0';
      } else {
        let sum = 0;
        let sequence = '';
        for (let i = 0; i <= count; i++) {
          sum += i;
          sequence += i;
          if (i < count) {
            sequence += '+';
          }
        }
        return `${sequence} = ${sum}`;
      }
    };
  
    return SequenceSum;
  })();