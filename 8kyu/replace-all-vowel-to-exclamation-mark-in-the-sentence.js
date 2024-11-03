// ❓Замените все гласные в предложении восклицательными знаками. aeiouAEIOU— гласная.


// ✅ SOLUTION:
function replace(s){
const res = s.replace(/[aeiouAEIOU]/g, '!')
return res
}

  console.log(replace("!Hi! Hi!"));
