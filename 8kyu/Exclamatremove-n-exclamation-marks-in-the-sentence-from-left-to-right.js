// ❓  Удалите nвосклицательные знаки в предложении слева направо. n— положительное целое число.

// Примеры
// remove("Hi!",1) === "Hi"
// remove("Hi!",100) === "Hi"
// remove("Hi!!!",1) === "Hi!!"
// remove("Hi!!!",100) === "Hi"
// remove("!Hi",1) === "Hi"
// remove("!Hi!",1) === "Hi!"
// remove("!Hi!",100) === "Hi"
// remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"

// ✅ SOLUTION:

function remove(s,n){
    let res = ''
 let count = 0 
for (const char of s) {
    if(char === "!" && count < n){
        count ++
    } else {
        res += char
    }
}
   return res 
 }
    
  

 console.log("!Hi!!!!!!",1) ;