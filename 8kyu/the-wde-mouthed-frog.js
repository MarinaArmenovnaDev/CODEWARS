// ❓ Ваша цель в этом ката — создать полный mouth_sizeметод, этот метод принимает один аргумент animal, который соответствует животному, с которым столкнулась лягушка. Если это alligator(нечувствительный к регистру) return, smallв противном случае return wide.

// ✅ SOLUTION:
function mouthSize(animal) {
    if(animal.toLowerCase() === 'alligator'){
        return 'small'
    }
    return 'wide'
  }
console.log(mouthSize('aLLigator'));