// ❓ Создайте функцию, которая принимает список/массив и число n и возвращает список/массив первых n элементов из списка/массива.

// Если вам нужна помощь, вот ссылка:

// ✅ SOLUTION:
function take(arr, n) {
    return arr.slice(0, n)
  }

  console.log(take([ 3, 5, 8, 13 ],3));
