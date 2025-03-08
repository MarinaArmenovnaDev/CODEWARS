// ❓ В качестве аргумента вы получаете любую карту. Ваша задача — вернуть масть этой карты (в нижнем регистре).

// Наша колода (предзагружена):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

// ✅ SOLUTION:

function defineSuit(card) {
   return card.includes("♣")
   ? "clubs" : card.includes('♦')
   ? "diamonds" : card.includes('♥' ) 
   ? "hearts" : "spades"
  }
