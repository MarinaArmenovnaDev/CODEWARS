// ❓ Учитывая строку, необходимо вернуть строку, в которой каждый символ (с учетом регистра) повторяется один раз.

// Примеры (Вход -> Выход):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Удачи!



// ✅ SOLUTION:

function doubleChar(str) {
    const result = [...str].map(x => x+x).join("")
    return result
  }

  console.log(doubleChar("String" ));