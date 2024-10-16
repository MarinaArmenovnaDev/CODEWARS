// ❓ Напишите функцию, которая принимает в качестве аргумента одну непустую строку, состоящую только из строчных и заглавных букв ASCII ( word), и возвращает упорядоченный список, содержащий индексы всех заглавных (верхних) букв в строке.

// Пример (Вход -> Выход)
// "CodEWaRs" --> [0,3,4,6]

// ✅ SOLUTION:
var capitals = function (word) {
    const res = []
	for (let i = 0; i < word.length; i++) { 
       if(word[i] === word[i].toUpperCase()){
        res.push(word.indexOf(word[i])) 
       }
        
    }
return res
};

console.log(capitals("TARuwshKWv"));
