//❓Зашифруйте это!
//
// Вы хотите создать секретные сообщения, которые можно расшифровать с помощью ката «Расшифруй это!» . Вот условия:
//
// Ваше сообщение представляет собой строку, содержащую слова, разделенные пробелами.
// Вам необходимо зашифровать каждое слово в сообщении, используя следующие правила:
// Первую букву необходимо преобразовать в ее код ASCII.
// Вторую букву необходимо поменять местами с последней буквой.
// Если говорить проще: во входных данных нет специальных символов.

// ✅ SOLUTION:
var encryptThis = function(text) {
    return text.split(' ')
        .map(word => {
            if (word.length === 0) return '';
            if (word.length === 1) return word.charCodeAt(0).toString();

            const chars = word.split('');
            // Меняем вторую и последнюю буквы
            [chars[1], chars[chars.length - 1]] = [chars[chars.length - 1], chars[1]];
            // Заменяем первую букву на ASCII код
            chars[0] = chars[0].charCodeAt(0).toString();

            return chars.join('');
        })
        .join(' ');
}

console.log(encryptThis("Hello"))
