// ❓ Ваши одноклассники попросили вас скопировать для них некоторые документы. Вы знаете, что есть 'n' одноклассников и документы имеют 'm' страниц.

// Ваша задача — подсчитать, сколько пустых страниц вам нужно. Если n < 0или m < 0вернуть 0.

// Пример:
// n= 5, m=5: 25
// n=-5, m=5:  0



// ✅ SOLUTION:
function paperwork(n, m) {
  if(n < 0 || m < 0){
    return 0
  }else{
    return n * m
  }
}
