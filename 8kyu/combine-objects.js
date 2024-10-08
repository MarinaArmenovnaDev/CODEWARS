// ❓ Ваша задача — написать функцию, которая принимает два или более объекта и возвращает новый объект, объединяющий все входные объекты.

// Все свойства входных объектов будут иметь только числовые значения. Объекты объединяются вместе, так что значения соответствующих ключей суммируются.

// Пример:

// const objA = { a: 10, b: 20, c: 30 }
// const objB = { a: 3, c: 6, d: 3 }
// combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }
// Функция объединения должна быть добросовестной, поэтому не должна изменять входные объекты.

// ✅ SOLUTION:


function combine(...obj) {
    const newObj = {}   // создаем новый объект
    for (let i = 0; i < obj.length; i++) {
        const element = obj[i];
        for (const key in element) {
            if (newObj[key]=== undefined) {
                newObj[key] = element[key]
            } else {
                newObj[key] += element[key]
            }
        }
        
    }
  return newObj
  }

  const objA = { 
    a: 10, 
    b: 20,
    c: 30 
}
const objB = {
    a: 3,
    c: 6, 
    d: 3 
}
