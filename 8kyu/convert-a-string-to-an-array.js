// ❓  Напишите функцию для разбиения строки и преобразования ее в массив слов.

// Примеры (Вход ==> Выход):
// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

// ✅ SOLUTION:
function stringToArray(string){
const result = string.split(' ') //метод split для разделения строк на элементы по определенному разделителю
return result
}

stringToArray("Robin Singh")
