//❓Возле дороги стоят столбы. Расстояние между столбами одинаковое, а ширина столбов одинаковая. 
// Ваша функция принимает три аргумента:

// количество столбов (≥ 1);
// расстояние между столбами (10 - 30 метров);
// ширина столба (10 - 50 сантиметров).
// Рассчитайте расстояние между первым и последним столбом в сантиметрах (без ширины первого и последнего столба).



// ✅ SOLUTION:
function pillars(numPill, dist, width) {
    if(numPill <= 1) return 0
    let res  = 0
    let newDist =  dist*100
    let gaps = numPill - 1;
    let intermediatePillars = numPill - 2
    res = gaps * newDist + intermediatePillars * width
    return res
  }

  console.log(pillars(4, 50, 10));