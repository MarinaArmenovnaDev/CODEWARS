// ❓ Удобное слово — это слово, которое вы можете набирать, всегда чередуя руку, которой печатаете (при условии, что вы печатаете с помощью клавиатуры QWERTY и используете пальцы, как показано на рисунке ниже).

// С учетом вышесказанного, завершите функцию, которая получает слово и возвращает, trueявляется ли оно удобным или falseнет.

// Слово всегда будет представлять собой строку, состоящую только из букв ASCII от aдо z.



// Чтобы избежать проблем с доступностью изображений, вот списки букв для каждой руки:

// Левый:q, w, e, r, t, a, s, d, f, g, z, x, c, v, b
// Верно:y, u, i, o, p, h, j, k, l, n, m
// Примеры
// "yams"  -->  true
// "test"  -->  false

// ✅ SOLUTION:
function comfortableWord(word) {
    const leftHandLetters = new Set(["q", "w", "e", "r", "t", "a", "s", "d", "f", "g", "z", "x", "c", "v", "b",])
    const rightHandLetters = new Set(["y", "u", "i", "o", "p", "h", "j", "k", "l", "n", "m"])
    for (let i = 1; i < word.length; i++) {
        const prevLetter = word[i - 1];
        const currentLetter = word[i];
        
        // Определяем, какой рукой печатается предыдущая и текущая буквы
        const prevHand = leftHandLetters.has(prevLetter) ? 'left' : 'right';
        const currentHand = leftHandLetters.has(currentLetter) ? 'left' : 'right';
        
        // Если обе буквы одной руки - слово неудобное
        if (prevHand === currentHand) {
            return false;
        }
    }
    return true
}

  console.log(comfortableWord("yams"));