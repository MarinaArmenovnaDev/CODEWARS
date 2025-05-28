// ❓  В этом ката вам нужно будет написать функцию, которая принимает litresи pricePerLitre( в долларах ) в качестве аргументов.

// При покупке 2 или более литров предоставляется скидка 5 центов за литр, при покупке 4 или более литров предоставляется скидка 10 центов за литр и так далее каждые два литра, вплоть до максимальной скидки 25 центов за литр. Но общая скидка за литр не может превышать 25 центов. Верните общую стоимость, округленную до 2 знаков после запятой. Также вы можете догадаться, что не будет отрицательных или нечисловых входных данных.

// Удачи!

// Примечание
// 1 доллар = 100 центов

// ✅ SOLUTION:

function fuelPrice(litres, pricePerLitre) {
  let discont = 0;
  if (litres >= 10) {
    discont = 25;
    //sale 5 cent fot litr
  } else if (litres >= 8) {
    discont = 20;
    //sale 10 cent fot litr
  } else if (litres >= 6) {
    discont = 15;
    //sale 15 cent fot litr
  } else if (litres >= 4) {
    discont = 10;
    //sale 20 cent fot litr
  } else if (litres >= 2) {
    discont = 5;
    //sale 25 cent fot litr
  }

  const totalCents = (pricePerLitre * 100 - discont ) * litres
  totalDollars = totalCents / 100
  return parseFloat(totalDollars.toFixed(2))
}

console.log(fuelPrice(5, 1.23));
