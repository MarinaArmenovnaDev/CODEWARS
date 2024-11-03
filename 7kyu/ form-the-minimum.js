// ❓Учитывая список цифр , верните наименьшее число , которое можно составить из этих цифр, используя цифры только один раз (игнорируйте повторы).

// Примечания:
// В функцию будут переданы только положительные целые числа (> 0), отрицательные числа или нули не передаются.
// Примеры ввода >> вывода
// minValue ({1, 3, 1})  ==> return (13)
// Объяснение:
// (13) — это минимальное число, которое можно образовать из {1, 3, 1} , без дубликатов.

// minValue({5, 7, 5, 9, 7})  ==> return (579)
// Объяснение:
// (579) — это минимальное число, которое можно образовать из {5, 7, 5, 9, 7} , без повторений.


// ✅ SOLUTION:
function minValue(values){
    const unic = [...new Set(values)].sort((a,b)=> a-b)
    return +unic.join('')
  }

  console.log(minValue([1, 7, 5, 9, 7]));
