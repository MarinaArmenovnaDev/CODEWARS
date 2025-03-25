// ❓ Дана строка, состоящая из букв a, b и/или c, поменяйте местами буквы a и b (измените a на b и наоборот). Оставьте все вхождения c нетронутыми.

// Пример:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

// ✅ SOLUTION

function switcheroo(x){
return x.split("").map(el => el ==="a" ? el="b" : el === "b"? el = "a" : "c").join("")
}

console.log(switcheroo("aabacbaa"));
