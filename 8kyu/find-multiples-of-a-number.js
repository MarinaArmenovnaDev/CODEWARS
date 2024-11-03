// ❓ В этом простом упражнении вы создадите программу, которая принимает значение integer , и возвращает список его кратных вплоть до другого значения . limit Если limitявляется кратным integer, его также следует включить. В функцию будут передаваться только положительные целые числа, не состоящие из 0. Предел всегда будет выше основания.

// Например, если переданы параметры (2, 6), функция должна вернуть значения [2, 4, 6], поскольку 2, 4 и 6 являются кратными 2 до 6.



// ✅ SOLUTION:

function findMultiples(integer, limit) {
    let res = []
    for (let i = integer; i <= limit;  i += integer) {
            res.push(i)
    }
    return res
}



console.log(findMultiples(5, 25));