// ❓ Герой направляется в замок, чтобы выполнить свою миссию. Однако ему сказали, что замок окружен парой могущественных драконов! Для победы над каждым драконом требуется 2 пули, наш герой понятия не имеет, сколько пуль ему следует нести.. Если предположить, что он схватит определенное заданное количество пуль и двинется вперед, чтобы сразиться с другим определенным заданным количеством драконов, выживет ли он?

// Верните true, если да, в противном случае false :)

// ✅ SOLUTION:

function hero(bullets, dragons){
    return bullets >= dragons * 2 ? true : false
   }

   console.log(hero(7, 4));