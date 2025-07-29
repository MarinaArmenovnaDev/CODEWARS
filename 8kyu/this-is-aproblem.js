//❓Мы хотим создать функцию-конструктор NameMe, которая принимает имя и фамилию в качестве параметров. Функция объединяет имя и фамилию и сохраняет значение в свойстве name.
//
// Мы уже реализовали эту функцию, но при запуске кода свойство «name» доступно, а «firstName» и «lastName» — нет. Все свойства должны быть доступны. Можете ли вы найти ошибку? Также доступна тестовая фикстура.

// ✅ SOLUTION:
function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.name = this.firstName + ' ' + this.lastName
}

var n = new NameMe('John', 'Doe');
n.firstName //Expected: John
n.lastName //Expected: Doe
n.name //Expected: John Doe

console.log(n)
