// ❓ Волки были вновь завезены в Великобританию. Вы фермер-овцевод, и теперь вас преследуют волки, которые притворяются овцами. К счастью, вы хорошо умеете их замечать.

// Предупредите овцу перед волком, что ее сейчас съедят. Помните, что вы стоите в начале очереди , которая находится в конце ряда:

// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1
// Если волк — ближайшее к вам животное, верните "Pls go away and stop eating my sheep". В противном случае верните "Oi! Sheep number N! You are about to be eaten by a wolf!"позицию Nовцы в очереди.

// Примечание: в массиве всегда будет ровно один волк.

// Примеры
// Вход: ["sheep", "sheep", "sheep", "wolf", "sheep"]
// Выход:"Oi! Sheep number 1! You are about to be eaten by a wolf!"

// Вход: ["sheep", "sheep", "wolf"]
// Выход:"Pls go away and stop eating my sheep"

// ✅ SOLUTION:
function warnTheSheep(queue) {
    const wolfIndex = queue.indexOf('wolf');
    if (wolfIndex === queue.length - 1) {
        return "Pls go away and stop eating my sheep";
    } else {
        // находим номер овцы, которая находится перед волком
        const sheepNumber = queue.length - 1 - wolfIndex;
        return `Oi! Sheep number ${sheepNumber}! You are about to be eaten by a wolf!`;
    }
}

// Примеры использования:
console.log(warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"])); // "Oi! Sheep number 1! You are about to be eaten by a wolf!"
console.log(warnTheSheep(["sheep", "sheep", "wolf"])); // "Pls go away and stop eating my sheep"

console.log(warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"]));
console.log(warnTheSheep(["sheep", "sheep", "sheep", "wolf"]));