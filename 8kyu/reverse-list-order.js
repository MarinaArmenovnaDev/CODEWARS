// ❓ В этом ката вы создадите функцию, которая принимает список и возвращает список в обратном порядке.

// Примеры (Вход -> Выход)
// * [1, 2, 3, 4]  -> [4, 3, 2, 1]
// * [9, 2, 0, 7]  -> [7, 0, 2, 9]


// ✅ SOLUTION:
function reverseList(list) {
    for (let i = 0; i < list.length; i++) {
        const element = list[i];}

        element = list.reverse()
        return element
}
console.log(reverseList([1, 2, 3]));
