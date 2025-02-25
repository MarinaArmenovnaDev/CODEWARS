//❓
// Две красные бусины помещены между каждыми двумя синими бусинами. Всего синих бусин N. Посмотрев на расположение ниже, посчитайте количество красных бусин.

// @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @

// Реализуйте count_red_beads(n)(на PHP count_red_beads($n); на Java, Javascript, TypeScript, C, C++ countRedBeads(n)) так, чтобы он возвращал количество красных бусин.
// Если синих бусин меньше 2, верните 0.

// ✅ SOLUTION:

function countRedBeads(n) {
  if(n<2){
    return 0
  }
  return (n-1)*2
  }

  console.log(countRedBeads(0));