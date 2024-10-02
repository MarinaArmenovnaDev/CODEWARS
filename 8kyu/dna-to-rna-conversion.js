// ❓ Дезоксирибонуклеиновая кислота, ДНК, является основной молекулой хранения информации в биологических системах. Она состоит из четырех оснований нуклеиновых кислот: гуанина ('G'), цитозина ('C'), аденина ('A') и тимина ('T').
// Рибонуклеиновая кислота, РНК, является основной молекулой-мессенджером в клетках. РНК немного отличается от ДНК по своей химической структуре и не содержит тимина. В РНК тимин заменяется другой нуклеиновой кислотой урацилом ('U').

// Создайте функцию, которая переводит заданную строку ДНК в РНК.

// Например:

// "GCAT"  =>  "GCAU"
// Входная строка может быть произвольной длины - в частности, она может быть пустой. Все входные данные гарантированно являются допустимыми, т.е. каждая входная строка будет состоять только из 'G', 'C', 'A'и/или 'T'.




// ✅ SOLUTION:

function DNAtoRNA(dna) {
    let newArray = [...dna].map(item => item === 'T' ? 'U' : item).join('');
    return newArray
  }

  console.log(DNAtoRNA(""));