// ❓ Дети пьют пунш.
// Подростки пьют кока-колу.
// Молодежь пьет пиво.
// Взрослые пьют виски.
// Создайте функцию, которая получает возраст и возвращает то, что они пьют.

// Правила:

// Дети до 14 лет.
// Подростки до 18 лет.
// Молодежь до 21 года.
// У взрослых их 21 и более.
// Примеры: (Вход -> Выход)

// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 --> "drink whisky"

// ✅ SOLUTION:
function peopleWithAgeDrink(old) {
    return old < 14 ? "drink toddy" : old < 18 ? "drink coke" : old < 21 ? "drink beer" : old >= 21 ? "drink whisky" : "lox"
  };

  console.log(peopleWithAgeDrink(17));
