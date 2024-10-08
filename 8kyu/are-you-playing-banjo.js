// ❓Создайте функцию, которая отвечает на вопрос «Вы играете на банджо?».
// Если ваше имя начинается с буквы «R» или строчной «r», вы играете на банджо!

// Функция принимает имя в качестве единственного аргумента и возвращает одну из следующих строк:

// name + " plays banjo" 
// name + " does not play banjo"
// Указанные имена всегда являются допустимыми строками.



// ✅ SOLUTION:
function areYouPlayingBanjo(name) {
    for (let i = 0; i < name.length; i++) {
    if (name[0]==='R'|| name[0] === 'r') {
        return `${name}` + " plays banjo"
    }
     return `${name}` + " does not play banjo"
    }
}

  console.log(areYouPlayingBanjo('Roby'));
