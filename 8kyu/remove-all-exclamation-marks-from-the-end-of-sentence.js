// ❓Описание:
// Удалите все восклицательные знаки в конце предложения.

// Примеры
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"

// ✅ SOLUTION:
function remove(string) {  
    let last = string.length -1
while(string[last] === '!'){
    last --
}
return string.slice(0, last+1)
  }

  console.log(remove('!!hi!!!!!!'));