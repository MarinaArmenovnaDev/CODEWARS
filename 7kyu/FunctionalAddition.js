//❓Создайте функцию add(n)/ Add(n), которая возвращает функцию, которая всегда прибавляет n к любому числу.
//
// Примечание для Java: тип возвращаемого значения и методы не указаны, что немного усложняет задачу.
//
// var addOne = add(1);
// addOne(3); // 4
//
// var addThree = add(3);
// addThree(3); // 6

//✅ SOLUTION:
function add(n) {
return function (a){
    return n+a
    }
}

console.log(add(5));
