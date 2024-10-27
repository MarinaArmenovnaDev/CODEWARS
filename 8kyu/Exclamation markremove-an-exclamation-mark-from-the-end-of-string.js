// ❓ Уберите восклицательный знак с конца строки. Для начинающего ката можно предположить, что входные данные всегда являются строкой, нет необходимости ее проверять.

// Примеры
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi!!"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"

// ✅ SOLUTION:
function remove (string) {
for (let i = 0; i < string.length; i++) {
    if(string.at(-1) === '!'){
       return string.slice(0, -1)
        
    };
    return string
}
}

  console.log(remove( "!Hi"));
