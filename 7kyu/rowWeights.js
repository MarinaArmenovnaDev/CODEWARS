// ❓ Сценарий
// Несколько человек становятся в ряд, разделившись на две команды .
// Первый человек переходит в команду 1 , второй — в команду 2 , третий — в команду 1 и так далее.

// Задача
// Дан массив положительных целых чисел (веса людей) , вернуть новый массив/кортеж из двух целых чисел , где первое — общий вес команды 1 , а второе — общий вес команды 2 .

// Примечания
// Размер массива — не менее 1 .
// Все числа будут положительными .
// Примеры ввода >> вывода
// rowWeights([13, 27, 49])  ==>  return (62, 27)
// Объяснение :
// Первый элемент 62 — это общий вес команды 1 , а второй элемент 27 — это общий вес команды 2 .

// rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
// Объяснение :
// Первый элемент 120 — это общий вес команды 1 , а второй элемент 140 — это общий вес команды 2 .

// rowWeights([80])  ==>  return (80, 0)
// Объяснение :
// Первый элемент 80 — это общий вес команды 1 , а второй элемент 0 — это общий вес команды 2 .


// ✅ SOLUTION;
function rowWeights(array){
    let sum1 = 0
    let sum2 = 0
   for (let i = 0; i < array.length; i++) {
    if(i % 2 === 1){
        sum1 += array[i]
    }else if(i % 2 === 0){
        sum2 += array[i]
    }
   }
   return [sum2, sum1]
  }

  console.log(rowWeights([10, 95, 3, 22, 821, 10]));
