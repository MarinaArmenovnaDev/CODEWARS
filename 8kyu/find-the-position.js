// ❓ Получив букву, верните ее положение в алфавите.

// Ввод :: "а"

// Вывод :: "Позиция алфавита: 1"

// Примечание: проверяются только строчные буквы английского языка.

// ✅ SOLUTION:
function position(letter){
    const alf = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const index = alf.indexOf(letter)
    if(index !== -1){
        return `Position of alphabet: ${index + 1}`
    }
}

    console.log(position('b'));