//❓Дано число n, верните количество положительных нечетных чисел ниже n. ЛЕГКО!

//✅ SOLUTION:



function oddCount(n){
    if(n <= 0 ) return 0
    return Math.floor(n/2)
}

console.log(oddCount(7));