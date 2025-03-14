//❓ Создайте функцию close_compare, которая принимает 3 параметра: a, bи необязательный margin. Функция должна возвращать значение, aкоторое ниже, близко или выше b.

// Обратите внимание на следующее:

// Когда aбудет близко к b, вернитесь 0.
// В этом задании aсчитается «близким к», bесли marginбольше или равно абсолютному расстоянию между aи b.
// В противном случае...

// Если aменьше b, вернуть -1.

// Если aбольше b, вернуть 1.

// Если marginне указано, считайте, что это ноль.

// Предполагать:margin >= 0

// Совет: в некоторых языках параметры можно сделать необязательными.

// Пример 1
// Если a = 3, b = 5, и margin = 3, то close_compare(a, b, margin)следует вернуть 0.

// Это потому, что aи bнаходятся на расстоянии не более 3 цифр друг от друга.

// Пример 2
// Если a = 3, b = 5, и margin = 0, то close_compare(a, b, margin)следует вернуть -1.

// Это происходит потому, что расстояние между aи bбольше 0 и aменьше b.



// ✅ SOLUTION:
function closeCompare(a, b, margin = 0){
    if (Math.abs(a - b) <= margin) {
        return 0;
      }
      if (a < b) {
        return -1;
      }
      return 1;
    }
 

console.log(closeCompare(1.99, 5,0));