// ❓Введение
// Идет война, и никто не знает — война алфавитов!
// Есть две группы враждебных букв. Напряжение между буквами левой и правой стороны было слишком велико, и началась война.

// Задача
// Напишите функцию, которая принимает fightстроку, состоящую только из маленьких букв, и возвращает, кто победил в битве. Когда побеждает левая сторона, возвращайте Left side wins!, когда побеждает правая сторона, возвращайте Right side wins!, в противном случае возвращайте Let's fight again!.

// Буквы левой стороны и их сила:

//  w - 4
//  p - 3
//  b - 2
//  s - 1
// Буквы правой стороны и их сила:

//  m - 4
//  q - 3
//  d - 2
//  z - 1
// Остальные буквы не имеют силы и являются лишь жертвами.

// Пример
// alphabetWar("z");        //=> Right side wins!
// alphabetWar("zdqmwpbs"); //=> Let's fight again!
// alphabetWar("zzzzs");    //=> Right side wins!
// alphabetWar("wwwwwwz");  //=> Left side wins!

// ✅ SOLUTION:
function alphabetWar(fight){
    const leftSide = { 'w': 4, 'p': 3, 'b': 2, 's': 1 };
    const rightSide = { 'm': 4, 'q': 3, 'd': 2, 'z': 1 };

    let leftScores = 0
    let rightScores = 0

for(char of fight){
    if(leftSide[char]){
            leftScores += leftSide[char]
        }
        if(rightSide[char]){
            rightScores +=rightSide[char]
        }
    }
    if(leftScores >rightScores){
        return 'Left side wins!'
    }else if(rightScores > leftScores){
        return 'Right side wins!'
    }else {
        return "Let's fight again!"
    }
}

console.log(alphabetWar("zzzzs"));