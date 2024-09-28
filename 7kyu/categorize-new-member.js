// ❓ У Western Suburbs Croquet Club есть две категории членства: Senior и Open. Они хотели бы, чтобы вы помогли им с формой заявления, которая сообщит потенциальным членам, в какую категорию они будут помещены.

// Чтобы стать пожилым, член должен быть не моложе 55 лет и иметь гандикап больше 7. В этом крокетном клубе гандикапы варьируются от -2 до +26; чем лучше игрок, тем ниже гандикап.

// Вход
// Входные данные будут состоять из списка пар. Каждая пара содержит информацию об одном потенциальном члене. Информация состоит из целого числа для возраста человека и целого числа для инвалидности человека.

// Выход
// Вывод будет состоять из списка строковых значений (на Haskell и C: Open или Senior), указывающих, следует ли отнести соответствующий член к старшей или открытой категории.

// Пример
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]


// ✅ SOLUTION:
function openOrSenior(data){
    let status = ''
    let result = []
    for (let i = 0; i < data.length; i++) {
        const el = data[i];
        let age = el[0]
        let gand = el[1]
        if( age >= 55 && gand > 7){
            status = 'Senior'
            result.push(status)
        }else if(age < 55 || gand <= 7){
            status = 'Open'
            result.push(status)
        }
    }
    return result
    }

console.log(openOrSenior([[88,21],[83,24],[38,8],[73,7],[69,20],[72,21]]));
