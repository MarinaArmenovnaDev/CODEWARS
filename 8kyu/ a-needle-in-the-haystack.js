// ❓ Сможете ли вы найти иголку в стоге сена?

// Напишите функцию findNeedle(), которая принимает arrayполный мусор, но содержит один"needle"

// После того, как ваша функция найдет иглу, она должна вернуть сообщение (в виде строки), которое гласит:

// "found the needle at position "плюс indexон нашел иголку, так что:

// Пример (Вход -> Выход)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 




// ✅ SOLUTION:

function findNeedle(haystack) {
    for (let i = 0; i < haystack.length; i++) {
        if(haystack[i] === "needle"){
            return `found the needle at position ${i}`
        }
    }
    return 'netuuu'
}

console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]) );