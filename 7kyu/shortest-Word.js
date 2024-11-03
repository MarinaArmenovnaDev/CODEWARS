// ❓ Просто, если задана строка слов, вернуть длину самого короткого слова(слов).

// Строка никогда не будет пустой, и вам не нужно учитывать различные типы данных.

// ✅ SOLUTION:
function findShort(s){
        // Разбиваем строку на массив слов
        let words = s.split(' ');
    
        // Инициализируем переменную для минимальной длины слова
        let minLength = words[0].length;
    
        // Проходим по массиву слов, начиная со второго элемента
        for (let i = 1; i < words.length; i++) {
            if (words[i].length < minLength) {
                minLength = words[i].length; // Обновляем минимальную длину
            }
        }
    
        return minLength; // Возвращаем минимальную длину слова
    }
console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
