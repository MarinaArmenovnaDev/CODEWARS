// ❓ Подсчитать количество вхождений каждого символа и вернуть его как (список кортежей) в порядке появления. Для пустого вывода вернуть (пустой список).

// Ознакомьтесь с настройкой решения для точной реализации структуры данных в зависимости от вашего языка.

// Пример:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

// ✅ SOLUTION:
const orderedCount = function (text) {
    let charCount = {};
    let order = [];
    for (const letter of text) {
        if (charCount[letter] !== undefined) {
            charCount[letter]++;
        } else {
            charCount[letter] = 1;
            order.push(letter);
        }
    }
    const res = order.map(letter => [letter, charCount[letter]]);
    return res;
};

  console.log(orderedCount("abracB"));