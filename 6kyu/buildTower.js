// ❓ Построить башню
// Построить башню в форме пирамиды, как массив/список строк, заданных положительным целым числом number of floors. Блок башни представлен "*"символом.

// Например, башня с 3этажами выглядит так:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// А башня с 6этажами выглядит вот так:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]


// ✅ SOLUTION:
function towerBuilder(nFloors) {
    const tower = [];
    for (let i = 0; i < nFloors; i++) {
      const spaces = ' '.repeat(nFloors - i - 1);
      const stars = '*'.repeat(2 * i + 1);
      tower.push(spaces + stars + spaces);
    }
    return tower;
  }
  console.log(towerBuilder(5));

