// ❓ BA вашего стартапа сообщил маркетингу, что у вашего сайта большая аудитория в Скандинавии и соседних странах. Маркетинг считает, что было бы здорово приветствовать посетителей сайта на их родном языке. К счастью, вы уже используете API, который определяет местоположение пользователя, так что это легкая победа.

// Задача
// Подумайте о способе хранения языков в виде базы данных. Языки перечислены ниже, так что вы можете копировать и вставлять!
// Напишите функцию 'welcome', которая принимает параметр 'language' с типом Stringи возвращает приветствие - если оно есть в вашей базе данных. По умолчанию она должна быть на английском языке, если язык отсутствует в базе данных или в случае недопустимого ввода.
// База данных
// Пожалуйста, измените это в соответствии с вашим языком.

// [ ("english", "Welcome")
// , ("czech", "Vitejte")
// , ("danish", "Velkomst")
// , ("dutch", "Welkom")
// , ("estonian", "Tere tulemast")
// , ("finnish", "Tervetuloa")
// , ("flemish", "Welgekomen")
// , ("french", "Bienvenue")
// , ("german", "Willkommen")
// , ("irish", "Failte")
// , ("italian", "Benvenuto")
// , ("latvian", "Gaidits")
// , ("lithuanian", "Laukiamas")
// , ("polish", "Witamy")
// , ("spanish", "Bienvenido")
// , ("swedish", "Valkommen")
// , ("welsh", "Croeso")
// ]
// Возможные недействительные входные данные включают в себя:

// IP_ADDRESS_INVALID - not a valid ipv4 or ipv6 ip address
// IP_ADDRESS_NOT_FOUND - ip address not in the database
// IP_ADDRESS_REQUIRED - no ip address was supplied

// ✅ SOLUTION:

function greet(language) {
	const data = {
    english: "Welcome",
    czech: "Vitejte",
    danish: "Velkomst",
    dutch: "Welkom",
    estonian: "Tere tulemast",
    finnish: "Tervetuloa",
    flemish: "Welgekomen",
    french: "Bienvenue",
    german: "Willkommen",
    irish: "Failte",
    italian: "Benvenuto",
    latvian: "Gaidits",
    lithuanian: "Laukiamas",
    polish: "Witamy",
    spanish: "Bienvenido",
    swedish: "Valkommen",
    welsh: "Croeso",
  };
if(data.hasOwnProperty(language)){
    return data[language]
}else{
    return data.english
}
}

console.log(greet("Laukiamas"));
