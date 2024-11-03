// ❓Вам будет дано arrayи limitзначение. Вы должны проверить, что все значения в массиве ниже или равны предельному значению. Если это так, верните true. В противном случае верните false.

// Можно предположить, что все значения в массиве являются числами.



// ✅ SOLUTION:
function smallEnough(a, limit){
for (let i = 0; i < a.length; i++) {
  if(a[i] > limit)return false
    
}
return true
}
console.log(smallEnough([78, 99, 100, 99, ], 100));