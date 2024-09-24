// ❓ Возвращает количество гласных в заданной строке.

// Мы будем считать a, e, i, o, uгласными для этого Ката (но не y).
// Входная строка будет состоять только из строчных букв и/или пробелов.


// ✅ SOLUTION:

function getCount(str) {
    let glasnsya = 'aeiou'
    let glasnsyaCount = 0
    for (let i = 0; i < str.length; i++) {
        if(glasnsya.indexOf(str[i]) !== -1){ //Метод indexOf() возвращает индекс первого вхождения указанного значения в строковый объект String, на котором он был вызван, начиная с индекса fromIndex. Возвращает -1, если значение не найдено.
            glasnsyaCount ++
        }
    }
    return glasnsyaCount;
  }

  console.log(getCount("fhutmodae"));
