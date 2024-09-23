// ❓Вам дадут слово. Ваша задача — вернуть средний символ слова. Если длина слова нечетная, верните средний символ. Если длина слова четная, верните средние 2 символа.

// #Примеры:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Вход

// Слово (строка) длиной 0 < str < 1000(В JavaScript вы можете получить немного больше 1000 в некоторых тестовых случаях из-за ошибки в тестовых случаях). Вам не нужно проверять это. Это только для того, чтобы сказать вам, что вам не нужно беспокоиться о тайм-ауте вашего решения.

// #Выход

// Средний символ(ы) слова, представленный в виде строки.


// ✅ SOLUTION:

function getMiddle(s){
        if(s.length % 2 === 0) { //проверка на четность
            const centerElement = s.length / 2 //грубо находим середину поделив длину массива на 2
            return s.substring(centerElement - 1 , centerElement + 1) // substring позволяет выбрать элементы по индексу -1 это предыдущий от середины, а +1 следующий от середины
        } else {
            const centerElement = s.length/2 // если число нечетное то просто выводим середину массива, метод charAt позволяет вывести сам символ
            return s.charAt(centerElement)
        }  
}

const s = "njifjnskjdnfd";
console.log(getMiddle(s)); 

