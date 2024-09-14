// ❓ В javascript Object — один из основных типов данных. Определить Object можно с помощью var obj=new Object()илиvar obj={}

// Атрибуты объекта можно определить во время инициализации, например так:

// var animal={name:"dog"}
// Вы также можете задать/получить некоторые свойства после определения объекта, например:

// var animal={}
// animal.name="dog"  (or animal["name"]="dog")

// Задача
// Дайте вам функцию animal, принимающую 1 параметр: objнапример, так:

// {name:"dog",legs:4,color:"white"}
// и вернуть строку вроде этой:

// "This white dog has 4 legs."
// Закончив работу, нажмите «Выполнить тесты», чтобы проверить, правильно ли работает ваш код.

// В конце нажмите «Отправить», чтобы отправить свой код для прохождения этого ката.




// ✅ SOLUTION:

const obj1 = {
    name:"dog",
    legs:4,
    color:"white"
}

const obj2 = {
    name:"cock",
    legs:2,
    color:"red"

}

const obj3 = {
    name:"rabbit",
    legs:4,
    color:"gray"
}

function animal(obj){
    return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}

console.log(animal(obj1))




