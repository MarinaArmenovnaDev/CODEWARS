// ❓Создайте метод, который принимает в качестве входных данных имя, город и штат для приветствия человека. Обратите внимание, что nameэто будет массив, состоящий из одного или нескольких значений, которые должны быть объединены вместе с одним пробелом между ними, а длина массива nameв тестовых случаях будет меняться.

// Пример:

// ['John', 'Smith'], 'Phoenix', 'Arizona'
// Этот пример вернет строку John Smith! Welcome to Phoenix, Arizona!

// ✅ SOLUTION:

function sayHello( name, city, state ) {
    res = name.join(' ');
    return  `Hello, ${res}! Welcome to ${city}, ${state}!`
}

console.log(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'));