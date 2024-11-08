// ❓ Функция объединения строк
// Создайте функцию с именем combineNames/ combine_names/, CombineNamesкоторая принимает два параметра (имя и фамилию). Функция должна возвращать полное имя.

// Пример:

// С "James"именем и "Stevens"фамилией следует вернуть"James Stevens"



// ✅ SOLUTION:
function combineNames(a,b) {
    return [a,b].join(' ')
}
console.log(combineNames("James","Stevens"));
