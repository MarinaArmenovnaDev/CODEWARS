//  ❓ Ваша функция принимает два аргумента:

// возраст нынешнего отца (лет)
// текущий возраст его сына (лет)
// Вычислите, сколько лет назад отец был вдвое старше своего сына (или через сколько лет он будет вдвое старше). Ответ всегда больше или равен 0, независимо от того, было ли это в прошлом или в будущем.

// ✅ SOLUTION:

function twiceAsOld(dadYearsOld, sonYearsOld) {
    let newOld = dadYearsOld - (sonYearsOld * 2)
    if (dadYearsOld > sonYearsOld * 2){
        return newOld
    } else if (dadYearsOld < sonYearsOld * 2){
        return -newOld
    } else {
        return 0
    }
  }

