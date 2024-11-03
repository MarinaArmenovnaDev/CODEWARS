// ❓ Проблема
// Похоже, какой-то негодяй-сантехник и его брат снова бегают по вашим сценам и портят их.

// pipesПрежде чем вы получите новые жалобы, необходимо исправить соединение этапов вашего уровня .

// Правильны pipes, когда каждое pipeпоследующее 1больше предыдущего.

// Задача
// Учитывая список уникальных numbersэлементов, отсортированных по возрастанию, вернуть новый список так, чтобы значения увеличивались на 1 для каждого индекса от минимального значения до максимального значения (оба включены).

// Пример
// Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8

// ✅ SOLUTION:

function pipeFix(numbers){

const min = Math.min(...numbers)
const max = Math.max(...numbers)

const res = []
for (let i = min; i <= max; i++) {
    res.push(i)
}
return res
}

console.log(pipeFix([1,3,5,6,7,8]));