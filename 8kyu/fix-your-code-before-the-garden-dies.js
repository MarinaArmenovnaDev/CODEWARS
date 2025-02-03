// ❓ У вас есть отмеченный наградами сад, и каждый день растениям нужно ровно 40 мм воды. Вы создали отличный фрагмент JavaScript для расчета количества воды, необходимого вашим растениям, приняв во внимание прогнозируемое на день количество дождевой воды. Ваш завистливый сосед взломал ваш компьютер и наполнил ваш код ошибками.

// Ваша задача — отладить код, прежде чем ваши растения погибнут!

// ✅ SOLUTION:
    function rainAmount(mm){
        let res = 40 - mm
          if (mm < 40) {
               return `You need to give your plant ${res}mm of water`
          }
          else {
               return "Your plant has had more than enough water for today!"
          };
        }
    

console.log(rainAmount(39));