// ❓ Дополните решение так, чтобы оно перевернуло переданную в него строку.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'


// ✅ SOLUTION:

function solution(str){
let result = '';
for (let i = str.length - 1 ; i >= 0 ; i --) {
    result += str[i]
  }
  return result;
}

console.log(solution('world'));


  


