// ❓ У меня есть кошка и собака.

// Я получил их одновременно с котенком/щенком. Это было humanYearsмного лет назад.

// Верните их возраст сейчас как [ humanYears, catYears, dogYears]

// ПРИМЕЧАНИЯ:

// humanYears>= 1
// humanYearsтолько целые числа
// Кошачьи годы
// 15кошачьи годы для первого года
// +9кошачьи годы для второго года
// +4cat лет за каждый последующий год
// Годы Собаки
// 15собачьи годы для первого года
// +9собачьи годы для второго года
// +5собачьи годы за каждый последующий год


// ✅ SOLUTION:
var humanYearsCatYearsDogYears = function(humanYears) {
    let catYears = 0;
    let dogYears = 0;

    if (humanYears >= 1) {
        catYears += 15;
        dogYears += 15;
    }
    if (humanYears >= 2) {
        catYears += 9;
        dogYears += 9;
    }
    if (humanYears > 2) {
        catYears += (humanYears - 2) * 4;
        dogYears += (humanYears - 2) * 5;
    }

    return [humanYears, catYears, dogYears];
}

  console.log(humanYearsCatYearsDogYears(10));