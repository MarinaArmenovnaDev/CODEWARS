// ❓ Примеры:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// Параметр accum — это строка, включающая только буквы от a..zи A..Z.

// ✅ SOLUTION:
function accum(s) {
let res = []
for (let i = 0; i < s.length; i++) {
    const e = s[i].toUpperCase();
    let repeat = e.toUpperCase() + e.toLowerCase().repeat(i)
    res.push(repeat)
}
return res.join('-')
}

console.log(accum("RqaEzty"));
