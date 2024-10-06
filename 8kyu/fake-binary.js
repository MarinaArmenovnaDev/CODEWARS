// ❓Дана строка цифр, вам следует заменить любую цифру ниже 5 на '0', а любую цифру 5 и выше на '1'. Верните полученную строку.

// Примечание: ввод никогда не будет пустой строкой.



// ✅ SOLUTION:
function fakeBin(x){
let arr = [...x]
for (let i = 0; i < arr.length; i++) {
if(arr[i] < 5){
    arr[i]= '0'
} else if(arr[i] >= 5){
    arr[i] ='1'
}
    
}
return arr.join('')
}

console.log(fakeBin([1,2,4,5,6,7,8,9]));