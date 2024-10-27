// ❓ Напишите функцию, которая суммирует список, но игнорирует любые дублирующиеся элементы в списке.

// Например, для списка [3, 4, 3, 6]функция должна возвращать 10,
// а для списка [1, 10, 3, 10, 10]функция должна возвращать 4.

// ✅ SOLUTION:
function sumNoDuplicates(numList) {
    // Фильтруем массив, оставляя только уникальные элементы
    const uniqueElements = numList.filter((num, index, arr) => arr.indexOf(num) === index && arr.lastIndexOf(num) === index);
  
    // Суммируем оставшиеся элементы
    const sum = uniqueElements.reduce((acc, num) => acc + num, 0);
  
    return sum;
  }

  console.log(sumNoDuplicates([1, 10, 3, 10, 10]));
