// ❓ Завершите решение так, чтобы оно сортировало переданный массив чисел. Если функция передает пустой массив или значение null/nil, то она должна вернуть пустой массив.

// Например:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

// ✅ SOLUTION:
function solution(nums){
if (nums === null){
    return []
}
let result = nums.sort(function (a,b){
    return a-b
})
return result
}

console.log(solution ([]));