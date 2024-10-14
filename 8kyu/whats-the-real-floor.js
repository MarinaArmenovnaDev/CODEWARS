// ❓ Американцы — странные люди: в их зданиях первый этаж на самом деле является цокольным, а 13-го этажа нет (из-за суеверия).

// Напишите функцию, которая по указанному полу в американской системе возвращает пол в европейской системе.

// С заменой 1-го этажа на первый этаж и удалением 13-го этажа цифры перемещаются вниз, чтобы занять их место. В случае выше 13 они перемещаются вниз на два, потому что под ними есть два пропущенных числа.

// Подвалы (негативы) остаются такими же, как и на универсальном уровне.

// Более подробная информация здесь

// Примеры
// 1  =>  0 
// 0  =>  0
// 5  =>  4
// 15  =>  13
// -3  =>  -3

// ✅ SOLUTION:
function getRealFloor(n) {
    return n >= 1 && n <= 12 ? n-1: n <= 0 ? n : n > 12 ? n-2 : false
}
console.log(getRealFloor(-3))
