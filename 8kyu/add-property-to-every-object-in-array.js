// ❓ Ваша задача — добавить новое свойство usersAnswerк каждому объекту в массиве questions. Значение usersAnswerдолжно быть установлено на null. Решение должно работать для массива любой длины.

// Например:

// var questions = [{
//     question: "What's the currency of the USA?",
//     choices: ["US dollar", "Ruble", "Horses", "Gold"],
//     corAnswer: 0
// }, {
//     question: "Where was the American Declaration of Independence signed?",
//     choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
//     corAnswer: 0
// }];
// После добавления свойства результат должен быть следующим:

// var questions = [{
//     question: "What's the currency of the USA?",
//     choices: ["US dollar", "Ruble", "Horses", "Gold"],
//     corAnswer: 0,
//     usersAnswer: null
// }, {
//     question: "Where was the American Declaration of Independence signed?",
//     choices: ["Philadelphia", "At the bottom", "Frankie's pub", "China"],
//     corAnswer: 0,
//     usersAnswer: null
// }];
// Массив questionsуже определен и не совпадает с массивом в примере.

// ✅ SOLUTION:

function addName(questions) {
    for (let i = 0; i < questions.length; i++) {
        questions[i].usersAnswer = null
        
    }
    return questions
}

addName(questions);






