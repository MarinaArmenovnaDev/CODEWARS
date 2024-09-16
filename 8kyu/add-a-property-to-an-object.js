// ❓Напишите функцию, которая добавляет именованное свойство к объекту. Должна быть возможность задать свойству новое значение. Если свойство уже существует в объекте, должна быть выдана ошибка.


// ✅ 
const object = {
    name: "Marina",
    status: "zaebalas"
   }

function addProperty(obj, prop, value) {
    if(prop in obj && obj[prop] !== undefined){
        throw new Error('Error message')
    }else {
        obj[prop] = value
 } 
}
 
