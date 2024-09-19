// ❓ Камень-ножницы-бумага
// Давайте играть! Вам нужно вернуть, какой игрок выиграл! В случае ничьей верните Draw!.

// Примеры (Вход1, Вход2 -> Выход):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"


// ✅ SOLUTION:
const rps = (p1, p2) => {
    if  (p1 === "scissors" && p2 === "paper" ||
         p1 === "paper" && p2 === "rock" ||
         p1 === "rock" && p2 === "scissors"){
        return "Player 1 won!"
    }else if(p1 === "paper" && p2 === "scissors" ||
             p1 === "rock" && p2 === "paper" ||
             p1 === "scissors" &&  p2 === "rock"){
        return "Player 2 won!"
    } else{
        return "Draw!"
    }
}
