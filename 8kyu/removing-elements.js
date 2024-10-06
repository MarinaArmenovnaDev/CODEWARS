// ❓ Возьмите массив и удалите каждый второй элемент из массива. Всегда сохраняйте первый элемент и начинайте удаление со следующего элемента.

// Пример:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...]-->["Keep", "Keep", "Keep", ...]

// Ни один из массивов не будет пустым, так что вам не о чем беспокоиться!



// ✅ SOLUTION:
function removeEveryOther(arr){
    return arr.filter((el,index) => index % 2 === 0)
  }

  console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]));