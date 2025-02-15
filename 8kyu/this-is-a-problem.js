// ❓ Мы хотим создать функцию-конструктор 'NameMe', которая принимает имя и фамилию в качестве параметров. Функция объединяет имя и фамилию и сохраняет значение в свойстве "name".

// Мы уже реализовали эту функцию, но когда мы фактически запускаем код, свойство "name" доступно, но "firstName" и "lastName" недоступны. Все свойства должны быть доступны. Можете ли вы найти, что с этим не так? Тестовая фикстура также доступна

// function NameMe(first, last) {
//     this.firstName = first;
//     this.lastName = last;
//     return {name: this.firstName + ' ' + this.lastName};
// }

// var n = new NameMe('John', 'Doe');
// n.firstName //Expected: John
// n.lastName //Expected: Doe
// n.name //Expected: John Doe

// ✅ SOLUTION:
var n = new NameMe('John', 'Doe');

function NameMe(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.name = this.firstName + " " + this.lastName;
}
console.log(NameMe(n.name));
