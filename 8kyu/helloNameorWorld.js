// ❓ Определите метод hello, который выводит returnsсообщение «Hello, Name!» для заданного name, или выводит сообщение «Hello, World!», если имя не указано (или передано как пустая строка).

// Предположим, что nameэто String, и он проверяет наличие опечаток у пользователя, чтобы вернуть имя с первой заглавной буквой (Xxxx).

// Примеры:

// * With `name` = "john"  => return "Hello, John!"
// * With `name` = "aliCE" => return "Hello, Alice!"
// * With `name` not given 
//   or `name` = ""        => return "Hello, World!"

// ✅ SOLUTION:

    function hello(name) {

    let formattedName = ""

        if (name && name.trim() !== "") {
            for (let i = 0; i < name.length; i++) {
                if (i === 0) {
                    formattedName += name[i].toUpperCase();
                } else {
                    formattedName += name[i].toLowerCase();
                }
            }
            return `Hello, ${formattedName}!`;
        } else {
            return "Hello, World!";
        }
    }

console.log(hello("aliCE"));