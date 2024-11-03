// ❓ Программное обеспечение для распознавания символов широко используется для оцифровки печатных текстов. Таким образом, тексты можно редактировать, искать и сохранять на компьютере.

// При оцифровке документов (особенно довольно старых, написанных на пишущей машинке) программы распознавания символов часто допускают ошибки.

// Ваша задача - исправить ошибки в оцифрованном тексте. Вам нужно только обработать следующие ошибки:

// S неправильно истолковано как5
// Oнеправильно истолковано как0
// Iнеправильно истолковано как1
// Тестовые случаи содержат цифры только по ошибке.


// ✅ SOLUTION:
function correct(string){
	let newStr = string.split("")
    for (let i = 0; i < newStr.length; i++) {
        if(newStr[i]=== '1'){
            newStr[i] = 'I'
        }else if(newStr[i]=== '5'){
            newStr[i]= 'S'
        }else if(newStr[i]=== '0'){
            newStr[i] = 'O'
        }

        
    }
    
    return newStr.join("")
}


console.log(correct('"DUBL1N"'));