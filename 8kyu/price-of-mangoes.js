// ❓ На манго действует акция "3 по ​​цене 2" (или "2+1" , если хотите). Для заданного количества и цены (за манго) рассчитайте общую стоимость манго.

// Примеры
// mango(2, 3) ==> 6    # 2 mangoes for $3 per unit = $6; no mango for free
// mango(3, 3) ==> 6    # 2 mangoes for $3 per unit = $6; +1 mango for free
// mango(5, 3) ==> 12   # 4 mangoes for $3 per unit = $12; +1 mango for free
// mango(9, 5) ==> 30   # 6 mangoes for $5 per unit = $30; +3 mangoes for free

// ✅ SOLUTION:

function mango(quantity, price){
let sale = 0
if(quantity <= 2){
    return quantity * price
}
let fullPriceMangoes = quantity - Math.floor(quantity / 3);
return fullPriceMangoes * price;
}

console.log(mango(5,3));
