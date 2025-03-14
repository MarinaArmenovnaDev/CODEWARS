// ❓В вашем классе был тест, и вы его прошли. Поздравляем!

// Но вы амбициозный человек. Вы хотите знать, лучше ли вы, чем среднестатистический ученик в вашем классе.

// Вы получаете массив с результатами тестов ваших однокурсников. Теперь посчитайте средний балл и сравните свой!

// Возвращайтесь, true если вам станет лучше, иначе false!

// Примечание:
// Ваши баллы не входят в массив баллов вашего класса. Не забывайте их при подсчете среднего балла!

// ✅ SOLUTION:
function betterThanAverage(classPoints, yourPoints) {
    return  yourPoints > classPoints.reduce((pre, val) => pre + val + yourPoints) / (classPoints.length + 1);
}

console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)); 