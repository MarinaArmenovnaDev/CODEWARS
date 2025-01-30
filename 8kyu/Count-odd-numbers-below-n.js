//❓Дано число n, верните количество положительных нечетных чисел ниже n. ЛЕГКО!

//✅ SOLUTION:


function oddCount(n){
    let count = 0
 for (let i = 1 ; i < n; i++) {
    if(i % 2 === 1) {
        count++
    } 
 }
 return count
}
console.log(oddCount(7));