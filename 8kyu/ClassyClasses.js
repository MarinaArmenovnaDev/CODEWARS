// ❓ Классные занятия
// Базовые классы, эта ката в основном нацелена на новое обновление JS ES6, вводящее классы

// Задача
// Ваша задача — завершить этот класс, класс Person был создан. Вы должны заполнить метод Constructor, чтобы принять имя как строку и возраст как число, завершить свойство get Info и метод getInfo/Info getter, который должен вернутьjohns age is 34

// ✅ SOLUTION:

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

get info() {
    return `${this.name}s age is ${this.age}`;
} 
}
